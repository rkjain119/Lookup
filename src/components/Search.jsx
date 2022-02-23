import { useState } from "react"

import { useResultContext } from "../contexts/ResultContextProvider"

const Search = () => {
  const [text, setText] = useState("")
  const { setSearchTerm } = useResultContext()

  const handleClick = e => {
    e.preventDefault()
    setSearchTerm(text)
  }

  return (
    <form className='flex items-center'>
      <input
        value={text}
        type='text'
        className='flex-grow dark:bg-gray-800 my-2 py-1 pl-3 hover:shadow-sm outline-none dark:shadow-gray-700 shadow-gray-200 rounded-lg'
        placeholder="Try 'CSS Battle' "
        onChange={e => setText(e.target.value)}
      />
      <button
        type='submit'
        className='bg-black dark:bg-gray-800 hover:bg-gray-700 dark:hover:bg-gray-700 rounded-lg text-white text-xl p-2 pl-4 pr-4 ml-2'
        onClick={handleClick}
      >
        <p className='font-semibold text-sm'>Search</p>
      </button>
    </form>
  )
}

export default Search
