import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/AnimatedSection';
import Timeline from '@/components/Timeline';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PublicIcon from '@mui/icons-material/Public';
import globalShipping from '@/assets/global-shipping.jpg';

const About = () => {
  const { t } = useTranslation();

  const timelineItems = [
    { icon: RocketLaunchIcon, title: t('about.timeline.t1.title'), description: t('about.timeline.t1.description'), year: t('about.timeline.t1.year') },
    { icon: WarehouseIcon, title: t('about.timeline.t2.title'), description: t('about.timeline.t2.description'), year: t('about.timeline.t2.year') },
    { icon: TrendingUpIcon, title: t('about.timeline.t3.title'), description: t('about.timeline.t3.description'), year: t('about.timeline.t3.year') },
    { icon: PublicIcon, title: t('about.timeline.t4.title'), description: t('about.timeline.t4.description'), year: t('about.timeline.t4.year') },
  ];

  return (
    <div>
      <section className="gradient-navy pt-32 pb-20">
        <div className="container-enterprise text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black text-navy-foreground mb-4">{t('about.title')}</h1>
            <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto">{t('about.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Description + Image */}
      <section className="section-padding">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-foreground mb-6">{t('about.title')}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{t('about.description')}</p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-enterprise">
                <img src={"globalShipping"} alt="Global Operations" className="w-full h-80 object-cover" />
              </div>
            </AnimatedSection>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto">
            <Timeline items={timelineItems} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
