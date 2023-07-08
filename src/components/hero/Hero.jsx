import "./Hero.scss";
import Wrapper from "../wrapper/Wrapper";
import Img1 from "../../assets/hero-1.png";
import Img2 from "../../assets/hero-2.png";
import Img3 from "../../assets/hero-3.png";

const Hero = () => {
  return (
    <section className="hero">
      <Wrapper className="hero__container">
        <div className="hero__left">
          <h1>Make payment easy, simplify your finance</h1>
          <p>
            Explained propriety off out perpetual his you. Feel sold off felt
            nay rose met you. We so entreaties cultivated astonished is. Offered
            chiefly farther of my no colonel shyness. Such on help ye some door
            if in.
          </p>
          <div className="hero__btn-container">
            <a href="#" className="button-primary">
              Get Started - it's free
            </a>
            <a href="@" className="button-outline">
              How its works
            </a>
          </div>
        </div>

        <div className="hero__right">
          <img src={Img1} alt="" className="img-1" />
          <img src={Img2} alt="" className="img-2" />
          <img src={Img3} alt="" className="img-3" />
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
