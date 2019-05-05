import { resolvers } from "./resolvers";
import { GraphQLServer } from "graphql-yoga";
import axios, { AxiosInstance } from "axios";

const API = axios.create({
    baseURL: "https://swapi.co/api/",
    headers: {
        "x-secret-api-key": "9996004279"
    }
});

export interface ResolverContext {
    API: AxiosInstance;
    showAds: boolean;
    secrets: Record<string, any>;
}

const context: ResolverContext = {
    API,
    showAds: true,
    secrets: {
        userId: "uid_12345",
        sessionId: "sid_12345"
    }
};

// BFF server
const server = new GraphQLServer({
    typeDefs: "./server/schema.graphql",
    resolvers,
    context
});

server.start(() => console.log("Server is running on localhost:4000"));
