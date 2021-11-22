import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import argon from "argon2";
import { DealershipOrganization, Employee } from "../entities";
import { makeDbSearchable } from "../utils/misc";
import { NewEmployeeCredentials } from "./InputTypes";

@Resolver(() => Employee)
class EmployeeResolver {
  @Query(() => [Employee], { nullable: true })
  async getEmployeesByOrgKey(
    @Arg("key") key: string
  ): Promise<Employee[] | undefined> {
    const org = await DealershipOrganization.findOne(
      { key },
      { loadEagerRelations: true }
    );

    return org?.employees;
  }

  @Mutation(() => Employee)
  async addEmployeeByOrgKey(
    @Arg("key") key: string,
    @Ctx() { req }: ServerContext,
    @Arg("credentials", () => NewEmployeeCredentials)
    credentials: NewEmployeeCredentials
  ): Promise<Employee> {
    let foundOrg = await DealershipOrganization.findOne(
      { key },
      { relations: ["employees", "rootUser"] }
    );

    if (!foundOrg) {
      throw new ApolloError("No Matching Organization Credentials");
    }

    if (foundOrg.rootUser.id !== req.session.userId) {
      throw new ApolloError("No Matching Organization Credentials");
    }

    let params: Partial<NewEmployeeCredentials> & { [key: string]: string } = {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
    };

    for (const key in params) {
      if (Object.prototype.hasOwnProperty.call(params, key)) {
        const element = credentials[key];
        params[key] = makeDbSearchable(element);
      }
    }

    const password = await argon.hash(credentials.password.trim());
    const newEmployee = Employee.create({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      username: params.email,
      password,
      dealershipOrganization: foundOrg,
    });

    const saved = await newEmployee.save();

    if (!saved.id) {
      throw new ApolloError("No user was created");
    }

    if (!foundOrg.employees) {
      await DealershipOrganization.update({ key }, { employees: [saved] });
    } else {
      foundOrg.employees = [...foundOrg.employees, saved];
    }
    console.log("saved user", saved.id);
    await foundOrg.save();
    return saved;
  }
}

export default EmployeeResolver;
