'use client'

const Input = (props) => {
    const {id, label, type, disabled, required, errors } = props;
  return (
    <div className="w-full relative">
        <input 
            id={id}
            disabled={disabled}
            placeholder=" "
            type={type}
            className={`peer w-full text-black p-4 pt-6 font-light border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${errors[id] ? 'border-red-500 focus:border-red-500' : 'border-neutral-300 focus:border-[#00E091]'}`}
        />
        <label className={`absolute left-4 text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-2 peer-focus:scale-75 peer-focus:-translate-y-6 text-zinc-400`}>
            {label}
        </label>
    </div>
  )
}

export default Input