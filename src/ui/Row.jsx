import styled, { css } from "styled-components";

const Row = styled.div`
  ${(props) =>
    props.$type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}
  ${(props) =>
    props.$type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
        display: flex
`;

// Create a wrapper component to convert the regular prop to a transient prop
function RowWrapper({ type = "vertical", ...props }) {
  return <Row $type={type} {...props} />;
}

export default RowWrapper;
