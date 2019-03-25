import React from 'react'
import styled from 'styled-components/macro'

const ChatWindow = styled.div`
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

const Form = styled.form`
  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div > textarea {
    height: 5rem;
    width: 80%;
    padding: 0.5rem;
    margin-right: 1rem;
    font-size: 1rem;
    font-weight: 900;
    border: 0.1rem solid #ff9208;
    border-radius: 3px;
    box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.06),
      0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }

  button {
    display: inline-block;
    height: 3rem;
    width: 6rem;
    background: #fff;
    font-size: 0.9rem;
    font-weight: 900;
    border: 0.1rem solid #ff9208;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    padding: 0.25em 1em;
    border-radius: 2%;
    box-shadow: inset 0 4px 8px 0 rgba(0, 0, 0, 0.06),
      0 2px 4px 0 rgba(0, 0, 0, 0.08);
  }
`

const conversation = [
  { agent: 'user', message: 'Hiya!' },
  {
    agent: 'bot',
    message:
      "Howdy! I'm a chatbot! This is a really long sentence to test the over flow wrap css property.",
  },
  {
    agent: 'user',
    message:
      'And now for something completely different. Tell me about plumeria',
  },
  { agent: 'bot', message: "They're weird plants." },
]

export default function ChatBox() {
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState(conversation)

  function handleSubmit(event) {
    event.preventDefault()
    setMessages([...messages, { agent: 'user', message }])
    setMessage('')
  }

  return (
    <section>
      <ChatWindow>
        {messages
          ? messages.map(msg => (
              <MessageBubble agent={msg.agent}>
                <div>{msg.message}</div>
              </MessageBubble>
            ))
          : null}
      </ChatWindow>
      <Form onSubmit={handleSubmit}>
        <div>
          <textarea
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <div>
            <button type="submit">send</button>
          </div>
        </div>
      </Form>
    </section>
  )
}
