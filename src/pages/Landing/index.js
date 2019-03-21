import gql from "graphql-tag"
import React from "react"
import { useQuery } from "react-apollo-hooks"
import Post from "../../components/Post"
import { Container, ContentContainer } from "./styles"

const GET_ALL_POSTS_AND_COMMENTS_QUERY = gql`
  {
    allPosts {
      id
      title
      content
      comments {
        id
        content
      }
    }
  }
`

const Landing = () => {
  const { data, error, loading } = useQuery(GET_ALL_POSTS_AND_COMMENTS_QUERY)

  if (loading) {
    return (
      <Container>
        <ContentContainer>Loading...</ContentContainer>
      </Container>
    )
  }

  if (error) {
    return (
      <Container>
        <ContentContainer>ERROR</ContentContainer>
      </Container>
    )
  }

  const posts = data.allPosts.map(post => <Post key={post.id} post={post} />)

  return (
    <Container>
      <ContentContainer>{posts}</ContentContainer>
    </Container>
  )
}

export default Landing
