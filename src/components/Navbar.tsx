import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { isRTL } from '@/i18n';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'ar', label: 'AR' },
  { code: 'ur', label: 'UR' },
  { code: 'hi', label: 'HI' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const location = useLocation();
  const rtl = isRTL(i18n.language);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const changeLang = (code: string) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = isRTL(code) ? 'rtl' : 'ltr';
    document.documentElement.lang = code;
    setLangOpen(false);
  };

  const serviceSubmenu = [
    { to: "/services/auction-account-services", label: "Auction Account Services" },
    { to: "/services/towing-services", label: "Towing Services" },
    { to: "/services/loading-services", label: "Loading Services" },
    { to: "/services/warehouse-storage-services", label: "Warehouse & Storage Services" },
    { to: "/services/shipping-services", label: "Shipping Services" },
    { to: "/services/custom-clearance-services", label: "Custom Clearance Services" },
    { to: "/services/title-services", label: "Title Services" },
  ];

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services/auction-account-services', label: t('nav.services') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#032d6b] shadow-enterprise' : 'bg-transparent'
      }`}
    >
      <div className="container-enterprise flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className='flex items-center'>
            <img src="/logo-icon.png" alt="Nejoum Shipping" className="h-10 md:h-12 w-auto object-contain filter-none" />
            <img src="/logo-name.png" alt="Nejoum Shipping" className="h-10 md:h-12 w-auto object-contain filter-none" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => {

            if (link.label === t('nav.services')) {
              return (
                <div
                  key="services"
                  className="relative"
                  onMouseEnter={() => setServiceOpen(true)}
                  onMouseLeave={() => setServiceOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-4 py-2 rounded-lg text-base font-semibold transition-colors ${
                      scrolled
                        ? 'text-white'
                        : 'text-primary-foreground/90'
                    }`}
                  >
                    {link.label}

                    <motion.span
                      animate={{ rotate: serviceOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <KeyboardArrowDownIcon />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {serviceOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full mt-2 divide-y left-0 bg-white shadow-xl rounded-xl border border-gray-100 w-[260px] overflow-hidden z-50"
                      >
                        {serviceSubmenu.map((item) => (
                          <Link
                            key={item.to}
                            to={item.to}
                            className="block px-5 py-[10px] text-sm font-medium text-gray-700 hover:bg-primary/5 hover:text-primary transition"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-base font-semibold transition-colors ${
                  location.pathname === link.to
                    ? 'gradient-primary text-white'
                    : scrolled
                    ? 'text-white'
                    : 'text-primary-foreground/90'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled ? 'text-white hover:bg-muted' : 'text-primary-foreground/90 hover:bg-primary-foreground/10'
              }`}
            >
              <LanguageIcon sx={{ fontSize: 18 }} />
              {i18n.language.split('-')[0].toUpperCase()}
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute top-full mt-1 end-0 bg-card rounded-lg shadow-enterprise border border-border overflow-hidden min-w-[80px]"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLang(lang.code)}
                      className={`w-full px-4 py-2 text-sm text-start transition-colors hover:bg-primary/10 ${
                        i18n.language === lang.code ? 'text-primary font-semibold bg-primary/5' : 'text-foreground'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/#quote"
            className="gradient-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover-lift"
          >
            {t('nav.getQuote')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-foreground' : 'text-primary-foreground'}`}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t border-border overflow-hidden"
          >
            <div className="container-enterprise py-4 flex flex-col gap-1">
              {navLinks.map((link) => {

                // ===== SERVICES MOBILE DROPDOWN =====
                if (link.label === t('nav.services')) {
                  return (
                    <div key="mobile-services" className="flex flex-col">

                      {/* Main Services Button */}
                      <button
                        onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                        className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-primary/5 transition"
                      >
                        {link.label}

                        <motion.span
                          animate={{ rotate: mobileServiceOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <KeyboardArrowDownIcon />
                        </motion.span>
                      </button>

                      {/* Submenu */}
                      <AnimatePresence>
                        {mobileServiceOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col bg-muted/30 rounded-lg mx-3 overflow-hidden"
                          >
                            {serviceSubmenu.map((item) => (
                              <Link
                                key={item.to}
                                to={item.to}
                                onClick={() => setMobileOpen(false)}
                                className="px-6 py-3 text-sm text-foreground hover:bg-primary/10 transition"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                    </div>
                  );
                }

                // ===== NORMAL LINKS =====
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === link.to
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="flex items-center gap-2 px-4 py-3">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLang(lang.code)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                      i18n.language === lang.code
                        ? 'gradient-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-primary/10'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
              <Link
                to="/#quote"
                className="gradient-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-semibold text-center mx-4 mt-2"
              >
                {t('nav.getQuote')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
