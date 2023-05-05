import * as React from 'react'

export interface ICategoryProps {
  params: { category: string }
}

export default function Category({ params }: ICategoryProps) {
  return <h1>{params.category}</h1>
}
