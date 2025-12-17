import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Wendy AB Boateng</h3>
            <p className="footer-tagline">Retail & Merchandising Support Professional</p>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:Stephaniekela6@gmail.com" className="footer-link">
                <Mail size={16} />
                Stephaniekela6@gmail.com
              </a>
              <a href="tel:+233279261773" className="footer-link">
                <Phone size={16} />
                +233 279 261 773
              </a>
              <div className="footer-link">
                <MapPin size={16} />
                Accra, Ghana
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#about" className="footer-link">About</a>
              <a href="#competencies" className="footer-link">Competencies</a>
              <a href="#experience" className="footer-link">Experience</a>
              <a href="#contact" className="footer-link">Contact</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Wendy AB Boateng. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;