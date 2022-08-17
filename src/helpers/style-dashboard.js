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
    width: 280px;
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
  .add-button {
    display: flex;
    justify-content: space-between;
  }
  .add-button .button {
    margin-top: 10px;
    width: 25px;
    height: 25px;
    background-color: var(--var-gray-3);
    color: var(--var-gray-0);
  }
  .add-tech .back-dash {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 250px;
  }
  .add-tech .back-dash button {
    border-style: none;
    background-color: var(--var-gray-4);
    color: white;
    font-size: 20px;
  }
  .user-page .add-tech {
    background-color: var(--var-gray-4);
    width: 250px;
    position: absolute;
    right: -50%;
    left: -50%;
    padding: 20px;
    z-index: 2;
    box-shadow: 5px 5px 500px 1000px rgba(0, 0, 0, 0.6);
  }
  .user-page .add-tech form button {
    margin-top: 20px;
    border-style: none;
    padding: 15px;
    font-size: 14px;
    font-weight: bold;
    border-radius: 3px;
    color: var(--var-gray-0);
    background-color: var(--var-color-primary);
  }
  .user-page .add-tech form {
    width: 250px;
  }
  .user-page .add-tech form button:hover {
    cursor: pointer;
  }
  .techs {
    background-color: var(--var-gray-3);
    width: 280px;
    margin: 0 auto;
    list-style: none;
    padding: 5px 8px;
    border-radius: 3px;
  }
  .techs li {
    display: flex;
    justify-content: space-between;
    background-color: var(--var-gray-4);
    padding: 3px;
    border-radius: 3px;
    margin: 10px 0 8px 0;
  }
  .techs li h3 {
    padding-left: 10px;
  }
  .techs li div {
    padding-right: 10px;
    margin: 0;
    width: auto;
    display: flex;
    align-items: center;
    gap: 15px;
  }
  @media (min-width: 550px) {
    .user-page div {
      width: 390px;
    }
    .user-page .add-tech {
      width: 350px;
    }
    .user-page .add-tech form {
      width: 350px;
    }
  }
  @media (min-width: 550px) {
    .add-tech .back-dash {
      width: 350px;
    }
    .techs {
      width: 400px;
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
    .techs {
      width: 710px;
      padding: 5px 15px;
    }
  }
`;
