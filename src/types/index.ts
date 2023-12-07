import { ReactNode } from 'react';

export type SearchItemData = {
  id: string,
  forkCount: number,
  name: string,
  stargazerCount: number,
  url: string
}

export type SearchItem = {
  node: SearchItemData
}

export type SearchContextValues = {
  results: SearchItem[],
  count: number,
  loading: boolean,
  requestSearch: (query: string) => void
}

export type SearchProviderProps = {
  children: ReactNode
}
