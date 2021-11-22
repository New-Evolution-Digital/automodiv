import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import argon from "argon2";
import { DealershipOrganization, Employee } from "../entities";
import { makeDbSearchable } from "../utils/misc";
import { NewEmployeeCredentials } from "./InputTypes";

@Resolver(() => Employee)
class EmployeeResolver {
  @Query(() => Employee, { nullable: true })
  async getEmployeesByOrgKey(
    @Arg("key") key: string
  ): Promise<Employee[] | undefined> {
    const org: DealershipOrganization | undefined =
      await DealershipOrganization.findOne(
        { key },
        { loadEagerRelations: true }
      );

    if (org?.employees === [] || typeof org === "undefined") {
      return undefined;
    }

    return org.employees;
  }

  @Mutation(() => Employee)
  async addEmployeeByOrgKey(
    @Arg("key") key: string,
    @Ctx() { req }: ServerContext,
    @Arg("credentials", () => NewEmployeeCredentials)
    credentials: NewEmployeeCredentials
  ) {
    const foundOrg = await DealershipOrganization.findOne(
      { key },
      { loadEagerRelations: true }
    );

    if (!foundOrg) {
      throw new ApolloError("No Matching Organization Credentials");
    }

    if (foundOrg.rootUser.id !== req.session.userId) {
      throw new ApolloError("No Matching Organization Credentials");
    }

    let params: { [key: string]: string } = {
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

    const newEmployee = Employee.create({
      ...params,
      password: await argon.hash(credentials.password),
      dealershipOrganization: foundOrg,
    });
    return await newEmployee.save();
  }
}

export default EmployeeResolver;
