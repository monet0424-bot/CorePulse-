/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  UserRound, 
  Ruler, 
  Eye, 
  Leaf, 
  CheckCircle2, 
  Clock, 
  Check, 
  Star, 
  MessageCircle, 
  MapPin,
  Menu,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Loader2,
  Calendar,
  ShieldCheck
} from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-3 md:py-4 border-b border-brand-surface-container shadow-sm' : 'bg-transparent py-5 md:py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 md:gap-3">
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA0MzBfMzEg/MDAxNzc3NTIwNDcwNzUw.8upP1Q4XPKKHLM72IShjK0qZt4AeRnD4D8NQsm6WXzog._40YsbcPc8Q_fK0ceZyNM582ZRm0V2uWOTGDm_pXr6Mg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_12_08_50.png?type=w966" 
            alt="CorePulse Logo" 
            className="w-[32px] h-[32px] md:w-[50px] md:h-[50px] object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-[14px] md:text-[18px] font-bold text-brand-primary tracking-tight">CorePulse Pilates</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 font-serif text-sm tracking-wide uppercase">
          <a href="#" className="text-brand-primary border-b-2 border-brand-primary pb-1 font-semibold">Home</a>
          <a href="#about" className="text-brand-text-variant hover:text-brand-primary transition-colors">About</a>
          <a href="#program" className="text-brand-text-variant hover:text-brand-primary transition-colors">Program</a>
          <a href="#pricing" className="text-brand-text-variant hover:text-brand-primary transition-colors">Pricing</a>
          <a href="#reviews" className="text-brand-text-variant hover:text-brand-primary transition-colors">Reviews</a>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden sm:block bg-brand-primary-container text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-xs md:text-sm hover:opacity-90 transition-all">
            상담 예약하기
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brand-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 bg-white z-[60] p-8 flex flex-col lg:hidden"
      >
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-2">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MzBfMzEg/MDAxNzc3NTIwNDcwNzUw.8upP1Q4XPKKHLM72IShjK0qZt4AeRnD4D8NQsm6WXzog._40YsbcPc8Q_fK0ceZyNM582ZRm0V2uWOTGDm_pXr6Mg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_12_08_50.png?type=w966" 
              alt="Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-brand-primary">CorePulse</span>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex flex-col space-y-6 text-2xl font-serif">
          {['Home', 'About', 'Program', 'Pricing', 'Reviews'].map((item) => (
            <a 
              key={item} 
              href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[#1f2d1f]"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="mt-auto">
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full bg-brand-primary text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2"
          >
            1:1 맞춤 상담 예약하기
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="w-full h-full object-cover" 
        src="https://postfiles.pstatic.net/MjAyNjA1MDJfMSAg/MDAxNzc3Njg5MjcyMjky.-2OgFUGWA_N_qx8gzH6rWtgbclDtFWWKqfS7mS9I_FIg.dTvBhhoqEwsGl38BrLSv1KWdxUusvj2GquCqlAjmeB0g.PNG/magnific_2905756115.png?type=w966" 
        alt="Pilates Studio"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-surface/95 via-brand-surface/60 md:via-brand-surface/40 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full md:-mt-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl text-center md:text-left"
      >
        <span className="inline-block px-4 py-1.5 bg-brand-primary-fixed text-brand-primary font-bold text-[10px] md:text-xs tracking-widest rounded-full mb-6 md:mb-8 uppercase">
          PREMIUM 1:1 STUDIO
        </span>
        <h1 className="font-serif text-4xl md:text-7xl text-brand-text-main mb-6 md:mb-8 leading-[1.1] font-semibold">
          몸이 바뀌면,<br />삶이 달라집니다
        </h1>
        <p className="text-base md:text-xl text-brand-text-variant mb-10 md:mb-12 max-w-lg mx-auto md:mx-0 leading-relaxed">
          단 4주, 눈에 보이는 변화 시작<br />1:1 맞춤 필라테스로<br />바디라인과 건강함을 완성하세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-brand-primary text-white px-10 py-4 md:py-5 rounded-full font-bold shadow-xl shadow-brand-primary/20 hover:-translate-y-1 transition-all"
          >
            지금 무료 상담 예약하기 →
          </button>
          <button className="w-full sm:w-auto border border-brand-primary/20 text-brand-text-main hover:bg-brand-surface-container px-10 py-4 md:py-5 rounded-full font-bold transition-all">
            프로그램 자세히 보기
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Highlights = () => {
  const items = [
    { icon: <UserRound className="w-7 h-7 md:w-8 h-8" />, title: "1:1 Personalization", desc: <>개개인의 체형과 목적에 최적화된<br className="hidden md:block" />맞춤형 솔루션</> },
    { icon: <Ruler className="w-7 h-7 md:w-8 h-8" />, title: "Expert Correction", desc: <>해부학적 지식을 기반으로 한<br className="hidden md:block" />정밀 자세 교정</> },
    { icon: <Eye className="w-7 h-7 md:w-8 h-8" />, title: "Visible Results", desc: <>단 10회 만에 느낄 수 있는<br className="hidden md:block" />몸의 긍정적 변화</> },
    { icon: <Leaf className="w-7 h-7 md:w-8 h-8" />, title: "Premium Space", desc: <>오직 나만을 위한<br className="hidden md:block" />쾌적하고 프라이빗한 시설</> },
  ];

  return (
    <section className="py-20 md:py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brand-primary-fixed rounded-2xl flex items-center justify-center mb-6 md:mb-8 text-brand-primary">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg md:text-2xl mb-3 md:mb-4 text-brand-text-main leading-tight">{item.title}</h3>
              <p className="text-brand-text-variant text-xs md:text-base px-2 md:px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformation = () => (
  <section className="py-20 md:py-32 bg-brand-surface-low">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-16 md:mb-20">
        <span className="text-[10px] md:text-xs font-bold tracking-widest text-brand-primary mb-4 block uppercase">TRANSFORMATION</span>
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">눈으로 확인하는 변화</h2>
        <p className="text-sm md:text-base text-brand-text-variant">CorePulse와 함께한 수많은<br className="md:hidden" /> 회원님들의 놀라운 결과입니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {[1, 2].map((id) => (
          <div key={id} className="bg-white p-6 md:p-8 rounded-2xl editorial-shadow group">
            <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover transition-all duration-700" 
                  src={id === 1 ? "https://postfiles.pstatic.net/MjAyNjA1MDJfMjEy/MDAxNzc3NjkwNDQ5MTMx.sVPSq2CSEMFCpNegLb2y8mJFOd-6ymdpGvHhgRGW0jIg.1Asyt7EIsDNgxouJp4c9hyI7GDXXqUvLbGnT6VJBrMUg.PNG/%EC%9E%90%EC%84%B801.png?type=w966" : "https://postfiles.pstatic.net/MjAyNjA1MDJfMTI5/MDAxNzc3Njk5ODcwOTE3.ovlMOga2hf0091BtGVOnFe4_jFPd7jWh9nh58WQBa9sg.bnIaZvhDSHoLrLUD8GFJcaw-WeEzcSsRL3Knejwx0fkg.PNG/%EC%9E%90%EC%84%B803.png?type=w966"}
                  alt="Transformation Before"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white/90 px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-tighter text-brand-text-main uppercase">Before</div>
              </div>
              <div className="aspect-[3/4] rounded-xl overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover" 
                  src={id === 1 ? "https://postfiles.pstatic.net/MjAyNjA1MDJfMTYx/MDAxNzc3NjkwNDU0NDgw.QrAXoREjDAdICk6PKE2WoA8qDoxfhZ8ICHsu4cSiYeYg.QSh7ZCKZeR4iYs2Xaiwvv4ObHxExl7Hw1CqyJ8xM0-Ag.PNG/%EC%9E%90%EC%84%B802.png?type=w966" : "https://postfiles.pstatic.net/MjAyNjA1MDJfMjEx/MDAxNzc3Njk5ODk1OTYw.7LpakmJ5-Nv843sS9z-BB1-AvNj-S8QNH4JWFK0xxpMg.8RL8D_ycDYxB0VjzT-SV0iI2gD3EJ5ZzSjdJhdzUIXgg.PNG/%EC%9E%90%EC%84%B804.png?type=w966"}
                  alt="Transformation After"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-brand-primary text-white px-2 py-0.5 md:px-3 md:py-1 rounded-full text-[8px] md:text-[10px] font-bold tracking-tighter uppercase">After</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-xl md:text-2xl mb-2">{id === 1 ? "거북목 및 척추 불균형 개선" : "복부 탄력 및 바디라인 정리"}</h4>
              <p className="text-brand-text-variant text-xs md:text-sm">{id === 1 ? "직장인 K회원님 (20회 진행) - 통증 완화" : "주부 L회원님 (30회 진행) - 다이어트"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const RecommendedFor = () => {
  const items = [
    {
      title: "체형이 무너진 것을 느끼는 분",
      desc: "어깨, 골반, 허리 라인이 무너지고 자세가 틀어진 것이 고민이신 분"
    },
    {
      title: "운동을 해도 변화가 없는 분",
      desc: "열심히 운동해도 원하는 변화가 없고 금방 원래대로 돌아오는 분"
    },
    {
      title: "혼자 운동이 어려운 분",
      desc: "어떻게 운동해야 할지 모르거나 꾸준히 지속하기 어려운 분"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-[#fdfaf5] relative overflow-hidden">
      {/* Background Decor - Updated Pilates Studio image with improved readability */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <img 
          src="https://postfiles.pstatic.net/MjAyNjA1MDNfNjMg/MDAxNzc3NzkyNDc0NTA1.F9DEurUhkJZh4lHufnABOFsT7XjF5r2cJ6plZ48VJosg.Q-hERCszBEMNi_0Dyt8YH3pP1Uv2hI5Xw4_Jbo_AoFkg.JPEG/photo-clean-brightly-lit-pilates-studio.jpg?type=w966" 
          alt="Pilates Studio" 
          className="w-full h-full object-cover object-right opacity-40 md:opacity-70"
          referrerPolicy="no-referrer"
        />
        {/* Sophisticated mask for text area readability */}
        <div className="absolute inset-0 bg-gradient-to-r md:from-[#fdfaf5] md:via-[#fdfaf5] from-[#fdfaf5]/90 via-[#fdfaf5]/80 to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center md:items-start mb-6 md:mb-8">
              <span className="text-[10px] font-bold tracking-[0.4em] text-[#8ea07e] mb-2 md:mb-4 uppercase text-center md:text-left">FOR YOU</span>
              <div className="w-10 h-px bg-[#8ea07e]/40"></div>
            </div>
            
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-[#1f2d1f] mb-8 md:mb-10 leading-tight">
              이런 분들께<br />
              추천합니다
            </h2>
            
            <p className="text-[#55634a] text-base md:text-lg leading-relaxed max-w-sm mb-10 md:mb-12">
              몸의 변화를 원하지만 어디서부터 시작해야 할지 막막한 분들을 위해 1:1 맞춤 프로그램으로 <br />안전하게 안내드립니다.
            </p>
            
            <div className="flex items-center gap-4 md:gap-5 py-6 md:py-8 border-t border-[#8ea07e]/10 justify-center md:justify-start">
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#8ea07e]/30 flex items-center justify-center text-[#8ea07e] flex-shrink-0">
                  <Leaf className="w-5 h-5 md:w-6 md:h-6" />
               </div>
               <p className="text-xs md:text-sm font-medium text-[#55634a] leading-relaxed text-left">
                 개인별 체형과 목표에 맞춘 체계적인 관리로<br />
                 건강한 변화를 경험해보세요.
               </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Identity Cards */}
        <div className="lg:w-1/2 w-full space-y-4 md:space-y-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-md p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] border border-[#8ea07e]/5 shadow-xl shadow-[#1f2d1f]/5 flex items-start gap-4 md:gap-6 group hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-[#f4f7f0] flex items-center justify-center text-[#4a5d3f] flex-shrink-0 group-hover:bg-[#4a5d3f] group-hover:text-white transition-colors duration-500">
                <Check className="w-5 h-5 md:w-7 md:h-7 stroke-[3px]" />
              </div>
              <div>
                <h3 className="text-base md:text-xl font-bold text-[#1f2d1f] mb-1">{item.title}</h3>
                <p className="text-[#647457] text-xs md:text-[15px] leading-relaxed opacity-80">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Soft Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 pointer-events-none opacity-[0.05] -translate-x-1/2 translate-y-1/2">
         <Leaf className="w-full h-full -rotate-45" />
      </div>
    </section>
  );
};

const PremiumSection = () => {
  const features = [
    {
      title: "1:1 프라이빗 레슨",
      desc: "오직 나만을 위한 맞춤 수업으로\n더 집중적인 케어를 제공합니다.",
      icon: <UserRound className="w-8 h-8 md:w-10 h-10" />
    },
    {
      title: "체형 분석 프로그램",
      desc: "체형과 움직임을 정확히 분석하여\n내 몸에 맞는 프로그램을 설계합니다.",
      icon: <Ruler className="w-8 h-8 md:w-10 h-10" />
    },
    {
      title: "단계별 진행",
      desc: "개인의 수준과 컨디션에 맞춰\n안전하고 효과적으로 진행합니다.",
      icon: <ChevronRight className="rotate-[-45deg] w-8 h-8 md:w-10 h-10" />
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative leaf shadow/overlay (approximated) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] z-0">
        <Leaf className="absolute top-1/3 -left-20 w-48 md:w-96 h-48 md:h-96 -rotate-12" />
        <Leaf className="absolute -bottom-20 -right-20 w-48 md:w-96 h-48 md:h-96 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#6b7c5b] mb-4 md:mb-6 block uppercase">PREMIUM 1:1 STUDIO</span>
        <h2 className="font-serif text-2xl md:text-4xl mb-12 md:mb-16 leading-relaxed">
          처음이라도 걱정 없이 시작할 수 있도록,<br className="hidden md:block" />
          코어펄스 필라테스가 고민을 덜어드릴게요.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-sm flex flex-col items-center text-center border border-brand-surface-container"
            >
              <div className="w-16 h-16 md:w-24 md:h-24 bg-[#f4f2ee] rounded-full flex items-center justify-center mb-6 md:mb-8 text-[#6b7c5b]">
                {feature.icon}
              </div>
              <div className="w-8 h-0.5 bg-brand-surface-container mb-4 md:mb-6"></div>
              <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4 font-bold text-brand-text-main">{feature.title}</h3>
              <p className="text-brand-text-variant text-xs md:text-sm whitespace-pre-line leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#f0f2ed] rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12"
        >
          <div className="flex items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm text-[#2d3a1f]">
              <Check className="w-6 h-6 md:w-8 md:h-8 stroke-[3]" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg md:text-3xl mb-1 md:mb-2 font-bold text-[#1a2b0d]">처음이라도 걱정 없이 <br className="md:hidden" />시작할 수 있습니다.</h4>
            <p className="text-brand-text-variant text-xs md:text-base font-medium">코어펄스 필라테스는 회원님의 <br className="md:hidden" />건강한 변화를 함께 만들어갑니다.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const App = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', program: '다이어트 & 체형교정', message: '' });
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'err', msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      // Send to Formspree for Email Notifications
      const response = await fetch('https://formspree.io/f/mdayrydy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          program: formData.program,
          message: formData.message,
          _subject: `[CorePulse] 새로운 상담 신청: ${formData.name}`
        })
      });

      if (response.ok) {
        setSubmitStatus({ type: 'success', msg: "상담 신청이 완료되었습니다. 곧 연락드리겠습니다." });
        setFormData({ name: '', phone: '', program: '다이어트 & 체형교정', message: '' });
      } else {
        throw new Error('Formspree submission failed');
      }
    } catch (error) {
      setSubmitStatus({ type: 'err', msg: "오류가 발생했습니다. 잠시 후 다시 시도해주세요." });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* No change to useEffect for now, but will target the new layout if needed */
  useEffect(() => {
    const slider = document.getElementById('review-slider');
    if (!slider) return;

    let intervalId: number;

    const startAutoSlide = () => {
      intervalId = window.setInterval(() => {
        const itemWidth = slider.querySelector('div')?.clientWidth || 400;
        const gap = 32; // gap-8
        const scrollAmount = itemWidth + gap;

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 10) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }, 4000);
    };

    // Auto-slide only if slider exists and has content
    if (slider.children.length > 3) {
      startAutoSlide();
    }

    const handleMouseEnter = () => clearInterval(intervalId);
    const handleMouseLeave = () => {
      if (slider.children.length > 3) startAutoSlide();
    };

    slider.addEventListener('mouseenter', handleMouseEnter);
    slider.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(intervalId);
      slider.removeEventListener('mouseenter', handleMouseEnter);
      slider.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-surface selection:bg-brand-primary/20">
      <Nav />

      <Hero />
      <Highlights />
      <Transformation />
      <RecommendedFor />

      {/* Philosophy Section */}
      <section className="py-20 md:py-32" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-xl md:shadow-2xl relative z-10" 
              src="https://postfiles.pstatic.net/MjAyNjA1MDJfNDQg/MDAxNzc3NzAzOTQ4NTY0.8Y-biJjFRhV--3WL2lkaN_2-YDugnGSGKCOXSdJirFcg.jhClS0F6QTPHNt-cWWdhmIiJeznT9T-ozOd4ShAbYfwg.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_2%EC%9D%BC_%EC%98%A4%ED%9B%84_03_38_46.png?type=w966" 
              alt="Instructor Guidance"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 md:w-64 h-48 md:h-64 bg-brand-primary opacity-5 rounded-full blur-3xl"></div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <span className="text-[10px] md:text-xs font-bold text-brand-primary mb-4 md:mb-6 block tracking-widest uppercase">PHILOSOPHY</span>
            <h2 className="font-serif text-3xl md:text-5xl mb-6 md:mb-10 leading-tight">Scientific & Results-Oriented</h2>
            <p className="text-base md:text-lg text-brand-text-variant mb-8 md:mb-12 leading-relaxed px-2 md:px-0">
              CorePulse는 단순히 동작을 따라 하는 필라테스가 아닙니다. 근육의 작용과 해부학적 원리를 기반으로 한 <strong>과학적인 접근법</strong>으로 가장 효율적인 변화를 이끌어냅니다.
            </p>
            <div className="space-y-6 md:space-y-8 mb-10 md:mb-12 text-left max-w-sm mx-auto lg:mx-0">
              <div className="flex items-start gap-4">
                <div className="text-brand-primary mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-text-main mb-1 text-sm md:text-base">국제 공인 전문 강사진</h4>
                  <p className="text-brand-text-variant text-xs md:text-sm">PMA-CPT를 포함한 다수의 국내외 권위 있는 자격 보유</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-brand-primary mt-1 flex-shrink-0"><CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-text-main mb-1 text-sm md:text-base">메디컬 필라테스 접근</h4>
                  <p className="text-brand-text-variant text-xs md:text-sm">재활 및 통증 케어에 특화된 정밀 시퀀스 설계</p>
                </div>
              </div>
            </div>
            <button className="text-brand-primary font-bold flex items-center gap-2 group mx-auto lg:mx-0 text-sm md:text-base">
              강사진 상세 프로필 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 md:py-32 bg-brand-surface-container" id="program">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 md:mb-20">
          <h2 className="font-serif text-3xl md:text-5xl mb-4 md:mb-6">Our Programs</h2>
          <p className="text-sm md:text-base text-brand-text-variant">당신의 상태와 목표에 맞춘 전문적인 커리큘럼</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { tag: "DIET & LINE", title: "다이어트 & 체형교정", img: "https://postfiles.pstatic.net/MjAyNjA1MDJfMjAz/MDAxNzc3NzAyNjY4MzYx.0k4J-d1gH965dNqXlMk0fqe2b2qrOfue8cW5GrlNhxkg.iYty9F0JKUCuVckYUnVD8uR3QQ7qYffFGrcRt8scd_Yg.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_2%EC%9D%BC_%EC%98%A4%ED%9B%84_03_17_32.png?type=w966", perks: ["고강도 인터벌 필라테스", "슬림한 바디라인 집중 케어"] },
            { tag: "POSTURE CARE", title: "자세교정", img: "https://postfiles.pstatic.net/MjAyNjA1MDJfMTM2/MDAxNzc3NzAzMjIzMjMx.zrPF90nlgtKsn4KcMJE10zDT87daYEkqNY_p4-wHorog.lIPSFRMey-99bGpjnAizZGoejnhjrMQsr_aWma71mgQg.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_2%EC%9D%BC_%EC%98%A4%ED%9B%84_03_26_40.png?type=w966", perks: ["정밀 체형 분석", "직장인 통증 완화 시퀀스"] },
            { tag: "PRIVATE 1:1", title: "프라이빗 기구 레슨", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhoFRXllQGoff1JSRbsT1Yyhp5IBLrxXoMMgpv839iu95KJjiLAZ1wa3n_TSaHtT3cjH7B95jq5YgMAoBAmcQWhR5NSRmzeRt5tOX_pyAyvFDCOgRnp-4If3fi2e_Ep_I-KatkvSpaNoEOKQWzgC470v0m2g7K3wPkpnEnnlIKrpU9hFS2wWNe3QIr9p6B2DkJHzOsCmjI1u3pKm0KsNZ7j8QisQjDfGy0Xg82GVrJhrcYEpgwI5piwR6bo74TsTWgUehMZqdLakQ", perks: ["100% 개인화된 목표", "대기구 4종 풀 세트 활용"] },
          ].map((prog, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden editorial-shadow group cursor-pointer"
            >
              <div className="h-48 md:h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={prog.img} alt={prog.title} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-4 left-6 md:bottom-6 md:left-8 text-white text-[9px] md:text-[10px] font-black tracking-widest">{prog.tag}</div>
              </div>
              <div className="p-6 md:p-8 text-center md:text-left">
                <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4">{prog.title}</h3>
                <ul className="space-y-1.5 md:space-y-2 text-brand-text-variant text-xs md:text-sm">
                  {prog.perks.map((p, j) => <li key={j}>• {p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 md:py-32 bg-brand-surface" id="pricing">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-[10px] md:text-xs font-bold text-brand-primary mb-4 md:mb-6 block tracking-widest uppercase">MEMBERSHIP</span>
          <h2 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8">당신의 가치를 높이는 투자</h2>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-error-container text-red-900 rounded-full mb-12 md:mb-16 text-[10px] md:text-xs font-bold animate-pulse">
            <Clock className="w-3 h-3 md:w-4 md:h-4" /> 이번 달 한정 선착순 5명 마감 임박
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 md:p-12 rounded-2xl editorial-shadow border border-brand-surface-container flex flex-col items-center md:items-start text-center md:text-left">
              <h4 className="font-serif text-2xl md:text-3xl mb-2">Introduction</h4>
              <p className="text-brand-text-variant text-[13px] md:text-sm mb-8 md:mb-10">필라테스가 처음이신 분들을 위한 시작</p>
              <div className="flex items-baseline gap-2 mb-8 md:mb-10">
                <span className="text-3xl md:text-4xl font-bold">₩550,000</span>
                <span className="text-brand-text-variant text-sm">/ 10회</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-grow text-xs md:text-sm">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 md:w-5 md:h-5 text-brand-primary flex-shrink-0" /> 체형 분석 무료 제공</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 md:w-5 md:h-5 text-brand-primary flex-shrink-0" /> 1:1 개인 레슨 (50분)</li>
              </ul>
              <button className="w-full py-4 border border-brand-primary/20 rounded-full font-bold hover:bg-brand-surface-low transition-all text-sm md:text-base">자세히 보기</button>
            </div>
            <div className="bg-brand-primary text-white p-8 md:p-12 rounded-2xl editorial-shadow transform md:scale-105 flex flex-col items-center md:items-start text-center md:text-left relative z-10 shadow-2xl shadow-brand-primary/30">
              <h4 className="font-serif text-2xl md:text-3xl mb-2">Essential Change</h4>
              <p className="opacity-80 text-[13px] md:text-sm mb-8 md:mb-10">가장 확실한 신체 변화를 위한 추천 코스</p>
              <div className="flex items-baseline gap-2 mb-8 md:mb-10">
                <span className="text-3xl md:text-4xl font-bold">₩1,500,000</span>
                <span className="opacity-80 text-sm">/ 30회</span>
              </div>
              <ul className="space-y-3 md:space-y-4 mb-10 md:mb-12 flex-grow text-xs md:text-sm">
                <li className="flex items-center gap-3"><Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" /> 식단 가이드 & 관리 시스템</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" /> 샤워실 및 운동복 무료 이용</li>
                <li className="flex items-center gap-3"><Check className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" /> 우선 예약권 혜택</li>
              </ul>
              <button className="w-full py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-opacity-95 transition-all text-sm md:text-base">이 패키지로 시작하기</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-20 md:py-32 bg-[#fdfaf5] relative overflow-hidden">
        {/* Soft studio background atmosphere with improved readability mask */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA1MDNfMTI5/MDAxNzc3Nzc0NzQ0OTA1.oLROa384tWFcf_pDd8qmqpqq_xc6pBpeWYa3qe1mluUg.Ys4wxYrTd3CH8qQTgKahzejQXrjwyxt-A73GY8VP4g8g.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_3%EC%9D%BC_%EC%98%A4%ED%9B%84_11_18_36.png?type=w966" 
            alt="Studio Background" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay for text readability with sophisticated stops */}
          <div 
            className="absolute inset-0 z-10" 
            style={{
              background: 'linear-gradient(to right, #fdfaf5 0%, #fdfaf5 40%, rgba(253, 250, 245, 0.4) 70%, rgba(31, 45, 31, 0.3) 100%)'
            }}
          ></div>
          <div className="absolute inset-0 md:hidden bg-[#fdfaf5]/40 z-[5]"></div>
        </div>
        
        {/* Leaf Overlay (approximated shadow feel) */}
        <div className="absolute top-0 left-0 w-1/3 h-full pointer-events-none opacity-[0.05]">
          <Leaf className="w-full h-full -rotate-12 translate-x-[-20%] translate-y-[-10%]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#8ea07e] mb-6 md:mb-8 uppercase">COREPULSE PILATES</span>
              
              <h2 className="font-serif text-2xl md:text-5xl lg:text-6xl mb-8 md:mb-12 leading-snug text-[#1f2d1f]">
                지금 시작하지 않으면,<br />
                몸은 <span className="relative">그대로입니다<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8ea07e]/30"></span></span>
              </h2>

              <div className="w-12 h-px bg-brand-surface-container mb-8 md:mb-10"></div>

              <p className="text-[#55634a] text-sm md:text-lg mb-8 md:mb-12 leading-relaxed">
                지금 상담 신청 시<br className="md:hidden" />
                1:1 맞춤 프로그램을 무료로 안내드립니다.
              </p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto bg-[#4a5d3f] text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl md:rounded-3xl font-bold flex items-center justify-center md:justify-start gap-3 hover:bg-[#3d4d34] transition-all shadow-xl shadow-[#4a5d3f]/20 group"
              >
                <Calendar className="w-5 h-5 opacity-80" />
                <span>무료 상담 예약하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Bottom Mini Icons */}
              <div className="grid grid-cols-3 gap-4 md:gap-16 mt-16 md:mt-24">
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center text-[#8ea07e] mb-3">
                    <UserRound className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="text-[10px] md:text-sm font-semibold text-[#55634a] whitespace-nowrap">1:1 맞춤</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center text-[#8ea07e] mb-3">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="text-[10px] md:text-sm font-semibold text-[#55634a] whitespace-nowrap">체계적 관리</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-9 h-9 md:w-11 md:h-11 flex items-center justify-center text-[#8ea07e] mb-3">
                    <Leaf className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <span className="text-[10px] md:text-sm font-semibold text-[#55634a] whitespace-nowrap">건강한 변화</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-20 md:py-32 bg-brand-surface-low overflow-hidden" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-24"
          >
            <span className="text-[10px] md:text-xs font-bold text-brand-primary mb-4 md:mb-6 block tracking-widest uppercase">REAL REVIEWS</span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mb-4 md:mb-6">
              "나를 사랑하는 시간, CorePulse"
            </h2>
            <p className="text-sm md:text-base text-brand-text-variant">단 4주 만에 변화가 시작됩니다.<br />실제 회원님들의 놀라운 변화와 생생한 후기</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Featured Review */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-[350px] md:h-[600px] relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA1MDJfMTYx/MDAxNzc3NjkwNDU0NDgw.QrAXoREjDAdICk6PKE2WoA8qDoxfhZ8ICHsu4cSiYeYg.QSh7ZCKZeR4iYs2Xaiwvv4ObHxExl7Hw1CqyJ8xM0-Ag.PNG/%EC%9E%90%EC%84%B802.png?type=w966" 
                alt="Member Result" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 text-white">
                <div className="flex text-yellow-400 mb-4 md:mb-6 space-x-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 md:w-5 md:h-5 fill-current" />)}
                </div>
                <p className="text-base md:text-2xl font-serif mb-6 md:mb-8 leading-relaxed italic line-clamp-3 md:line-clamp-none">
                  "만성적인 허리 통증 때문에 시작했는데, 5회 만에 통증이 사라졌어요. 이제는 바른 자세를 유지하는 게 자연스러워졌고 주변에서 몸 선이 예뻐졌다는 말을 정말 많이 들어요."
                </p>
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-base md:text-lg font-bold">K</div>
                  <div>
                    <p className="font-bold text-base md:text-lg">김OO 회원님</p>
                    <p className="text-white/60 text-[10px] md:text-sm">20회 수강 · 거북목 & 통증 케어</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <div className="lg:col-span-5 grid grid-cols-1 gap-6 md:gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-3xl editorial-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-brand-primary mb-4 md:mb-6 space-x-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-brand-text-main text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    "운동을 정말 싫어했는데 CorePulse에서는 시간이 가는 줄 몰라요. 선생님께서 컨디션에 맞춰 세심하게 조절해주시는 게 최고예요!"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-brand-primary-fixed flex items-center justify-center text-brand-primary font-bold text-sm">L</div>
                    <div>
                      <p className="font-bold text-brand-text-main text-sm">이OO 회원님</p>
                      <p className="text-brand-text-variant text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Verified</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-brand-primary text-white p-8 md:p-10 rounded-3xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-white/40 mb-4 md:mb-6 space-x-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current text-white" />)}
                  </div>
                  <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
                    "출산 후 처진 뱃살과 골반 불균형이 가장 큰 고민이었는데, 1:1 레슨을 통해 몸매뿐만 아니라 자존감까지 완벽하게 회복했습니다."
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">P</div>
                    <div>
                      <p className="font-bold text-sm">박OO 회원님</p>
                      <p className="text-white/60 text-[9px] md:text-[10px] uppercase tracking-widest font-bold">30회 수강</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* More Reviews Horizontal (Hidden on specific desktop layouts but good for mobile/scroll) */}
          <div 
            id="review-slider"
            className="flex gap-8 overflow-x-auto mt-16 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
          >
            {[
              { id: 4, text: '"바디프로필 목적으로 시작했는데 근육 라인이 예쁘게 잡혀서 너무 만족스러워요. 식단 관리까지 꼼꼼히 해주세요."', author: "S회원님", date: "방금 전", img: "https://postfiles.pstatic.net/MjAyNjA1MDJfMjEx/MDAxNzc3Njk5ODk1OTYw.7LpakmJ5-Nv843sS9z-BB1-AvNj-S8QNH4JWFK0xxpMg.8RL8D_ycDYxB0VjzT-SV0iI2gD3EJ5ZzSjdJhdzUIXgg.PNG/%EC%9E%90%EC%84%B804.png?type=w966" },
              { id: 5, text: '"구부정한 어깨 때문에 항상 피곤했는데, 교정 운동 후로는 피로감이 훨씬 덜해요. 삶의 질이 수직 상승했습니다."', author: "M회원님", date: "5일 전", img: "https://postfiles.pstatic.net/MjAyNjA1MDJfMjAz/MDAxNzc3NzAyNjY4MzYx.0k4J-d1gH965dNqXlMk0fqe2b2qrOfue8cW5GrlNhxkg.iYty9F0JKUCuVckYUnVD8uR3QQ7qYffFGrcRt8scd_Yg.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_2%EC%9D%BC_%EC%98%A4%ED%9B%84_03_17_32.png?type=w966" }
            ].map((r, i) => (
              <motion.div 
                key={r.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[320px] md:min-w-[400px] snap-center bg-white p-8 rounded-2xl editorial-shadow"
              >
                <div className="flex text-brand-primary mb-4 space-x-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-brand-text-main mb-8 leading-relaxed text-sm">
                  {r.text}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-brand-primary-fixed flex items-center justify-center text-brand-primary font-bold text-xs">
                      {r.author[0]}
                    </div>
                    <p className="font-bold text-brand-text-main text-xs">{r.author}</p>
                  </div>
                  <span className="text-[9px] text-brand-text-variant font-medium uppercase tracking-widest">{r.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PremiumSection />
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          <div className="text-center lg:text-left">
            <h2 className="font-serif text-3xl md:text-5xl mb-6 md:mb-8 text-[#1f2d1f]">지금 바로 상담하세요</h2>
            <p className="text-brand-text-variant font-bold mb-10 md:mb-12 text-sm md:text-base">30초 입력으로 상담 가능합니다<br className="md:hidden" />지금 신청하시면 1:1 맞춤 안내를 받아보실 수 있습니다</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase text-left">성함</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-brand-primary/20 focus:border-brand-primary py-2 transition-colors outline-none bg-transparent" 
                    placeholder="홍길동" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase text-left">연락처</label>
                  <input 
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border-b border-brand-primary/20 focus:border-brand-primary py-2 transition-colors outline-none bg-transparent" 
                    placeholder="010-0000-0000" 
                  />
                </div>
              </div>
              <div>
                <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase text-left">희망 프로그램</label>
                <select 
                  value={formData.program}
                  onChange={e => setFormData({ ...formData, program: e.target.value })}
                  className="w-full border-b border-brand-primary/20 focus:border-brand-primary py-2 transition-colors outline-none bg-transparent appearance-none"
                >
                  <option value="다이어트 & 체형교정">다이어트 & 체형교정</option>
                  <option value="자세교정">자세교정</option>
                  <option value="프라이빗 기구 레슨">프라이빗 기구 레슨</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase text-left">메모 (선택)</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-brand-primary/20 focus:border-brand-primary py-2 transition-colors outline-none bg-transparent resize-none h-16" 
                  placeholder="추가 궁금하신 점을 적어주세요." 
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-brand-primary text-white py-4 md:py-5 rounded-full font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 text-sm md:text-base"
                >
                  {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "무료 상담 신청하기"}
                </button>
                <button type="button" className="flex-1 bg-[#FEE500] text-[#3c1e1e] py-4 md:py-5 rounded-full font-bold flex items-center justify-center gap-2 text-sm md:text-base">
                  <MessageCircle className="w-5 h-5 fill-current" /> 카카오톡 상담
                </button>
              </div>

              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center text-xs md:text-sm font-bold ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}
                >
                  {submitStatus.msg}
                </motion.div>
              )}
            </form>
          </div>
          <div className="min-h-[300px] md:min-h-[400px] bg-brand-surface-container rounded-2xl flex flex-col items-center justify-center p-8 md:p-12 text-center border border-brand-primary/5">
            <MapPin className="w-10 h-10 md:w-12 md:h-12 text-brand-primary mb-4 md:mb-6" />
            <h4 className="font-serif text-xl md:text-2xl mb-2 md:mb-4">CorePulse Studio 위치</h4>
            <p className="text-xs md:text-base text-brand-text-variant leading-relaxed">서울특별시 강남구 테헤란로 123<br />CorePulse 빌딩 4층</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-12 md:py-20 border-t border-brand-surface-container bg-brand-surface-low text-center md:text-left">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <div className="flex items-center gap-2 md:gap-3">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MzBfMzEg/MDAxNzc3NTIwNDcwNzUw.8upP1Q4XPKKHLM72IShjK0qZt4AeRnD4D8NQsm6WXzog._40YsbcPc8Q_fK0ceZyNM582ZRm0V2uWOTGDm_pXr6Mg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_12_08_50.png?type=w966" 
              alt="CorePulse Logo" 
              className="h-8 md:h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-base md:text-lg font-bold text-brand-primary tracking-tight">CorePulse Pilates</span>
          </div>
          <div className="text-[10px] md:text-xs text-brand-text-variant order-3 md:order-2">© 2024 CorePulse Pilates. Effortless Precision.</div>
          <div className="flex gap-6 md:gap-8 text-[9px] md:text-[10px] font-bold tracking-widest text-brand-text-variant uppercase order-2 md:order-3">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
