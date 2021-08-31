import FaqItem from 'components/FaqItem'
import Title from 'components/Title'

import { Wrapper } from './styles'

const FaqSection = () => {
  return (
    <Wrapper>
      <Title color="white" fontWeight={700} level={2} size="medium">
        FAQ
      </Title>
      <FaqItem
        question="O evento é gratuito?"
        answer="Sim, é gratuito e não será cobrado e nem vendido nada depois."
        opened
      />
      <FaqItem
        question="Aonde será o evento?"
        answer="Sim, é gratuito e não será cobrado e nem vendido nada depois."
      />
      <FaqItem
        question="Quando será o evento?"
        answer="Sim, é gratuito e não será cobrado e nem vendido nada depois."
      />
      <FaqItem
        question="O que eu irei aprender?"
        answer="Sim, é gratuito e não será cobrado e nem vendido nada depois."
      />
    </Wrapper>
  )
}

export default FaqSection
