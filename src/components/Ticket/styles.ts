import styled, { css } from 'styled-components'

export const WrapperTicket = styled.div`
  --size: 1;
  position: relative;
  width: 520px;
  height: 270px;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  border-radius: 15px;
  padding: 5px;
  overflow: hidden;

  ${({ theme }) => css`
    background-color: ${theme.colors.purple};

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 110px;
      left: -25px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: ${theme.colors.purple};
      z-index: 2;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 110px;
      right: -25px;
      width: 50px;
      height: 50px;
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
      top: 110px;
      left: -25px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${theme.colors.background};
      z-index: 3;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 110px;
      right: -25px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: ${theme.colors.background};
      z-index: 3;
    }
  `}
`

export const Profile = styled.div`
  padding: calc(30px * var(--size)) calc(100px * var(--size))
    calc(30px * var(--size)) calc(45px * var(--size));
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
    align-items: center;
  }

  .profile-image {
    width: calc(75px * 1);
    height: calc(75px * 1);
    border-radius: 50%;
  }

  .profile-text {
    margin: 0;
    margin-left: calc(15px * var(--size));

    .profile-name {
      font-size: 24px;
      font-weight: 700;
    }

    .profile-username {
      color: #8a8f98;
      display: flex;
      font-size: 18px;
      align-items: center;
    }

    .profile-githubIcon {
      display: inline-flex;
      > svg {
        width: 20px;
        width: 20px;
        margin-right: 8px;
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
    width: calc(160px * var(--size));
  }

  ${({ theme }) => css`
    .link {
      color: ${theme.colors.gray};
      font-size: calc(${theme.font.sizes.xxsmall} * var(--size));
    }
    .about {
      font-weight: ${theme.font.weight.light};
      font-size: calc(${theme.font.sizes.xxsmall} * var(--size));
      span {
        color: ${theme.colors.purple};
      }
    }
    .date {
      color: ${theme.colors.white};
      font-size: calc(${theme.font.sizes.xxsmall} * var(--size));
      font-weight: ${theme.font.weight.light};
      text-transform: uppercase;
    }
  `}
`

export const NumberWrapper = styled.div`
  position: absolute;
  right: 95px;
  bottom: 0;

  .number {
    transform: rotate(90deg);
    transform-origin: bottom right;
    font-size: calc(${({ theme }) => theme.font.sizes.large} * 1);
    font-weight: 700;
    text-align: center;
    padding-bottom: 15px;
    width: calc(270px - 10px);
    border-bottom: 1px dashed #333;
    color: ${({ theme }) => theme.colors.white};
  }
`
