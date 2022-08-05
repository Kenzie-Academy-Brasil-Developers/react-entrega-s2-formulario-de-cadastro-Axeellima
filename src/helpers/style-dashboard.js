import styled from "styled-components";

export const DashMain = styled.main`
  .user-page {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    min-height: 100vh;
  }
  .user-page div {
    width: 290px;
    margin: 0 auto;
  }
  .user-page .user-information {
    padding: 20px;
    border-top: 3px solid var(--var-gray-3);
    border-bottom: 3px solid var(--var-gray-3);
  }
  .user-page .user-information h1 {
    font-size: 18px;
  }
  .user-page .user-information .user-module {
    font-size: 12px;
    color: var(--var-gray-1);
  }
  .error-div {
    margin: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .error-div h1 {
    font-size: 24px;
  }
  .error-div p {
    font-size: 14px;
    color: var(--var-gray-1);
  }
  .error-div strong {
    color: var(--var-gray-0);
  }
  .error-div strong:hover {
    cursor: pointer;
    font-weight: bold;
    text-decoration: underline;
  }
  @media (min-width: 550px) {
    .user-page div {
      width: 390px;
    }
  }
  @media (min-width: 900px) {
    .user-page div {
      width: 700px;
    }
    .user-page div h1 {
      font-size: 22px;
    }
    .user-page div .user-module {
      font-size: 16px;
    }
  }
`;
