import React from 'react'
import CocktailList from '../CocktailList'
import Search from '../Search'
export default function Home() {
  return (
    <main>
      <Search />
      <CocktailList />
    </main>
  )
}
