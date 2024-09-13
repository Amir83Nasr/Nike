

const Button = ({ label, iconURL, backgroundColor, borderColor, textColor, fullWidth }) => {

  return (
    <button className={`flex justify-center items-center gap-x-[16px] rounded-full font-montserrat text-lg leading-none border px-7 py-4 ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 'bg-coral-red border-coral-red text-white'} ${fullWidth && 'w-full'} `}>
      {label}

      {iconURL && <img src={iconURL} alt="arrow right icon" className=" rounded-full w-5 h-5" />}
    </button>
  )
}

export default Button