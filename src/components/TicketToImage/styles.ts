import styled, { css } from 'styled-components'

export const WrapperTicket = styled.div`
  --size: calc(1700 / 650);
  width: 1700px;
  height: 863px;
  margin: 100px auto;
  position: relative;
  transition: all 300ms cubic-bezier(0.03, 0.98, 0.53, 0.99) 0s;
  border-radius: 40px;
  padding: 15px;
  overflow: hidden;

  ${({ theme }) => css`
    background: ${theme.colors.purple};

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: calc(130px * var(--size));
      left: calc(-34px * var(--size));
      width: 180px;
      height: 180px;
      border-radius: 50%;
      background: ${theme.colors.purple};
      z-index: 2;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(130px * var(--size));
      right: calc(-34px * var(--size));
      width: 180px;
      height: 180px;
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
    border-radius: 40px;

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: calc(130px * var(--size));
      left: -90px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #020202;
      z-index: 3;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(130px * var(--size));
      right: -90px;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background: #020202;
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
    align-items: center;
  }

  .profile-image {
    width: calc(80px * var(--size));
    height: calc(80px * var(--size));
    border-radius: 50%;
  }

  .profile-text {
    margin: 0;
    margin-left: calc(15px * var(--size));

    .profile-name {
      font-size: calc(32px * var(--size));
      font-weight: 700;
    }

    .profile-username {
      color: #8a8f98;
      display: flex;
      font-size: calc(15px * var(--size));
      align-items: center;
    }

    .profile-githubIcon {
      display: inline-flex;
      > svg {
        width: 52px;
        height: 52px;
        margin-right: 14px;
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
    transform: rotate(90deg) translateY(calc(100px * var(--size)));
    transform-origin: bottom right;
    font-size: calc(40px * var(--size));
    font-weight: 900;
    text-align: center;
    padding-bottom: 35px;
    width: calc(330px * var(--size));
    border-bottom: 3px dashed #333;
    color: ${({ theme }) => theme.colors.white};
  }
`
