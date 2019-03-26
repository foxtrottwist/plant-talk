import React from 'react'
import styled from 'styled-components/macro'

const MessageContainer = styled.div`
  height: 60vh;
  width: 40vw;
  padding: 2rem 1rem 1rem 1rem;
  overflow: auto;
  margin-bottom: 1rem;
  background-color: #fff;
  border: 0.1rem solid #ff9208;
  border-radius: 0.5rem;
  box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.06),
    0 2px 4px 0 rgba(0, 0, 0, 0.08);

  @media (max-width: 667px) {
    width: 80vw;
  }
`

const MessageBubble = styled.div`
  display: flex;
  justify-content: ${({ agent }) =>
    agent === 'user' ? 'flex-end' : 'flex-start'};
  margin-bottom: 1rem;

  div {
    width: 55%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    overflow-wrap: anywhere;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
    color: ${({ agent }) => (agent === 'user' ? '#fff' : '#000')};
    background-color: ${({ agent }) =>
      agent === 'user' ? '#6e8798' : '#bfd3d0'};
  }
`

export default function ChatWindow(props) {
  const { messages } = props
  return (
    <MessageContainer>
      {messages.length > 0
        ? messages.map((msg, index) => (
            <MessageBubble key={index} agent={msg.agent}>
              <div>{msg.message}</div>
            </MessageBubble>
          ))
        : null}
    </MessageContainer>
  )
}
