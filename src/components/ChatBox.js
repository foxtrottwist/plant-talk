import React from 'react'
import styled from 'styled-components/macro'

const ChatWindow = styled.div`
  height: 60vh;
  width: 40vw;
  padding: 1rem;
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

const Botbubble = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1rem;

  div {
    width: 55%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    overflow-wrap: anywhere;
    color: #000;
    background-color: #bfd3d0;
  }
`
const Userbubble = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;

  div {
    width: 55%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    overflow-wrap: anywhere;
    color: #fff;
    background-color: #6e8798;
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
    font-size: 0.9rem;
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

export default function ChatBox() {
  const [value, setValue] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    alert(value)
    setValue('')
  }

  return (
    <section>
      <ChatWindow>
        <Botbubble>
          <div>
            Howdy! I'm a chatbot! This is a really long sentence to test the
            over flow wrap css property.
          </div>
        </Botbubble>
        <Userbubble>
          <div>Hiya!</div>
        </Userbubble>
        <Botbubble>
          <div>And now for something completely different.</div>
        </Botbubble>
      </ChatWindow>
      <Form onSubmit={handleSubmit}>
        <div>
          <textarea
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
          <div>
            <button type="submit">send</button>
          </div>
        </div>
      </Form>
    </section>
  )
}
