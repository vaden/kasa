import Banner from "../components/Banner.jsx";
import Markdown from "../components/Markdown.jsx";
const About = () => {
  return (
    <>
      <Banner
        image="/images/banner-about.png"
        title={"Vallée passant entre plusrieurs montagne"}
      />
      <Markdown
        title={"Fiabilité"}
        content={
          "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
        }
      />
      <Markdown
        title={"Respect"}
        content={
          "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
        }
      />
      <Markdown
        title={"Service"}
        content={
          "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
        }
      />
      <Markdown
        title={"Sécurité"}
        content={
          "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement."
        }
      />
    </>
  );
};

export default About;
