import styled from "styled-components";

export const DivLogin = styled.div`
  padding: 20px;
  height: max-content;
  width: 250px;
  background-color: var(--var-gray-3);
  margin-bottom: 50px;
  border-radius: 3px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .action-name {
    font-size: 20px;
  }
  .button-login {
    border-style: none;
    padding: 15px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    color: var(--var-gray-0);
    background-color: var(--var-color-primary);
  }
  .button-login:hover {
    cursor: pointer;
    background-color: var(--var-color-primary-focus);
  }
  .go-register {
    border-style: none;
    padding: 15px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    color: var(--var-gray-0);
    background-color: var(--var-gray-2);
  }
  .go-register:hover {
    cursor: pointer;
  }
  p {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 550px) {
    width: 350px;
  }
`;
