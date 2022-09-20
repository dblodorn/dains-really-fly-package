import React from 'react'

export type FlyComponentProps = {
  /**
   * fleText: optional string prop
   */
  flyText?: string
}

export function FlyComponent({ flyText }: FlyComponentProps) {
  React.useEffect(() => {
    console.log(`Buzz buzz buzz ${flyText}!`)
  }, [])
  
  return (
    <div>🪰🪰🪰🪰🪰🪰🪰🪰 What's up i'm a react component 🪰🪰🪰🪰🪰🪰🪰🪰 {flyText}</div>
  )
}