import "./contact.scss";
import background from "../../images/contactbg.png"
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import insta from '../../images/insta.png'

export default function Contact() {
  return (
    <>
      <img className="bg" src={background} alt="bg" />
      <div className="contact">
        <h1>REACH US AT</h1>
        <span>
          <h2>support@kicksup.com</h2>
          <p>for any technical support.</p>
        </span>
        <span>
          <h2>info@kicksup.com</h2>
          <p>for more information.</p>
        </span>
        <span>
          <h2>feedback@kicksup.com</h2>
          <p>to send your feedback.</p>
        </span>
        <span>
          <h2>jobs@kicksup.com</h2>
          <p>to work with us.</p>
        </span>
      </div>
      <div className="socials">
        <p>Stay in touch.</p>
        <span>
          <a href="https://twitter.com/login" target="_blank" rel="noreferrer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src={insta} alt="insta" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src={facebook} alt="fb" />
          </a>
        </span>
      </div>
    </>
  );
}
