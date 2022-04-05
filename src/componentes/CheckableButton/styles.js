import styled from "styled-components";

export const StyledBtn = styled.button`

background: none;
border: 1px solid #ccc;
outline: none;
${({checked}) => checked && `
    border-color: lime;
`}
`