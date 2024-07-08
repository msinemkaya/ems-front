import { FcGoogle } from 'react-icons/fc'

export const WithGoogleButton = () => {
  return (
    <button
      className="flex items-center justify-center w-60 gap-2 capitalize rounded-full border border-secondary py-2 text-sm mx-auto hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
      type="button"
    >
      <FcGoogle size={26}/> continue with Google
    </button>
  )
}
