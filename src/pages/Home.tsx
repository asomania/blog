import HomeHeader from "../components/HomeHeader";
import HomeContainer from "../components/HomeContainer";
const Home = () => {
  return (
    <>
      <div className="d-flex columns vh-100">
        <HomeHeader />
        <HomeContainer />
      </div>
    </>
  );
};

export default Home;
