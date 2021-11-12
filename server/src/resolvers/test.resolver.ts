import { Query, Resolver } from "type-graphql";

@Resolver()
class TestResolver {
  @Query(() => String)
  async hello() {
    return "Test Successful!";
  }
}

export default TestResolver;
