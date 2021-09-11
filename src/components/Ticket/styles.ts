import styled, { css } from 'styled-components'

export const WrapperTicket = styled.div`
  --size: 1;
  width: 650px;
  height: 320px;
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
    background: linear-gradient(90deg, #050505 0%, #161616 100.01%);
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
  padding: calc(39px * var(--size)) calc(155px * var(--size))
    calc(39px * var(--size)) calc(58px * var(--size));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

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
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: calc(16px * var(--size));
  align-items: center;

  svg {
    width: calc(200px * var(--size));
  }

  ${({ theme }) => css`
    .link {
      color: ${theme.colors.gray};
      font-size: calc(${theme.font.sizes.xsmall} * var(--size));
    }
    .about {
      font-weight: ${theme.font.weight.light};
      font-size: calc(${theme.font.sizes.xsmall} * var(--size));
      span {
        color: ${theme.colors.purple};
      }
    }
    .date {
      color: ${theme.colors.white};
      font-size: calc(${theme.font.sizes.xsmall} * var(--size));
      font-weight: ${theme.font.weight.light};
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
