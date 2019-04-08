import styled from "styled-components";
import { THEME } from "../../constants/theme";

export const PersonContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  height: 80px;
  margin-bottom: 24px;
  box-sizing: border-box;

  padding: ${THEME.STYLE.spacing};
  border-radius: ${THEME.STYLE.borderRadius};
  background-color: ${THEME.COLOR.quaternary};
  color: ${THEME.COLOR.primary};

  display: flex;
  align-items: center;

  svg {
    fill: ${THEME.COLOR.primary};
    margin: 0 24px;

    box-sizing: content-box;
    padding-right: 30px;
    border-right: 1px solid ${THEME.COLOR.primary};
  }

  p {
    font-size: 1.2rem;
    font-weight: 700;
  }
`;
