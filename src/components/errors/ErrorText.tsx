import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode;
  text?: string;
}

export const ErrorText = ({ children, text }: Props) => {
  const content = text ? <p>{text}</p> : children;
  return (
    <div className='error-text'>
      {content}
    </div>
  )
}
