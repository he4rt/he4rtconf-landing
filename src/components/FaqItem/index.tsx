import { WrapperFaq, Top, Question, Arrow, Answer } from './styles'

export type FaqProps = {
  question: string
  answer: string
  opened?: boolean
}

export type OpenedProps = {
  opened?: boolean
}

const FaqItem = ({ question, answer, opened, ...props }: FaqProps) => (
  <WrapperFaq {...props}>
    <Top>
      <Question
        color="white"
        fontWeight={400}
        level={3}
        size="small"
        opened={opened}
      >
        {question}
      </Question>
      <Arrow opened={opened}>
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
    <Answer opened={opened}>{answer}</Answer>
  </WrapperFaq>
)

export default FaqItem
