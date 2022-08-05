import styled from "styled-components";

export const StyledForm = styled.form`
  width: 80vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  label {
    margin-bottom: 8px;
    font-size: 16px;
  }
  input,
  textarea {
    border-style: none;
    border: 2px solid white;
    background-color: var(--var-gray-2);
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    color: var(--var-gray-0);
  }
  select {
    border-style: none;
    border: 1px solid var(--var-gray-0);
    background-color: var(--var-gray-2);
    font-size: 16px;
    padding: 5px;
    border-radius: 3px;
    color: var(--var-gray-0);
  }
  p {
    font-size: 12px;
  }
  .error-message {
    font-weight: bold;
    position: relative;
  }
  @media (min-width: 550px) {
    width: 60vw;
  }
  @media (min-width: 900px) {
    width: 350px;
  }
`;
