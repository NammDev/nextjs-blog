'use client'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function SearchComponent() {
  const queryClient = useQueryClient()
  const query = useQuery({ queryKey: ['articles'] })

  return <div>Search Component</div>
}

export default SearchComponent
