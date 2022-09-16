import "./PackageSelector.scss";

function PackageSelector() {
  return (
    <>
      <section className="packageSelector">
        <h1 className="packageSelector__title">
          Almost there, just a few more selections...
        </h1>
        <div className="packageSelector__div">
          <div className="packageSelector__nestedDiv">
            <p className="packageSelector__p"> Package type</p>
            <h2 className="packageSelector__h2">All your favourites</h2>
          </div>
          <h3 className="packageSelector__h3">4 themes + 1 premium</h3>
        </div>
      </section>
    </>
  );
}

export default PackageSelector;
