import styled from 'styled-components'
import theme from '~/components/Theme'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--bg-primary);

  :after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(var(--bg-primary-rgb), 0.1);
    backdrop-filter: blur(250px);
  }
`

export const ColorCircle = styled.figure<{ color: string }>`
  position: absolute;
  background-image: radial-gradient(
    circle closest-side,
    ${({ color }) => color},
    var(--bg-primary)
  );
  overflow: visible;
  width: 70vw;
  height: 70vw;

  :first-of-type {
    left: 50%;
    bottom: 60%;
    opacity: 0.1;
  }

  :nth-of-type(2) {
    left: -30%;
    bottom: -40%;
    opacity: 0.08;
  }

  :nth-of-type(3) {
    right: -32%;
    bottom: -50%;
    opacity: 0.12;
  }
`
