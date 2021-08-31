import FaqItem from 'components/FaqItem'

const FaqList = () => {
  return (
    <>
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
    </>
  )
}

export default FaqList
