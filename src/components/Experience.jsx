import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Retail Support Assistant',
    company: 'Marina Mall',
    type: 'Internship / Assistant Role',
    period: 'Jan 2025 – Mar 2025',
    responsibilities: [
      'Arranged products neatly on shelves',
      'Supported stock checking and low-stock identification',
      'Maintained clean shopping areas',
      'Assisted customers with product inquiries',
      'Reported damaged or expired items'
    ]
  },
  {
    title: 'Store Assistant – Volunteer',
    company: 'Local Retail Shop',
    type: 'Community Support',
    period: 'Oct 2024 – Dec 2024',
    responsibilities: [
      'Organized and restocked shelves',
      'Assisted with receiving and storing goods',
      'Practiced basic inventory counting',
      'Improved customer service and communication skills'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{exp.title}</h3>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <p className="timeline-company">
                  {exp.company} • {exp.type}
                </p>
                <ul className="timeline-responsibilities">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;