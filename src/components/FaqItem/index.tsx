import { useState } from 'react'
import { WrapperFaq, Top, Question, Arrow, Answer } from './styles'

export type FaqProps = {
  question: string
  answer: string
  opened?: boolean
}

export type OpenedProps = {
  opened?: boolean
}

const FaqItem = ({ question, answer, opened, ...props }: FaqProps) => {
  const [openedState, setOpened] = useState(opened)

  return (
    <WrapperFaq {...props}>
      <Top onClick={() => setOpened(!openedState)}>
        <Question
          color="white"
          fontWeight="light"
          level={3}
          size="small"
          opened={openedState}
        >
          {question}
        </Question>
        <Arrow opened={openedState}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.4 18.1333L16 11.7333L9.6 18.1333"
              stroke="#6D6B70"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </Arrow>
      </Top>
      <Answer opened={openedState}>{answer}</Answer>
    </WrapperFaq>
  )
}

export default FaqItem
