import { Link, useLocation } from "react-router"

interface NbtnProps {
  text: string
  to: string
}
const Nbtn = ({ text, to }: NbtnProps) => {
  const location = useLocation()
  const isActive = location.pathname === to
  const textColor = isActive ? "text-blue-300" : "text-slate-600"
  return (
    <Link to={to} className="w-20 h-15 text-center">
      <button className={`cursor-pointer h-full w-full hover:bg-slate-600 rounded-xl text-xl active:scale-95 hover:text-white font-bold ${textColor}`}>
        {text}
      </button>
    </Link>
  )
}

export default Nbtn