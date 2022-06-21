import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"

// const uri = 'http://localhost:4000/graphql'

const uri = process.env.NEXT_PUBLIC_BACKEND_URL

const link = createHttpLink({
    uri,
    credentials: "include",
})

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
})
