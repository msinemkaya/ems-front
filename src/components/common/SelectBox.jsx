export const SelectBox = ({ options, label, errors }) => {
  return (
    <div>
      <select
        defaultValue='label'
        className={`border-r-8 border-transparent outline outline-1 px-2.5 py-2.5 rounded-lg w-full capitalize 
        ${errors ? 'text-red-500 outline-red-500' : 'text-secondary outline-secondary'} text-sm`}
        id="userType" name="userType">
        <option value='label' disabled hidden>{label}</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {errors && <div className="text-red-500 text-xs pl-1">{errors}</div>}
    </div>
  )
}
