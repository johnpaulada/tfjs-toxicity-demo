import gql from "graphql-tag"
import React from "react"
import { useQuery } from "react-apollo-hooks"
import Post from "../components/Post"

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
    return <div>Loading...</div>
  }

  if (error) {
    return <div>ERROR!</div>
  }

  const posts = data.allPosts.map(post => <Post key={post.id} post={post} />)

  return <div>{posts}</div>
}

export default Landing
