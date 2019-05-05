import person from "./person";
import { ResolverContext } from "..";

export interface ResolverArgs {
    [k: string]: any;
}
export type Resolver<T> = (parent: any, args: ResolverArgs, ctx: ResolverContext) => T | Promise<T>;

export const resolvers = {
    Query: {
        person
    }
};
