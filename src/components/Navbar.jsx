import { Link } from "react-router-dom"

import { DarkModeToggle, Navlinks } from "./utils"
import Search from "./Search"

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className='flex flex-col pt-2 px-3 xl:px-40 md:px-20 border-b-2 dark:border-b-gray-800 border-gray-300'>
      <div className='flex items-center justify-between'>
        <Link to='/'>
          <h1 className='text-xl md:text-2xl font-bold'>l👓kup</h1>
        </Link>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Search />
      <Navlinks />
    </div>
  )
}

export default Navbar
