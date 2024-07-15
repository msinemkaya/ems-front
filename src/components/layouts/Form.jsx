import { WithGoogleButton } from '../common/WithGoogleButton.jsx'
import { AuthLink } from '../common/AuthLink.jsx'
import girlWithBulb from '../../assets/landing-page-brainstorming-concept.png'
import logo from '../../assets/logo.png'

export const Form = ({ onSubmit, title, subtext, children, axis = 'y' }) => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div
        className="w-full min-h-svh sm:min-h-0 overflow-auto sm:w-auto sm:px-20 py-12 min-w-96 bg-white rounded-lg sm:border border-primary relative">
        <img src={logo} alt="book" className="w-10 absolute top-2 left-2"/>
        <form className={`mx-auto flex ${axis === 'x' ? 'flex-row gap-12' : 'flex-col w-80'}`} onSubmit={onSubmit}>
          <div>
            <h2 className="text-4xl font-bold text-secondary uppercase text-center mb-2">{title}</h2>
            <p className="text-primary/70 capitalize text-sm">{subtext}</p>
            <img src={girlWithBulb} alt="a girl" className="w-80"/>
          </div>
          <div>
            <div className={`space-y-4 mb-11 ${axis === 'x' && 'max-w-80 w-80'}`}>
              {children}
            </div>
            <div className="space-y-4">
              <button
                className="bg-secondary px-8 py-2 h-11 w-full rounded-full text-white hover:bg-primary transition-all duration-300"
                type="submit"
              >
                {title}
              </button>
              <WithGoogleButton/>
            </div>
          </div>
        </form>
        <div className="absolute bottom-2 right-2 ">
          {title === 'login' ? <AuthLink to="/register" text="Register"/> : <AuthLink to="/login" text="Login"/>}
        </div>
      </div>
    </div>
  )
}
