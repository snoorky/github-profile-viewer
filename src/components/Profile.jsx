function Profile({ image, username, profile, bio }) {
  return (
    <div className="my-10 flex flex-col md:flex-row items-center gap-2 md:gap-5">
      <img className="w-36 h-36 border-4 border-slate-400 rounded-full" src={image} alt={username} />
      <div className="flex flex-col text-slate-400 text-center md:text-left items-center md:items-start">
        <h3 className="text-xl md:text-2xl">{username}</h3>
        <h6 className="text-md md:text-lg">@{profile}</h6>
        <p className="text-md md:text-lg mt-2 md:mt-5">{bio}</p>
      </div>
    </div>
  )
}

export default Profile
