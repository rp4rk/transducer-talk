import styled from "styled-components";

import { THEME } from "../../constants/theme";

export const RocketSpan = styled.span`
  @keyframes spaceboots {
    0% {
      transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(0px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(2px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(2px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  display: inline-block;

  animation-name: ${({loading}) => loading ? 'spaceboots' : ''};
	animation-duration: 0.8s;
	transform-origin: 50% 50%;
	animation-iteration-count: infinite;
	animation-timing-function: linear;
`;

export const StyledMs = styled.div`
  color: ${({ duration }) =>
    duration > 16.67 ? THEME.COLOR.error : THEME.COLOR.tertiary};
  font-weight: 700;

  margin-bottom: ${THEME.STYLE.spacing};
`;

export const StyledCode = styled.pre`
  text-align: left;
  background-color: rgba(0, 0, 0, 0.1);
  margin-bottom: auto;
  font-size: 1.2rem;
  padding: 12px;
  border-radius: ${THEME.STYLE.borderRadius};
  font-weight: 700;
  margin-top: 0;
`;

export const BenchmarkContainer = styled.div`
  background-color: ${THEME.COLOR.primary};
  border-radius: 0 ${THEME.STYLE.borderRadius} ${THEME.STYLE.borderRadius} 0;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  position: relative;

  display: grid;
  grid-template-columns: ${({ showDetails }) =>
    showDetails ? "2fr 1fr" : "1fr"};
  grid-gap: ${THEME.STYLE.spacing};
`;

export const DetailsPane = styled.div`
  box-sizing: border-box;
  padding: ${THEME.STYLE.spacing};

  display: flex;
  justify-content: end;
  flex-direction: column;
  overflow: hidden;
`;
