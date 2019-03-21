import React from "react"
import Comment from "../Comment"
import {
  CommentContainer,
  CommentHeader,
  Container,
  Content,
  Title
} from "./styles"

const Post = ({ post: { title, content, comments } }) => {
  const commentElements = comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ))

  return (
    <Container>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <CommentContainer>
        <CommentHeader>COMMENTS</CommentHeader>
        {commentElements}
      </CommentContainer>
    </Container>
  )
}

export default Post
