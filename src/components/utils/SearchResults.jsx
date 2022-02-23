import { useDarkModeContext } from "../../contexts/DarkModeContextProvider"
import { useResultContext } from "../../contexts/ResultContextProvider"

const SearchResults = () => {
  const { results } = useResultContext()
  const { darkMode } = useDarkModeContext()

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='flex flex-wrap space-y-6 xl:px-40 md:px-20'>
        {results?.map(({ link, title, description }, idx) => (
          <div
            key={idx}
            className='w-full bg-white dark:bg-gray-800 p-5 rounded-2xl hover:shadow-sm'
          >
            <a href={link} target='_blank' rel='noreferrer'>
              <p className='text-sm truncate'>{link}</p>
              <h1 className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                {title}
              </h1>
              <p>
                {description}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResults
