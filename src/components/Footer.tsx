import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/how-it-works', label: t('nav.howItWorks') },
  ];

  const serviceLinks = [
    t('services.receiving.title'),
    t('services.storage.title'),
    t('services.inspection.title'),
    t('services.container.title'),
  ];

  return (
    <footer className="gradient-navy text-navy-foreground">
      <div className="container-enterprise py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LocalShippingIcon className="text-primary" sx={{ fontSize: 28 }} />
              <span className="text-lg font-bold">
                AutoVault<span className="text-primary">Logistics</span>
              </span>
            </div>
            <p className="text-navy-foreground/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.ourServices')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link to="/services" className="text-sm text-navy-foreground/70 hover:text-primary transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">{t('footer.contactInfo')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-navy-foreground/70">
                <LocationOnIcon sx={{ fontSize: 18, marginTop: '2px' }} className="text-primary shrink-0" />
                {t('contact.info.address')}
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-foreground/70">
                <PhoneIcon sx={{ fontSize: 18 }} className="text-primary shrink-0" />
                {t('contact.info.phone')}
              </li>
              <li className="flex items-center gap-2 text-sm text-navy-foreground/70">
                <EmailIcon sx={{ fontSize: 18 }} className="text-primary shrink-0" />
                {t('contact.info.email')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-foreground/10 mt-12 pt-6 text-center text-sm text-navy-foreground/50">
          © {year} AutoVault Logistics. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
