const Fiche = () => {
  return (
    <>
      <div className="carousel">
        <img src="images/carrousel.png" alt="" />
      </div>
      <section className="fiche-presentation">
        <article className="fiche-title-pills">
          <h1 className="fiche-title">Cozy loft on the Canal Saint-Martin</h1>
          <span className="fiche-lieu">Paris, Île de France</span>
          <div className="fiche-pills">
            <div className="pill">
              <p className="pill-name">Cozy</p>
            </div>
            <div className="pill">
              <p className="pill-name">Canal</p>
            </div>
            <div className="pill">
              <p className="pill-name">Paris 10</p>
            </div>
          </div>
        </article>
        <article className="fiche-profile">
          <span className="profile-name">Alexandre Dumas</span>
          <img
            src="images/sansbarb.jpg"
            alt="photo de profile de l'utilisateur"
            className="profile-picture"
          />
          <span className="note"></span>
        </article>
      </section>
      <section className="desc-equip">
        <article className="fiche-desc">
          <h2 className="desc-title">Description</h2>
        </article>
        <article className="fiche-equip">
          <h2 className="equip-title">Équipements</h2>
        </article>
      </section>
    </>
  );
};

export default Fiche;
