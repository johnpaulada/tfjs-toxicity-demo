import * as toxicity from "@tensorflow-models/toxicity"

const TOXICITY_THRESHOLD = 0.9

const TOXICITY_LABELS = [
  "severe_toxicity",
  "identity_attack",
  "insult",
  "threat",
  "sexual_explicit",
  "obscene"
]

const MODEL_PROMISE = toxicity.load(TOXICITY_THRESHOLD, TOXICITY_LABELS)

export const getContentLabels = async content => {
  const model = await MODEL_PROMISE
  const labels = await model.classify([content])
  const matchedLabels = labels.reduce(
    (acc, { label, results: [{ match }] }) => {
      if (match) {
        return [...acc, label]
      }

      return acc
    },
    []
  )

  return matchedLabels
}
