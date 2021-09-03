import React from 'react'

// eslint-disable-next-line @typescript-eslint/ban-types
export type WithChildren<T = {}> = T & { children?: React.ReactNode | string }
