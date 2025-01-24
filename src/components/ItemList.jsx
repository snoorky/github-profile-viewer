function ItemList({ name, description, link }) {
  return (
    <>
      <strong className="text-cyan-600 text-lg md:text-xl"><a href={link} target="_blank">{name}</a></strong>
      {/* < strong className="text-2xl" > */}
      <p className="text-sm md:text-lg text-slate-400">{description}</p>
    </>
  )
}

export default ItemList
