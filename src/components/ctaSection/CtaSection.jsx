import "./CtaSection.scss";
import Wrapper from "../wrapper/Wrapper";
import PhoneImg from "../../assets/cta-phone.png";

const CtaSection = () => {
  return (
    <section className="cta">
      <Wrapper className="cta__container">
        <div className="cta__left">
          <img src={PhoneImg} alt="" />
        </div>

        <div className="cta__right">
          <h3>Take control of your finances today</h3>
          <p>
            One-click Apps & Integrations to help you supercharge your teams
            workflow. Attended overcame repeated it is perceived Marianne in.
          </p>

          <form>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="email"
            />
            <input type="submit" value="submit" className="button-primary" />
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default CtaSection;
