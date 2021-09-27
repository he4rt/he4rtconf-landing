import Text from 'components/Text'
import { Wrapper, Bar, Status } from './styles'

export type ProgressBarProps = {
  current: number
  percentage: string
  levelup: number
}

const ProgressBar = ({ current, percentage, levelup }: ProgressBarProps) => (
  <Wrapper>
    <Bar percentage={parseInt(percentage)} />
    <Status>
      <Text>
        Exp {current}/{levelup}
      </Text>
      <Text>{parseInt(percentage)}%</Text>
    </Status>
  </Wrapper>
)

export default ProgressBar
