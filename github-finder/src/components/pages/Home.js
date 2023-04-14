import UserResults from "../users/UserResults";

function Home() {
  return (
    <>
    {process.env.REACT_APP_GITHUB_TOKEN}
    {process.env.REACT_APP_API_URL}
      <UserResults />
    </>
  );
}

export default Home;
