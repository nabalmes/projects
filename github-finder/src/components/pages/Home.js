import UserResults from "../users/UserResults"

function Home() {
  return (
    <>
        <UserResults />
        <div>{process.env.REACT_APP_API_URL}</div>
    </>
    
  )
}


export default Home