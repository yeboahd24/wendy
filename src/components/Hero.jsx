import { Mail, Phone, Download } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // This will be linked to the actual CV file
    const link = document.createElement('a');
    link.href = '/Wendy_AB_Boateng_CV.pdf';
    link.download = 'Wendy_AB_Boateng_CV.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background"></div>
      <div className="hero-content">
        <div className="profile-image-container">
          <div className="profile-placeholder">
            {/* Profile picture will be added here */}
            <div className="profile-initials">WB</div>
          </div>
        </div>
        
        <h1 className="hero-name">Wendy AB Boateng</h1>
        <p className="hero-tagline">Retail & Merchandising Support Professional</p>
        
        <div className="hero-cta">
          <button onClick={scrollToContact} className="btn btn-primary">
            <Mail className="btn-icon" />
            Contact Me
          </button>
          <button onClick={handleDownloadCV} className="btn btn-secondary">
            <Download className="btn-icon" />
            Download CV
          </button>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;