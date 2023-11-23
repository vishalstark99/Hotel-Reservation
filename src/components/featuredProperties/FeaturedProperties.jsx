import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Taj Hotel</span>
        <span className="fpCity">Mumbai</span>
        <span className="fpPrice">Starting from Rs.12000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Raddison Blue</span>
        <span className="fpCity">Agra</span>
        <span className="fpPrice">Starting from Rs.9800</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Vivanta</span>
        <span className="fpCity">Delhi</span>
        <span className="fpPrice">Starting from Rs.7500</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">The Leela</span>
        <span className="fpCity">Gurgaon</span>
        <span className="fpPrice">Starting from Rs.7000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
