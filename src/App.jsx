import Banner from "./components/Banner.jsx";
import Gallery from "./components/Gallery.jsx";
const App = () => {
  return (
    <>
      <Banner image="/images/banner-home.png" title={"Falaise en bord de mer"}>
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
      </Banner>
      <Gallery />
    </>
  );
};

export default App;
