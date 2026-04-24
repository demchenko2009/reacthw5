import styled, { css } from "styled-components";
import RecipeCard from "./RecipeCard";

export const Card = styled.div`
  width: 250px;
  padding: 15px;
  border-radius: 15px;
  background: white;

  ${({ highlight }) =>
    highlight &&
    css`
      border: 2px solid red;
      transform: scale(1.05);
    `}
`;

export const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;
export default RecipeCard