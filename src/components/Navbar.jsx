import logo from "../assets/logo.png"
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {LINKS} from "../constants"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-3 w-12 rounded-2xl" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href={LINKS.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      </div>
    </nav>
  )
}

export default Navbar
