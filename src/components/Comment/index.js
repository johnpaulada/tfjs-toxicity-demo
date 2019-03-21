import React, { useEffect, useState } from "react"
import { getContentLabels } from "../../util/model"
import Label from "../Label"
import { CommentContent, Container } from "./styles"

const classifyContent = async (content, setLabels) => {
  const predictions = await getContentLabels(content)
  const hasToxicLabels = predictions.length > 0
  const resultingLabels = hasToxicLabels ? predictions : []

  setLabels(resultingLabels)
}

const Comment = ({ comment: { id, content } }) => {
  const [labels, setLabels] = useState([])

  useEffect(() => {
    classifyContent(content, setLabels)
  }, [])

  const labelElements = labels.map((label, idx) => (
    <Label key={`${id}-${idx}`}>{label}</Label>
  ))

  const isToxic = labels.length > 0

  return (
    <Container toxic={isToxic}>
      <CommentContent>{content}</CommentContent> <div>{labelElements}</div>
    </Container>
  )
}

export default Comment
