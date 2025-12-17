import { 
  Boxes, 
  Eye, 
  ShoppingCart, 
  Headset, 
  Lightbulb, 
  BadgeCheck, 
  Book, 
  Handshake 
} from 'lucide-react';

const skills = [
  { name: 'Shelf Organization', icon: Boxes },
  { name: 'Visual Display Setup', icon: Eye },
  { name: 'Inventory Support', icon: ShoppingCart },
  { name: 'Customer Assistance', icon: Headset },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Reliable & Punctual', icon: BadgeCheck },
  { name: 'Fast Learner', icon: Book },
  { name: 'Good Team Player', icon: Handshake }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-tag">
                <Icon size={20} className="skill-icon" />
                <span className="skill-name">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;