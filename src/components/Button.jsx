function Button({ onClick }) {
  return (
    <button className="border border-slate-500 rounded-xl bg-slate-500 text-sm md:text-lg max-md:w-full py-3 px-6" onClick={onClick}>Find user</button>
  )
}

export default Button
