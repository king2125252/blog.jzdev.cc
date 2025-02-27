import { useEffect, useState } from "react"
import { RiSunFill } from "react-icons/ri"
const DarkModeBtn = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="w-15 h-15 text-center">
      <button className="cursor-pointer h-full w-full hover:bg-slate-600 rounded-xl text-2xl justify-items-center hover:text-white" onClick={() => {
        setDarkMode(!darkMode)
      }}>
        <RiSunFill />
      </button>
    </div>
  )
}

export default DarkModeBtn