import SearchComponent from './search'

export interface ISearchProps {
  searchParams: { searchQuery?: string }
}

export default function Search({ searchParams }: ISearchProps) {
  return (
    <main>
      <h1>Search something: {searchParams.searchQuery}</h1>
      <SearchComponent />
    </main>
  )
}
