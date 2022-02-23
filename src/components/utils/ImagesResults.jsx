import { useDarkModeContext } from "../../contexts/DarkModeContextProvider"
import { useResultContext } from "../../contexts/ResultContextProvider"

const ImageResults = () => {
  const { results } = useResultContext()
  const { darkMode } = useDarkModeContext()

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='flex items-center justify-center'>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3'>
          {results?.map(({ image, link: { href, title } }, idx) => (
            <a
              href={href}
              className='p-3'
              key={idx}
              target='_blank'
              rel='noreferrer'
            >
              <img
                src={image?.src}
                alt={title}
                loading='lazy'
                className='w-36 h-28 md:w-40 md:h-44 object-cover rounded-sm shadow border-2 border-solid border-white'
              />
              <p className='break-words text-sm mt-2 w-40'>
                {title}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageResults
