import { ReactElement, useState } from 'react'

import TabTitle from 'components/TabTitle'

import { WrapperTab } from './styles'

type TabProps = {
  children: ReactElement[]
}

const Tab = ({ children }: TabProps) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <WrapperTab>
      <ul>
        {children.map((item, index) => (
          <TabTitle
            title={item.props.title}
            index={index}
            key={`key-tab-${item.props.title}-${index}`}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
          />
        ))}
      </ul>
      {children[selectedTab]}
    </WrapperTab>
  )
}

export default Tab
