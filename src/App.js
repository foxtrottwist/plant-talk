import React from 'react'
import styled, { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 0h2v20H9V0zm25.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm-20 20l1.732 1-10 17.32-1.732-1 10-17.32zM58.16 4.134l1 1.732-17.32 10-1-1.732 17.32-10zm-40 40l1 1.732-17.32 10-1-1.732 17.32-10zM80 9v2H60V9h20zM20 69v2H0v-2h20zm79.32-55l-1 1.732-17.32-10L82 4l17.32 10zm-80 80l-1 1.732-17.32-10L2 84l17.32 10zm96.546-75.84l-1.732 1-10-17.32 1.732-1 10 17.32zm-100 100l-1.732 1-10-17.32 1.732-1 10 17.32zM38.16 24.134l1 1.732-17.32 10-1-1.732 17.32-10zM60 29v2H40v-2h20zm19.32 5l-1 1.732-17.32-10L62 24l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM111 40h-2V20h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zM40 49v2H20v-2h20zm19.32 5l-1 1.732-17.32-10L42 44l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM91 60h-2V40h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM39.32 74l-1 1.732-17.32-10L22 64l17.32 10zm16.546 4.16l-1.732 1-10-17.32 1.732-1 10 17.32zM71 80h-2V60h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM120 89v2h-20v-2h20zm-84.134 9.16l-1.732 1-10-17.32 1.732-1 10 17.32zM51 100h-2V80h2v20zm3.134.84l1.732 1-10 17.32-1.732-1 10-17.32zm24.026 3.294l1 1.732-17.32 10-1-1.732 17.32-10zM100 109v2H80v-2h20zm19.32 5l-1 1.732-17.32-10 1-1.732 17.32 10zM31 120h-2v-20h2v20z' fill='%23ff9208' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`

const Header = styled.header`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 45vh;
  background-color: #ff9208;
`

const Main = styled.main`
  display: flex;
  justify-content: center;
`

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <h1
        css={`
          text-align: center;
          color: #fff;
          margin-bottom: 1%;
        `}
      >
        Plant Talk
      </h1>
      <Main>
        <Chat />
      </Main>
    </>
  )
}

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

function Chat() {
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
