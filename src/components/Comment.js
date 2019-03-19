import React, { useEffect, useState } from "react"
import { getContentLabels } from "../util/model"
import Label from "./Label"

const classifyContent = async (content, setLabels) => {
  const predictions = await getContentLabels(content)
  const hasToxicLabels = predictions.length > 0
  const resultingLabels = hasToxicLabels ? predictions : ["CLEAN"]

  setLabels(resultingLabels)
}

const Comment = ({ comment: { id, content } }) => {
  const [labels, setLabels] = useState(["LOADING..."])

  useEffect(() => {
    if (labels.includes("LOADING...")) {
      classifyContent(content, setLabels)
    }
  })

  const labelElements = labels.map((label, idx) => (
    <Label key={`${id}-${idx}`}>{label}</Label>
  ))

  return (
    <p>
      {content} {labelElements}
    </p>
  )
}

export default Comment
