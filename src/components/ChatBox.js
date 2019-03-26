import React from 'react'
import styled from 'styled-components/macro'

import ChatWindow from './ChatWindow'
import msgs from '../samples/messages' // Temporary sample data

const Form = styled.form`
  & > div {
    display: flex;
    justify-content: space-between;
  }

  textarea {
    height: 5rem;
    width: 80%;
    padding: 0.5rem;
    margin-right: 1rem;
    font-size: 1.25rem;
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

  button::after {
    content: 'Send';
  }

  @media (max-width: 667px) {
    width: 80vw;

    button {
      height: 3rem;
      width: 3rem;
      border-radius: 50%;
    }

    button::after {
      content: '→';
    }
  }
`

export default function ChatInterface() {
  const [message, setMessage] = React.useState('')
  const [messages, setMessages] = React.useState(msgs)
  const textareaFocus = React.useRef(null)

  function handleSubmit(event) {
    event.preventDefault()

    if (message === '') {
      return
    }

    setMessages([...messages, { agent: 'user', message }])
    setMessage('')
    textareaFocus.current.focus()
  }

  return (
    <section>
      <ChatWindow messages={messages} setMessages={setMessages} />
      <Form onSubmit={handleSubmit}>
        <div>
          <textarea
            ref={textareaFocus}
            type="text"
            value={message}
            onChange={event => setMessage(event.target.value)}
          />
          <div>
            <button type="submit" />
          </div>
        </div>
      </Form>
    </section>
  )
}
