import React from 'react'

function Button({text, className, onClick, disabled}) {
  return (
    <div>
        <button onClick={onClick} disabled={disabled} className={`${className} btn btn-primary btn-outline w-full`}>
            <p className="text-white lg:text-base md:text-md text-sm font-bold uppercase">
                {text}
            </p>
        </button>
    </div>
  )
}

export default Button