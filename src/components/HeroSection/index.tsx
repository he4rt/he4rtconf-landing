import Button from 'components/Button'
import Title from 'components/Title'
import { Wrapper, Info, HeartBox } from './styles'

const HeroSection = ({ ...props }) => (
  <Wrapper {...props}>
    <Info>
      <Title color="white" fontWeight="semibold" level={1} size="huge">
        Participe do maior evento de tecnologia
      </Title>
      <Title color="gray" fontWeight="light" level={3} size="small">
        Um evento pensado para iniciantes, com palestras, desafios e muito mais!
      </Title>
      <Button>Garantir vaga</Button>
    </Info>
    <HeartBox>
      <svg
        width="665"
        height="611"
        viewBox="0 0 665 611"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M406.554 372.231L248.943 530.5L328.663 610L592.506 346.644C656.443 276.803 672.775 216.337 638.4 140.492L486.823 292.365L446.78 252.341L367.609 332.389L406.554 372.231Z"
          stroke="url(#paint0_linear)"
        />
        <path
          d="M559.96 61.3577L169.772 453.193L41.4154 323.8C17.911 294.572 9.8144 274.782 1.55548 235.344C-6.67255 115.454 77.6185 41.2542 180.559 44.3611C228.939 50.6528 252.857 61.0059 288.254 94.9853L208.169 174.303C164.377 131.192 101.469 176.008 116.09 229.689C119.388 241.799 128.112 251.44 137.182 260.115L170.137 291.634L364.317 94.9853C426.667 39.9749 487.554 30.6542 559.96 61.3577Z"
          stroke="url(#paint1_linear)"
        />
        <path
          d="M415.554 328.231L257.943 486.5L337.663 566L601.506 302.644C665.443 232.803 681.775 172.337 647.4 96.4923L495.823 248.365L455.78 208.341L376.609 288.389L415.554 328.231Z"
          fill="url(#paint2_linear)"
        />
        <path
          d="M568.96 17.3577L178.772 409.193L50.4154 279.8C26.911 250.572 18.8144 230.782 10.5555 191.344C2.32745 71.4544 86.6185 -2.74581 189.559 0.36111C237.939 6.65284 261.857 17.0059 297.254 50.9853L217.169 130.303C173.377 87.1923 110.469 132.008 125.09 185.689C128.388 197.799 137.112 207.44 146.182 216.115L179.137 247.634L373.317 50.9853C435.667 -4.02511 496.554 -13.3458 568.96 17.3577Z"
          fill="url(#paint3_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="119.3"
            y1="61.7276"
            x2="321.312"
            y2="629.085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#782CF0" />
            <stop offset="0.354167" stopColor="#503477" />
            <stop offset="1" stopColor="#0F0818" />
          </linearGradient>
          <linearGradient
            id="paint1_linear"
            x1="119.3"
            y1="61.7276"
            x2="321.312"
            y2="629.085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#782CF0" />
            <stop offset="0.354167" stopColor="#503477" />
            <stop offset="1" stopColor="#0F0818" />
          </linearGradient>
          <linearGradient
            id="paint2_linear"
            x1="128.3"
            y1="17.7276"
            x2="330.312"
            y2="585.085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#992CF0" />
            <stop offset="0.469641" stopColor="#503477" />
            <stop offset="1" stopColor="#0F0818" />
          </linearGradient>
          <linearGradient
            id="paint3_linear"
            x1="128.3"
            y1="17.7276"
            x2="330.312"
            y2="585.085"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#992CF0" />
            <stop offset="0.469641" stopColor="#503477" />
            <stop offset="1" stopColor="#0F0818" />
          </linearGradient>
        </defs>
      </svg>
    </HeartBox>
  </Wrapper>
)

export default HeroSection
