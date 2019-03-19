import React from "react"
import Comment from "./Comment"

const Post = ({ post: { title, content, comments } }) => {
  const commentElements = comments.map(comment => (
    <Comment key={comment.id} comment={comment} />
  ))

  return (
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
      <div>{commentElements}</div>
    </div>
  )
}

export default Post
