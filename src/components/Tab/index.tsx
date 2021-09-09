import React from 'react'

type TabProps = {
  title: string
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div>{children}</div>
}

export default Tab
