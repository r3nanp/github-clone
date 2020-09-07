import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 26px;
    line-height: 1.25;
    color: var(--gray-dark);
    font-weight: 600;
  }
`
