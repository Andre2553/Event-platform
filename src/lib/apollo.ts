import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-ap-southeast-2.hygraph.com/v2/cl60efvuu3o2i01t707e99oq0/master',
    cache: new InMemoryCache()
});