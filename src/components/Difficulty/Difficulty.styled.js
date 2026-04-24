import styled from "styled-components";

export const Badge = styled.span`
  padding: 5px 10px;
  border-radius: 8px;
  color: white;
  font-size: 14px;

  background: ${({ level }) => {
    if (level === 0) return "green";
    if (level === 1) return "orange";
    if (level === 2) return "red";
    return "gray";
  }};
`;
