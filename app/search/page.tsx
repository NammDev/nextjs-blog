import * as React from 'react'

export interface ISearchProps {
  searchParams: { searchQuery?: string }
}

export default function Search({ searchParams }: ISearchProps) {
  return <h1>Search something: {searchParams.searchQuery}</h1>
}
