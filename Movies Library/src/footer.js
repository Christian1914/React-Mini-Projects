import "./footer.css";
import Logo from "./Logo.png";
import CopyrightYear from "./CopyrightYear";

function Footer() {
  return (
    <footer className="footer">
      <div className="container grid grid--5-cols">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            <img className="logo" src={Logo} alt="Omnifood logo" />
          </a>

          <ul className="social-links">
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon md hydrated"
                  name="logo-instagram"
                  role="img"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon md hydrated"
                  name="logo-facebook"
                  role="img"
                  aria-label="logo facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                <ion-icon
                  className="social-icon md hydrated"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>

          <p className="copyright">
            Copyright ©
            <span className="year">
              <span id="currentYear">
                <CopyrightYear />
              </span>
            </span>{" "}
            by usePopcorn, Inc. All rights reserved.
          </p>
        </div>

        <div className="address-col">
          <p className="footer-heading">Contact us</p>
          <address className="contacts">
            <p className="address">123 Main St., Suite 3B, Anytown, NY 12345</p>
            <p>
              <a className="footer-link" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a className="footer-link" href="mailto:hello@omnifood.com">
                hello@use-popcorn.com
              </a>
            </p>
          </address>
        </div>

        <nav className="nav-col">
          <p className="footer-heading">Account</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Company</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                About usePopcorn
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Other partners
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <p className="footer-heading">Resources</p>
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#">
                Resource directory
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="footer-link" href="#">
                Privacy &amp; terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
