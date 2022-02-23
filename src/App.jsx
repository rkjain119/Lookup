import { Navbar, Routing } from "./components"
import { useDarkModeContext } from "./contexts/DarkModeContextProvider"

function App() {
  const { darkMode } = useDarkModeContext()

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className='bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Navbar />
        <Routing />
      </div>
    </div>
  )
}

export default App
