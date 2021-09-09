import styled, { css } from 'styled-components'

export const WrapperTicket = styled.div`
  width: 650px;
  height: 320px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  border-radius: 20px;
  padding: 5px;
  overflow: hidden;

  ${({ theme }) => css`
    background-color: ${theme.colors.purple};

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 130px;
      left: -30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${theme.colors.purple};
      z-index: 2;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 130px;
      right: -30px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${theme.colors.purple};
      z-index: 2;
    }
  `}
`

export const ContentTicket = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    position: relative;
    background: ${theme.colors.primary};
    border-radius: 15px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 130px;
      left: -30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${theme.colors.background};
      z-index: 3;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 130px;
      right: -30px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${theme.colors.background};
      z-index: 3;
    }
  `}
`

export const Profile = styled.div`
  padding: calc(39px * 1) calc(155px * 1) calc(39px * 1) calc(58px * 1);

  p {
    color: ${({ theme }) => theme.colors.white};
  }

  .content-profile {
    display: flex;
    flex-direction: row;
  }

  .profile-image {
    width: calc(82px * 1);
    height: calc(82px * 1);
    border-radius: 50%;
  }

  .profile-text {
    margin: 0;

    .profile-name {
      font-size: calc(32px * 1);
      margin: 10px 0 5px 20px;
      font-weight: 700;
    }

    .profile-username {
      margin: 0 0 5px 20px;
      color: #8a8f98;
      display: flex;
      font-size: 1.2rem;
    }

    .profile-githubIcon {
      > svg {
        width: 18px;
        height: 18px;
        margin-right: 5px;
      }
    }
  }
`

export const TicketEvent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${({ theme }) => css`
    p {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.weight.bold};
      text-transform: uppercase;
    }
  `}
`

export const NumberWrapper = styled.div`
  position: absolute;
  right: 35px;
  bottom: 0;

  .number {
    transform: rotate(90deg) translateY(calc(100px * 1));
    transform-origin: bottom right;
    font-size: calc(40px * 1);
    font-weight: 700;
    text-align: center;
    padding-bottom: 35px;
    width: calc(320px - 10px);
    border-bottom: 2px dashed #333;
    color: ${({ theme }) => theme.colors.white};
  }
`
