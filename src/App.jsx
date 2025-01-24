import Button from "./components/Button"
import Header from "./components/Header"
import Input from "./components/Input"
import Profile from "./components/Profile"
import HorizontalRow from "./components/HorizontalRow"
import ItemList from "./components/ItemList"
import { useState } from "react"

function App() {
  const [user, setUser] = useState("")
  const [currentUser, setCurrentUser] = useState(null)
  const [repositories, setRepositories] = useState(null)

  async function handleGetData() {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if (newUser) {
      const { avatar_url, name, login, bio } = newUser
      setCurrentUser({ avatar_url, name, login, bio })

      const repositoriesData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepositories = await repositoriesData.json()

      if (newRepositories.length) {
        setRepositories(newRepositories)
        console.log(newRepositories[0])
      }
    }
  }

  return (
    <div className={`${currentUser ? "w-full h-full md:h-screen lg:h-full 2xl:h-screen" : "w-screen h-screen"} bg-slate-800`}>
      <Header />
      <div className="relative flex items-start justify-end">
        <img className="absolute h-[80vh] left-0 pointer-events-none opacity-50" src="/public/background.png" alt="background app" />
        <div className="w-full xl:w-[60rem] h-full text-white m-5 xl:m-15">
          <div className="space-y-2 md:space-x-4 md:text-center xl:text-left">
            <Input value={user} onChange={setUser} />
            <Button onClick={handleGetData} />
          </div>
          {currentUser ? (
            <>
              <Profile image={currentUser.avatar_url} username={currentUser.name} profile={currentUser.login} bio={currentUser.bio} />
              <HorizontalRow />
            </>
          ) : null}
          {repositories ? (
            <>
              <h2 className="mt-10 text-xl md:text-2xl xl:text-3xl text-white text-center md:text-left">Repositories</h2>
              <div className="space-y-4 text-center md:text-left mt-5 md:mt-10">
                {repositories.map((repo, index) => (
                  <>
                    <ItemList key={repo.id} name={repo.name} description={repo.description} link={repo.html_url} />
                    {index !== repositories.length - 1 && <HorizontalRow />}
                  </>
                ))}
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default App
