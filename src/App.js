import React from "react"
import { ApolloProvider } from "react-apollo"
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks"
import graphqlClient from "./graphql-client"
import Landing from "./pages/Landing"

const App = () => {
  return (
    <ApolloProvider client={graphqlClient}>
      <ApolloHooksProvider client={graphqlClient}>
        <Landing />
      </ApolloHooksProvider>
    </ApolloProvider>
  )
}

export default App
