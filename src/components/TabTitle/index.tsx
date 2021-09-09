import { useCallback } from 'react'

import { TextTab, WrapperTab } from './styles'

type TabPanelProps = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
  selectedTab: number
}

const TabTitle = ({
  title,
  index,
  setSelectedTab,
  selectedTab
}: TabPanelProps) => {
  const onclick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <WrapperTab isActive={index === selectedTab}>
      <TextTab isActive={index === selectedTab} onClick={onclick}>
        {title}
      </TextTab>
    </WrapperTab>
  )
}

export default TabTitle
