import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import MessageIcon from '@mui/icons-material/Message';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const serviceKeys = ['storage', 'receiving', 'towing', 'container', 'trucking', 'shipping'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message sent!');
    setForm({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const inputClass =
    'w-full bg-background border border-border rounded-xl px-4 py-3 ps-12 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all';

  return (
    <div>
      <section className="gradient-navy pt-32 pb-20">
        <div className="container-enterprise text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black text-navy-foreground mb-4">{t('contact.title')}</h1>
            <p className="text-lg text-navy-foreground/70 max-w-2xl mx-auto">{t('contact.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-enterprise max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-enterprise border border-border p-8 space-y-5">
                <div className="relative">
                  <PersonIcon className="absolute start-4 top-3.5 text-muted-foreground" sx={{ fontSize: 20 }} />
                  <input
                    type="text"
                    placeholder={t('contact.name')}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="relative">
                  <EmailIcon className="absolute start-4 top-3.5 text-muted-foreground" sx={{ fontSize: 20 }} />
                  <input
                    type="email"
                    placeholder={t('contact.email')}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    required
                  />
                </div>
                <div className="relative">
                  <PhoneIcon className="absolute start-4 top-3.5 text-muted-foreground" sx={{ fontSize: 20 }} />
                  <input
                    type="tel"
                    placeholder={t('contact.phone')}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <MiscellaneousServicesIcon className="absolute start-4 top-3.5 text-muted-foreground" sx={{ fontSize: 20 }} />
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">{t('contact.service')}</option>
                    {serviceKeys.map((key) => (
                      <option key={key} value={key}>
                        {t(`services.${key}.title`)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <MessageIcon className="absolute start-4 top-3.5 text-muted-foreground" sx={{ fontSize: 20 }} />
                  <textarea
                    placeholder={t('contact.message')}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className={`${inputClass} resize-none`}
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full gradient-primary text-primary-foreground py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-glow"
                >
                  <SendIcon sx={{ fontSize: 20 }} />
                  {t('contact.send')}
                </motion.button>
              </form>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.2} className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl shadow-enterprise border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <LocationOnIcon sx={{ fontSize: 20 }} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-sm text-muted-foreground">{t('contact.info.address')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl shadow-enterprise border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <PhoneIcon sx={{ fontSize: 20 }} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-sm text-muted-foreground">{t('contact.info.phone')}</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl shadow-enterprise border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center shrink-0">
                    <EmailIcon sx={{ fontSize: 20 }} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground">{t('contact.info.email')}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
