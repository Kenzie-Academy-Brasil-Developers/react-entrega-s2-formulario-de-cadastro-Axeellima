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
    max-width: 290px;
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
  .techs div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .techs div h3 {
    max-width: 260px;
  }
  .techs div .add-button {
    width: 25px;
    height: 25px;
    background-color: var(--var-gray-3);
    color: var(--var-gray-0);
  }
  .techs div .add-button:hover {
    cursor: pointer;
  }
  .user-page .add-tech {
    width: 250px;
    position: relative;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 5px 5px 500px 1000px rgba(0, 0, 0, 0.6);
    z-index: 2;
  }
  .user-page .add-tech form button {
    margin: 0px;
    border-style: none;
    padding: 15px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    color: var(--var-gray-0);
    background-color: var(--var-color-primary);
  }
  .user-page .add-tech form button:hover {
    cursor: pointer;
  }
  @media (min-width: 550px) {
    .user-page div {
      width: 390px;
    }
    .user-page .add-tech {
      width: 350px;
    }
  }
  @media (min-width: 900px) {
    .user-page div {
      width: 100%;
      max-width: 700px;
    }
    .user-page div h1 {
      font-size: 22px;
    }
    .user-page div .user-module {
      font-size: 16px;
    }
    .techs div h3 {
      max-width: max-content;
    }
  }
`;
