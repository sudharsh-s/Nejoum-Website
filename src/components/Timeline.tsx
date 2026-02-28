import { motion } from 'framer-motion';
import { SvgIconComponent } from '@mui/icons-material';

interface TimelineItem {
  icon: SvgIconComponent;
  title: string;
  description: string;
  year?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute start-6 md:start-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

      {items.map((item, index) => {
        const Icon = item.icon;
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Content */}
            <div className={`ms-16 md:ms-0 md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-end' : 'md:text-start'}`}>
              <div className="bg-card rounded-xl p-6 shadow-enterprise border border-border hover-lift">
                {item.year && (
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{item.year}</span>
                )}
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Icon Circle */}
            <div className="absolute start-0 md:start-1/2 md:-translate-x-1/2 w-12 h-12 gradient-primary rounded-full flex items-center justify-center shadow-glow z-10">
              <Icon sx={{ fontSize: 22 }} className="text-primary-foreground" />
            </div>

            {/* Spacer for other side */}
            <div className="hidden md:block md:w-[calc(50%-2rem)]" />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Timeline;
