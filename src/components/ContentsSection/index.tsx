import Contents from 'components/Contents'
import Title from 'components/Title'

import { Wrapper, Description, ContentsList } from './styles'

const ContentsSection = ({ ...props }) => (
  <Wrapper {...props}>
    <Title center color="white" fontWeight={700} level={2} size="medium">
      Diversidade de conteúdos e tecnologias
    </Title>
    <Description center color="gray" fontWeight={400} level={3} size="small">
      Conteúdos e palestras sobre as mais modernas tecnologias, desde o
      back-end, até o front-end.
    </Description>
    <ContentsList>
      <Contents contents={['Java', 'React']} />
      <Contents contents={['Java', 'React']} />
      <Contents contents={['Java', 'React', 'PHP']} />
      <Contents contents={['Java', 'React']} />
    </ContentsList>
  </Wrapper>
)

export default ContentsSection
