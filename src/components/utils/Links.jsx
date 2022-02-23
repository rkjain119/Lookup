import { NavLink } from "react-router-dom"

const links = [
  { url: "/search", text: "All🔎" },
  { url: "/news", text: "News📰" },
  { url: "/images", text: "Images📸" },
]

const Navlinks = () => {
  return (
    <div className='mt-1 space-x-3 text-md'>
      {links.map(({ url, text }, idx) => (
        <NavLink
          key={idx}
          to={url}
          className={({ isActive }) =>
            isActive
              ? "text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-[1.5px]"
              : ""
          }
        >
          {text}
        </NavLink>
      ))}
    </div>
  )
}

export default Navlinks
