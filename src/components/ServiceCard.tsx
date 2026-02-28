import { motion } from 'framer-motion';
import { SvgIconComponent } from '@mui/icons-material';

interface ServiceCardProps {
  icon: SvgIconComponent;
  title: string;
  description: string;
  image: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, image, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group bg-card rounded-xl overflow-hidden shadow-enterprise border border-border hover:shadow-glow transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
        <div className="absolute bottom-4 start-4 w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-glow">
          <Icon sx={{ fontSize: 24 }} className="text-primary-foreground" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
