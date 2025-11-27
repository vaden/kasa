import Banner from "./components/Banner.jsx";
import Gallery from "./components/Gallery.jsx";
const App = () => {
  return (
    <>
      <div className="banner">
        <Banner
          image="/images/banner-desktop.png"
          title={"Falaise en bord de mer"}
        />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
      <Gallery />
    </>
  );
};

export default App;
