import Link from "next/link"
import Nbtn from "./Navbar/N-btn"
import DarkModeBtn from "./Navbar/DarkModeBtn"
import Image from "next/image"

const Navbar = () => {
  return (
    <div className="h-20 p-3 flex space-x-5 items-center border-b-slate-500 border-b-2 mb-3">
      <div className="w-fit h-full">
        <Link href="/" className="w-fit h-full inline-block transition-transform duration-150 active:scale-90">
          <Image src="/system/logo.png" alt="LOGO" className="h-full w-fit" width={100} height={100} />
        </Link>
      </div>
      <div className="flex ml-auto">
        <Nbtn text="首頁" to={"/"} />
        <Nbtn text="關於" to={"/about"} />
        <Nbtn text="文章" to={"/article"} />
        <Nbtn text="標籤" to={"/tag"} />
        < DarkModeBtn />
      </div>
    </div>
  )

}

export default Navbar