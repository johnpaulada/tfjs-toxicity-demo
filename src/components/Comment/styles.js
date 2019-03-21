import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  border-radius: 5px;
  box-shadow: 0 2px 20px -10px #333;
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  align-items: center;
  border-left: 4px solid
    ${props => ("toxic" in props && props.toxic ? "#f44336" : "#00e676")};
  opacity: ${props => ("toxic" in props && props.toxic ? "0.5" : "1")};
`

export const CommentContent = styled.p`
  color: #4a4a4a;
`
