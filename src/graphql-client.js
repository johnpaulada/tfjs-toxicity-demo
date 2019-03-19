import ApolloClient from "apollo-boost"

const graphqlClient = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_SERVER
})

export default graphqlClient
