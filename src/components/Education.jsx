import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <div className="education-icon">
            <GraduationCap size={40} />
          </div>
          <div className="education-content">
            <h3 className="education-degree">WASSCE</h3>
            <p className="education-school">Holy Child Senior High School</p>
            <div className="education-details">
              <span className="education-program">Program: General Arts</span>
              <span className="education-year">Year: 2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;