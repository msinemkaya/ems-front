import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

export const AuthLink = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-center gap-2 text-primary relative hover:text-secondary before:w-0 before:h-0.5 before:bg-primary before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-300 transition-all duration-300"
    >
      {text} <FaArrowRightLong/>
    </Link>
  )
}
