import styled from 'styled-components'

export const Content = styled.section`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 490px) {
    display: block;
  }
`

export const Heading = styled.h1`
  font-size: var(--large);
  margin-bottom: var(--large);
`

export const Body = styled.div`
  p {
    font-size: 1.8rem;
    line-height: var(--medium);
  }
  padding-bottom: 30px;
`
