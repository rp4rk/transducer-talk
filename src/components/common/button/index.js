import styled from 'styled-components';
import { THEME } from '../../../constants/theme';

export const StyledButton = styled.button`
  background-color: ${THEME.COLOR.success};
  border: none;
  font-weight: 700;
  color: white;
  padding: ${THEME.STYLE.spacing};
  border-radius: ${THEME.STYLE.borderRadius};

  font-family: ${THEME.FONT.primary};
  text-transform: uppercase;

  transition: background-color 0.1s ease-in-out;

  &:hover {
    cursor: pointer;

    background-color: lightgreen;
  }
`;