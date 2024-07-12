export const Input = ({ handleChange, label, name, errors, type = 'text', onBlur, ...rest }) => {
  return (
    <div>
      <div className="relative" onBlur={onBlur}>
        <input type={type} name={name} id={name}
               className={`block px-2.5 pb-1.5 pt-3 w-full text-sm bg-transparent rounded-lg border border-1 
               ${errors ? 'border-red-500' : 'border-secondary'} appearance-none focus:outline-none focus:ring-0 
               focus:border-primary peer`}
               placeholder=""
               onChange={handleChange}
               {...rest}/>
        <label htmlFor={name}
               className={`absolute text-sm ${errors ? 'text-red-500' : 'text-secondary'} 
               duration-300 transform -translate-y-3 scale-75 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 
               peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
               peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-3 start-1`}>
          {label}
        </label>
      </div>
      {errors && <div className="text-red-500 text-xs pl-1">{errors}</div>}
    </div>
  )
}
