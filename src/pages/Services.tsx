import { useTranslation } from 'react-i18next';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PublicIcon from '@mui/icons-material/Public';


const Services = () => {
  const { t } = useTranslation();

  const services = [
    { icon: WarehouseIcon, titleKey: 'services.storage', image: "" },
    { icon: DirectionsCarIcon, titleKey: 'services.receiving', image: "heroImg" },
    { icon: LocalShippingIcon, titleKey: 'services.towing', image: "vehicleInspection" },
    { icon: ViewInArIcon, titleKey: 'services.container', image: "containerLoading" },
    { icon: LocalShippingOutlinedIcon, titleKey: 'services.trucking', image: "storageYard" },
    { icon: PublicIcon, titleKey: 'services.shipping', image: "globalShipping" },
  ];

  return (
    <div>
      <section className="gradient-navy pt-32 pb-20">
        <div className="container-enterprise text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black text-navy-foreground mb-4">{t('services.title')}</h1>
            <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto">{t('services.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-enterprise">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.titleKey}
                icon={service.icon}
                title={t(`${service.titleKey}.title`)}
                description={t(`${service.titleKey}.description`)}
                image={service.image}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
