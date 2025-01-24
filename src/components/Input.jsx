function Input({ value, onChange }) {
  return (
    <input
      className="border border-slate-500 rounded-xl bg-transparent text-slate-400 outline-none py-3 px-6 text-center md:text-left text-sm md:text-xl max-md:w-full md:w-96"
      name="username"
      type="text"
      placeholder="@username"
      onChange={event => onChange(event.target.value)}
      value={value}
    />
  )
}

export default Input
