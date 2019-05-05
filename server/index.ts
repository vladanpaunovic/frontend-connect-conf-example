import { resolvers } from "./resolvers";
import { GraphQLServer } from "graphql-yoga";
import axios, { AxiosInstance } from "axios";

const client = axios.create({
    baseURL: "https://swapi.co/api/",
    headers: {
        "x-secret-api-key": "9996004279"
    }
});

export interface ResolverContext {
    client: AxiosInstance;
    secrets: Record<string, any>;
}

const context: ResolverContext = {
    client,
    secrets: {
        userId: "uid_12345",
        sessionId: "sid_12345",
        showAds: true
    }
};

const server = new GraphQLServer({
    typeDefs: "./server/schema.graphql",
    resolvers,
    context
});

server.start(() => console.log("Server is running on localhost:4000"));
