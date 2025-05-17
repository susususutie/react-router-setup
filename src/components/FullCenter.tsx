import type { ReactNode } from 'react'
import NavigateLinks from './NavigateLinks'

export default function FullCenter(props: { children: ReactNode }) {
  const { children } = props

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <span style={{ fontSize: 36 }}>{children}</span>
      <NavigateLinks />
    </div>
  )
}
