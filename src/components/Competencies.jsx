import { 
  ShoppingCart, 
  TvMinimal, 
  Eye, 
  Headset, 
  Users, 
  Clock, 
  BarChart, 
  Laptop 
} from 'lucide-react';

const competencies = [
  {
    icon: ShoppingCart,
    title: 'Stock Checking & Replenishment',
    description: 'Monitoring inventory levels and restocking shelves efficiently'
  },
  {
    icon: TvMinimal,
    title: 'Shelf Arrangement & Display',
    description: 'Creating attractive and organized product displays'
  },
  {
    icon: Eye,
    title: 'Visual Merchandising Basics',
    description: 'Understanding product placement and visual appeal'
  },
  {
    icon: Headset,
    title: 'Customer Assistance',
    description: 'Providing helpful and friendly customer service'
  },
  {
    icon: Users,
    title: 'Teamwork & Communication',
    description: 'Collaborating effectively with team members'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Prioritizing tasks and meeting deadlines'
  },
  {
    icon: BarChart,
    title: 'Basic Sales Reporting',
    description: 'Recording and reporting sales data accurately'
  },
  {
    icon: Laptop,
    title: 'MS Office (Excel, Word)',
    description: 'Proficient in Microsoft Office applications'
  }
];

const Competencies = () => {
  return (
    <section id="competencies" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Core Competencies</h2>
        <div className="competencies-grid">
          {competencies.map((competency, index) => {
            const Icon = competency.icon;
            return (
              <div key={index} className="competency-card">
                <div className="competency-icon">
                  <Icon size={32} />
                </div>
                <h3 className="competency-title">{competency.title}</h3>
                <p className="competency-description">{competency.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Competencies;