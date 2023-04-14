import UserResults from "../users/UserResults";

function Home() {
  return (
    <>
    {process.env.REACT_APP_GITHUB_TOKEN}
      <UserResults />
    </>
  );
}

export default Home;
