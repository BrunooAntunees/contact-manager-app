import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  body {
    background-color: #f4f6f9;
    color: #333;
    padding: 40px 20px;
  }
`

export const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
`

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
  color: #2c3e50;
  text-align: center;
`