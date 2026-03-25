/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Calendar, 
  ChevronRight, 
  ExternalLink, 
  BookOpen, 
  Smartphone, 
  Star, 
  Home, 
  Globe, 
  X,
  MapPin,
  Users,
  Clock,
  FlaskConical,
  Share,
  MoreVertical
} from 'lucide-react';
import { SCHEDULE_DATA, DAYS } from './constants';
import { EventItem } from './types';
import { translations, Language } from './translations';

const LOGO_URL = "https://static.wixstatic.com/media/101253_6050978d4e1a4987af4359e26aa11fa0~mv2.png/v1/fill/w_69,h_68,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/REFRATIVA%20RIO%20LOGO.png";

// --- Components ---

const InstallModal = ({ lang, onClose }: { lang: Language, onClose: () => void }) => {
  const t = translations[lang];
  const [os, setOs] = useState<'ios' | 'android' | 'desktop'>('desktop');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      setOs('ios');
    } else if (/Android/i.test(userAgent)) {
      setOs('android');
    } else {
      setOs('desktop');
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="bg-white w-full max-w-lg rounded-t-[32px] sm:rounded-[32px] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl font-bold text-slate-800">{t.installInstructions.title}</h3>
            <button onClick={onClose} className="p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {os === 'ios' && (
              <div className="space-y-4">
                {t.installInstructions.ios.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {i === 0 ? (
                        <span className="flex items-center gap-1 flex-wrap">
                          {step.split('"Compartir"')[0]}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded-md font-bold text-slate-800">
                            <Share className="w-3 h-3" /> {lang === 'pt' ? '"Compartir"' : lang === 'es' ? '"Compartir"' : '"Share"'}
                          </span>
                          {step.split('"Compartir"')[1]}
                        </span>
                      ) : step}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {os === 'android' && (
              <div className="space-y-4">
                {t.installInstructions.android.map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {i === 0 ? (
                        <span className="flex items-center gap-1 flex-wrap">
                          {step.split('três pontos')[0] || step.split('three dots')[0] || step.split('tres puntos')[0]}
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 rounded-md font-bold text-slate-800">
                            <MoreVertical className="w-3 h-3" />
                          </span>
                          {step.includes('três pontos') ? step.split('três pontos')[1] : step.includes('three dots') ? step.split('three dots')[1] : step.split('tres puntos')[1]}
                        </span>
                      ) : step}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {os === 'desktop' && (
              <div className="text-center py-8">
                <Smartphone className="w-16 h-16 mx-auto text-amber-200 mb-4" />
                <p className="text-slate-600 font-medium">{t.installInstructions.desktop}</p>
              </div>
            )}
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-8 py-4 bg-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-colors"
          >
            {t.close}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Header = ({ activeTab, lang, setLang }: { activeTab: string, lang: Language, setLang: (l: Language) => void }) => {
  const [showLang, setShowLang] = useState(false);
  const t = translations[lang];

  const languages = [
    { code: 'pt' as Language, name: 'Português', flag: 'https://flagcdn.com/w40/br.png' },
    { code: 'en' as Language, name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'es' as Language, name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  ];

  const currentLang = languages.find(l => l.code === lang);

  return (
    <header className="px-6 py-4 flex justify-between items-center bg-white sticky top-0 z-40">
      <div className="flex items-center gap-3">
        <img src={LOGO_URL} alt="Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
        <h1 className="text-xl font-bold text-slate-800">
          {t.title}
        </h1>
      </div>
      <div className="relative">
        <button 
          onClick={() => setShowLang(!showLang)}
          className="flex items-center gap-2 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <img src={currentLang?.flag} alt={lang} className="w-6 h-4 object-cover rounded-sm" />
          <Globe className="w-5 h-5 text-slate-600" />
        </button>
        
        <AnimatePresence>
          {showLang && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden z-50"
            >
              <div className="p-1">
                {languages.map(l => (
                  <button 
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setShowLang(false);
                    }}
                    className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors ${
                      lang === l.code ? 'bg-amber-50 text-amber-700 font-bold' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <img src={l.flag} alt={l.name} className="w-5 h-3 object-cover rounded-sm" />
                    {l.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

const HeroCard = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <div className="mx-6 mt-2 relative overflow-hidden rounded-3xl bg-zinc-900 text-white p-6 shadow-xl">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2">
          <img src={LOGO_URL} alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            REFRATIVA R.I.O. <span className="w-2 h-2 rounded-full bg-amber-500"></span>
          </h2>
          <p className="text-zinc-400 italic text-sm">{t.subtitle}</p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-sm text-zinc-300">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-500" />
          <span>{t.dateRange}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-amber-500" />
          <span>{t.location}</span>
        </div>
      </div>
    </div>
  );
};

const EventModal = ({ event, onClose, lang }: { event: EventItem | null, onClose: () => void, lang: Language }) => {
  if (!event) return null;
  const t = translations[lang];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div 
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        className="bg-white w-full max-w-lg rounded-t-[32px] sm:rounded-[32px] overflow-hidden shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2 text-amber-600 font-medium">
              <FlaskConical className="w-5 h-5" />
              <span>{event.type}</span>
            </div>
            <button onClick={onClose} className="p-2 rounded-full bg-slate-100 text-slate-400 hover:text-slate-600">
              <X className="w-5 h-5" />
            </button>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 mb-8">{event.title}</h3>

          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <span className="block text-2xl font-bold text-amber-600 leading-none">{event.day}</span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{event.month}</span>
              </div>
              <div className="flex flex-col gap-2">
                {(event.times || [event.time]).map((time, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-600">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="font-medium">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-400 uppercase mb-1">{t.speakers}</span>
                <p className="text-slate-700 leading-relaxed">
                  {event.speakers.join(' | ')}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-4 flex gap-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-sm font-bold text-slate-400 uppercase mb-1">{t.eventLocation}</span>
                <p className="text-slate-700 font-medium">
                  {event.location}
                </p>
              </div>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-8 py-4 bg-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/20 hover:bg-amber-600 transition-colors"
          >
            {t.close}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const HomeView = ({ onNavigateToSchedule, onShowInstall, lang }: { onNavigateToSchedule: () => void, onShowInstall: () => void, lang: Language, key?: string }) => {
  const t = translations[lang];
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('lecture');
  const [selectedLecture, setSelectedLecture] = useState('');
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const lectureOptions = useMemo(() => {
    const options = SCHEDULE_DATA.map(event => ({
      title: event.title,
      time: event.time,
      display: `${event.title} (${event.day}/${event.month} - ${event.time})`
    }));
    
    const uniqueOptions = Array.from(new Set(options.map(o => o.display)))
      .map(display => options.find(o => o.display === display)!)
      .sort((a, b) => a.display.localeCompare(b.display));
      
    return uniqueOptions;
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0 || !category) return;
    if (category === 'lecture' && !selectedLecture) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '6ed285e2-b7f0-4d09-a135-5a24d23046e7',
          rating,
          category,
          lecture: category === 'lecture' ? selectedLecture : undefined,
          comment,
          language: lang,
          from_name: 'REFRATIVA R.I.O. App'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setRating(0);
        setCategory('');
        setSelectedLecture('');
        setComment('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pb-24"
    >
      <HeroCard lang={lang} />
      
      <div className="px-6 mt-6">
        <button 
          onClick={onNavigateToSchedule}
          className="w-full bg-gradient-to-r from-amber-400 to-orange-500 p-6 rounded-[32px] flex items-center justify-between shadow-lg shadow-orange-500/20 group"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
              <Calendar className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-white font-bold text-xl">{t.scheduleTitle}</h3>
              <p className="text-white/80 text-sm">{t.scheduleDateRange}</p>
            </div>
          </div>
          <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <section className="px-6 mt-10">
        <h3 className="text-lg font-bold text-slate-800 mb-4">{t.scientificProgram}</h3>
        <a 
          href="https://www.refrativario.com/pt/scientific-program" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <ExternalLink className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{t.scientificProgram}</h4>
              <p className="text-slate-400 text-sm">{t.scientificProgramDesc}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </a>
      </section>

      <div className="px-6 mt-4">
        <a 
          href="https://assets.zyrosite.com/ALpeJ4P1RzcZJLwB/whatsapp-image-2026-03-23-at-08.15.46-4bBKn7Hkio6g8y4w.jpeg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{t.wetLabLocation}</h4>
              <p className="text-slate-400 text-sm">{t.wetLabLocationDesc}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </a>
      </div>

      <section className="px-6 mt-10">
        <h3 className="text-lg font-bold text-slate-800 mb-4">{t.complementaryMaterial}</h3>
        <a 
          href="https://drive.google.com/file/d/1HOrLyzGYb1TvIfV0qF1TTNA_NsUkW_sa/view" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{t.materialsTitle}</h4>
              <p className="text-slate-400 text-sm">{t.materialsDesc}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </a>
      </section>

      <section className="px-6 mt-10">
        <h3 className="text-lg font-bold text-slate-800 mb-4">{t.partners}</h3>
        <a 
          href="https://static.wixstatic.com/media/101253_51ea1e79fe4d4a349b4db5e7add90221~mv2.png/v1/crop/x_325,y_256,w_1951,h_1922/fill/w_650,h_640,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Captura%20de%20Tela%202025-03-11%20%C3%A0s%2022_54_47.png" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors block"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800">{t.partners}</h4>
              <p className="text-slate-400 text-sm">{t.partnersDesc}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </a>
      </section>

      <section className="px-6 mt-6">
        <button 
          onClick={onShowInstall}
          className="w-full bg-white rounded-[24px] p-4 border border-slate-100 shadow-sm flex items-center justify-between hover:bg-slate-50 transition-colors"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
              <Smartphone className="w-6 h-6" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-slate-800">{t.installApp}</h4>
              <p className="text-slate-400 text-sm">{t.installAppDesc}</p>
            </div>
          </div>
          <ChevronRight className="w-5 h-5 text-slate-300" />
        </button>
      </section>

      <section className="px-6 mt-10">
        <h3 className="text-lg font-bold text-slate-800 mb-4">{t.evaluateEvent}</h3>
        <form onSubmit={handleSubmit} className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-sm">
          <p className="text-sm font-bold text-slate-400 uppercase mb-4">{t.evaluateWhat}</p>
          <select 
            required
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-4 bg-slate-50 rounded-2xl border-none text-slate-700 font-medium mb-6 focus:ring-2 focus:ring-amber-500"
          >
            <option value="">{t.select}</option>
            <option value="lecture">{t.specificLecture}</option>
            
            <option value="infra">{t.infrastructure}</option>
          </select>

          {category === 'lecture' && (
            <>
              <p className="text-sm font-bold text-slate-400 uppercase mb-4">{t.selectLecture}</p>
              <select 
                required
                value={selectedLecture}
                onChange={(e) => setSelectedLecture(e.target.value)}
                className="w-full p-4 bg-slate-50 rounded-2xl border-none text-slate-700 font-medium mb-6 focus:ring-2 focus:ring-amber-500"
              >
                <option value="">{t.select}</option>
                {lectureOptions.map(option => (
                  <option key={option.display} value={option.display}>{option.display}</option>
                ))}
              </select>
            </>
          )}
          
          <div className="flex justify-center gap-2 mb-6">
            {[1,2,3,4,5].map(i => (
              <Star 
                key={i} 
                onClick={() => setRating(i)}
                className={`w-8 h-8 cursor-pointer transition-colors ${
                  i <= rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'
                } hover:text-amber-400`} 
              />
            ))}
          </div>

          <textarea 
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t.commentPlaceholder}
            className="w-full p-4 bg-slate-50 rounded-2xl border-none text-slate-700 font-medium h-32 mb-6 focus:ring-2 focus:ring-amber-500"
          ></textarea>

          {submitStatus === 'success' && (
            <p className="text-emerald-600 text-sm font-bold text-center mb-4">{t.evaluationSuccess}</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-rose-600 text-sm font-bold text-center mb-4">{t.evaluationError}</p>
          )}

          <button 
            type="submit"
            disabled={isSubmitting || rating === 0 || !category || (category === 'lecture' && !selectedLecture)}
            className={`w-full py-4 bg-amber-500 text-white font-bold rounded-2xl shadow-lg shadow-amber-500/20 transition-opacity ${
              (isSubmitting || rating === 0 || !category || (category === 'lecture' && !selectedLecture)) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-600'
            }`}
          >
            {isSubmitting ? '...' : t.sendEvaluation}
          </button>
        </form>
      </section>
    </motion.div>
  );
};

const ScheduleView = ({ onSelectEvent, lang }: { onSelectEvent: (e: EventItem) => void, lang: Language, key?: string }) => {
  const [search, setSearch] = useState('');
  const [selectedDate, setSelectedDate] = useState(DAYS[0].date);
  const t = translations[lang];

  const filteredEvents = useMemo(() => {
    return SCHEDULE_DATA.filter(event => {
      const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) || 
                           event.speakers.some(s => s.toLowerCase().includes(search.toLowerCase()));
      const matchesDate = event.date === selectedDate;
      return matchesSearch && matchesDate;
    });
  }, [search, selectedDate]);

  const groupedEvents = useMemo(() => {
    const groups: { [key: string]: EventItem } = {};
    
    filteredEvents.forEach(event => {
      const key = `${event.title}-${event.location}-${event.date}`;
      if (!groups[key]) {
        groups[key] = {
          ...event,
          times: [event.time]
        };
      } else {
        if (!groups[key].times?.includes(event.time)) {
          groups[key].times?.push(event.time);
        }
      }
    });
    
    return Object.values(groups);
  }, [filteredEvents]);

  const selectedDayInfo = DAYS.find(d => d.date === selectedDate);

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="pb-24"
    >
      <div className="px-6 mt-2">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder={t.searchPlaceholder}
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-slate-100 rounded-2xl border-none focus:ring-2 focus:ring-amber-500 text-slate-700 font-medium"
          />
        </div>
      </div>

      <div className="px-6 mt-6 flex gap-3 overflow-x-auto pb-4 no-scrollbar">
        {DAYS.map(day => (
          <button 
            key={day.date}
            onClick={() => setSelectedDate(day.date)}
            className={`min-w-[80px] p-4 rounded-2xl flex flex-col items-center transition-all ${
              selectedDate === day.date 
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/30' 
                : 'bg-white text-slate-400 border border-slate-100'
            }`}
          >
            <span className="text-xs font-bold uppercase mb-1">{day.weekday}</span>
            <span className="text-2xl font-bold leading-none">{day.day}</span>
            <span className="text-[10px] font-bold mt-1">{day.month}</span>
          </button>
        ))}
      </div>

      <div className="px-6 mt-6">
        <h3 className="text-slate-400 font-medium mb-6">
          {t.weekdays[selectedDayInfo?.weekday as keyof typeof t.weekdays]}, {selectedDayInfo?.day} de {t.months[selectedDayInfo?.month as keyof typeof t.months]}
        </h3>

        <div className="space-y-4">
          {groupedEvents.length > 0 ? (
            groupedEvents.map(event => (
              <motion.div 
                key={event.id}
                layoutId={event.id}
                onClick={() => onSelectEvent(event)}
                className="bg-white rounded-[28px] p-5 border border-slate-100 shadow-sm flex gap-4 cursor-pointer hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-amber-500"></div>
                <div className="flex flex-col items-center justify-center min-w-[70px] border-r border-slate-100 pr-4">
                  <span className="text-2xl font-bold text-amber-600 leading-none">{event.day}</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase mt-1">{event.month}</span>
                  <div className="mt-3 flex flex-col gap-1 items-center">
                    {event.times?.map((time, idx) => (
                      <div key={idx} className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded-full whitespace-nowrap">
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-amber-600 mb-1">
                    <FlaskConical className="w-3 h-3" />
                    <span className="text-[10px] font-bold uppercase tracking-wider">{event.type}</span>
                  </div>
                  <h4 className="font-bold text-slate-800 leading-tight mb-2">{event.title}</h4>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Users className="w-3.5 h-3.5" />
                    <p className="text-xs truncate max-w-[180px]">{event.speakers.join(' | ')}</p>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <p className="text-xs truncate max-w-[180px]">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-slate-300" />
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-20 text-slate-400">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-20" />
              <p>{t.noLectures}</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [showInstall, setShowInstall] = useState(false);
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-amber-100">
      <Header activeTab={activeTab} lang={lang} setLang={setLang} />
      
      <main className="max-w-md mx-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'home' ? (
            <HomeView 
              key="home" 
              onNavigateToSchedule={() => setActiveTab('schedule')} 
              onShowInstall={() => setShowInstall(true)}
              lang={lang} 
            />
          ) : (
            <ScheduleView key="schedule" onSelectEvent={setSelectedEvent} lang={lang} />
          )}
        </AnimatePresence>
      </main>

      <AnimatePresence>
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} lang={lang} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showInstall && (
          <InstallModal lang={lang} onClose={() => setShowInstall(false)} />
        )}
      </AnimatePresence>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-slate-100 px-8 py-3 z-40">
        <div className="max-w-md mx-auto flex justify-around items-center">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'home' ? 'text-amber-500' : 'text-slate-400'}`}
          >
            <div className="relative">
              <Home className="w-6 h-6" />
              {activeTab === 'home' && (
                <motion.div layoutId="nav-dot" className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-500 rounded-full" />
              )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{t.home}</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('schedule')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'schedule' ? 'text-amber-500' : 'text-slate-400'}`}
          >
            <div className="relative">
              <Calendar className="w-6 h-6" />
              {activeTab === 'schedule' && (
                <motion.div layoutId="nav-dot" className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-amber-500 rounded-full" />
              )}
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider">{t.schedule}</span>
          </button>
        </div>
      </nav>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
