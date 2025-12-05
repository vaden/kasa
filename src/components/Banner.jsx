const Banner = ({ image, title, children }) => {
  return (
    <div className="banner">
      <img src={image} alt={title} className="banner-img" />
      {children}
    </div>
  );
};

export default Banner;
