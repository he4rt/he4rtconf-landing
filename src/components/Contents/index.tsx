import { Wrapper, ContentDetail } from './styles'

type ContentsProps = {
  contents: string[]
}

const Contents = ({ contents }: ContentsProps) => (
  <Wrapper>
    {contents.map((content) => (
      <ContentDetail
        color="white"
        fontWeight={400}
        level={3}
        size="small"
        center
        key={content}
      >
        {content}
      </ContentDetail>
    ))}
  </Wrapper>
)

export default Contents
