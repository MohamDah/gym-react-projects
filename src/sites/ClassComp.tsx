import React from 'react'

interface ClassCompProps {
  type: string
}

export default class ClassComp extends React.Component<ClassCompProps> {
  render() {
    return (
      <h1>{this.props.type}</h1>
    )
  }
}

