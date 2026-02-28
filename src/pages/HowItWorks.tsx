import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/AnimatedSection';
import Timeline from '@/components/Timeline';
import GavelIcon from '@mui/icons-material/Gavel';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import PublicIcon from '@mui/icons-material/Public';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: GavelIcon, title: t('howItWorks.steps.step1.title'), description: t('howItWorks.steps.step1.description') },
    { icon: LocalShippingIcon, title: t('howItWorks.steps.step2.title'), description: t('howItWorks.steps.step2.description') },
    { icon: FindInPageIcon, title: t('howItWorks.steps.step3.title'), description: t('howItWorks.steps.step3.description') },
    { icon: WarehouseIcon, title: t('howItWorks.steps.step4.title'), description: t('howItWorks.steps.step4.description') },
    { icon: ViewInArIcon, title: t('howItWorks.steps.step5.title'), description: t('howItWorks.steps.step5.description') },
    { icon: PublicIcon, title: t('howItWorks.steps.step6.title'), description: t('howItWorks.steps.step6.description') },
  ];

  return (
    <div>
      <section className="gradient-navy pt-32 pb-20">
        <div className="container-enterprise text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black text-navy-foreground mb-4">{t('howItWorks.title')}</h1>
            <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto">{t('howItWorks.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-enterprise max-w-4xl">
          <Timeline items={steps} />
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
