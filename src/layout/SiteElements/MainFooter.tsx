import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export const MainFooter = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">our services</a>
              </li>
              <li>
                <a href="#">privacy policy </a>
              </li>
              <li>
                <a href="#">affiliate program</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>services</h4>
            <ul>
              <li>
                <a href="#">music</a>
              </li>
              <li>
                <a href="#">blogs</a>
              </li>
              <li>
                <a href="#">events</a>
              </li>
              <li>
                <a href="#">social</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>follow me</h4>
            <div className="social-links">
              {/* <a href="">
                <FaFacebookF />
              </a>
              <a href="">
                <FaTwitter />
              </a>
              <a href="">
                <FaInstagram />
              </a> */}
              <a href="https://www.linkedin.com/in/fxcisco/">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
