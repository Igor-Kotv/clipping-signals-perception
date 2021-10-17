import styled from "styled-components";

export const StyledText = styled.p`
  text-indent: 20px;
  padding: 2px 7px 2px 7px;
  transition: 0.15s;
  font-size: 1.2rem;
  margin: 1rem 0 1rem 0;
`;

export const HeaderText = styled.h2<{ enabled?: boolean }>`
  text-align: center;
  display: inline-block;
  width: 100%;
  margin: 3rem 0 2rem 0;
  color: ${(props) => (props.enabled ? "#546877" : "#d3d3d3")};
`;

export const Value = styled.div`
  min-width: 2.5rem;
  height: 2.5rem;
  border: solid 1px silver;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 1rem;
  padding: 0.4rem;
`;
