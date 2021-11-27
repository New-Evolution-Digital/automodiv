import { ApolloError } from "apollo-server-express";
import { Arg, Ctx, ID, Mutation, Query, Resolver } from "type-graphql";
import argon from "argon2";
import {
  DealershipDoor,
  DealershipOrganization,
  DealershipUser,
} from "../entities";
import { genPassword, makeDbSearchable } from "../utils/misc";
import { InputNewUser } from "./InputTypes";
import _ from "lodash";

@Resolver(() => DealershipUser)
class EmployeeResolver {
  @Query(() => [DealershipUser], { nullable: true })
  async getEmployeesByOrgKey(
    @Arg("key") key: string
  ): Promise<DealershipDoor[] | undefined> {
    const org = await DealershipOrganization.findOne(
      { key },
      { relations: ["employees"] }
    );

    return org?.employees;
  }

  @Query(() => DealershipUser, { nullable: true })
  async getEmployeeById(
    @Ctx() { req }: ServerContext,
    @Arg("orgKey") orgKey: string,
    @Arg("employeeId", () => ID) empId: number
  ) {
    if (!req.session.userId) {
      throw new ApolloError("Not authorized");
    }

    if (!orgKey || !empId) {
      throw new ApolloError("None Found");
    }

    const org = await DealershipOrganization.findOne({
      where: [{ key: orgKey }],
      relations: ["employees"],
    });

    if (org === undefined) {
      throw new ApolloError("None Found");
    }

    console.log("Employees", org.employees);

    if (!_.find(org.employees, { id: req.session.userId })) {
      throw new ApolloError("Not Authorized");
    }

    const emp = await DealershipUser.findOne(empId);
    console.log("employee id", empId);
    console.log("Employee", emp);

    return emp;
  }

  @Mutation(() => DealershipUser)
  async addEmployeeByOrgKey(
    @Arg("key") key: string,
    @Ctx() { req }: ServerContext,
    @Arg("credentials", () => InputNewUser) credentials: InputNewUser,
    @Arg("employeeRole") employeeRole: "admin" | "manager" | "employee"
  ): Promise<DealershipUser> {
    let foundOrg = await DealershipOrganization.findOne(
      { key },
      { relations: ["employees"] }
    );

    if (!req.session.userId) {
      throw new ApolloError("Not Authorized");
    }

    if (!foundOrg) {
      throw new ApolloError("No Matching Organization Credentials");
    }

    if (
      !foundOrg.employees.find((emp) => {
        return (
          emp.id === req.session.userId &&
          (emp.role === "admin" || emp.role === "root")
        );
      })
    ) {
      throw new ApolloError("No Matching Organization Credentials");
    }

    let params: Partial<InputNewUser> & { [key: string]: string } = {
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

    const password = await argon.hash(genPassword());
    const newEmployee = DealershipUser.create({
      firstName: params.firstName,
      lastName: params.lastName,
      email: params.email,
      username: params.email,
      password,
      role: employeeRole,
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
