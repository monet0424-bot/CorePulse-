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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md py-4 border-b border-brand-surface-container shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA0MzBfMzEg/MDAxNzc3NTIwNDcwNzUw.8upP1Q4XPKKHLM72IShjK0qZt4AeRnD4D8NQsm6WXzog._40YsbcPc8Q_fK0ceZyNM582ZRm0V2uWOTGDm_pXr6Mg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_12_08_50.png?type=w966" 
            alt="CorePulse Logo" 
            className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-[14px] md:text-[18px] font-bold text-brand-primary tracking-tight">CorePulse Pilates</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-serif text-sm tracking-wide uppercase">
          <a href="#" className="text-brand-primary border-b-2 border-brand-primary pb-1 font-semibold">Home</a>
          <a href="#about" className="text-brand-text-variant hover:text-brand-primary transition-colors">About</a>
          <a href="#program" className="text-brand-text-variant hover:text-brand-primary transition-colors">Program</a>
          <a href="#pricing" className="text-brand-text-variant hover:text-brand-primary transition-colors">Pricing</a>
          <a href="#reviews" className="text-brand-text-variant hover:text-brand-primary transition-colors">Reviews</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-brand-primary-container text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all">
            1:1 맞춤 상담 예약하기
          </button>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-r from-brand-surface/90 via-brand-surface/40 to-transparent"></div>
    </div>
    <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full -mt-20">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block px-4 py-1.5 bg-brand-primary-fixed text-brand-primary font-bold text-xs tracking-widest rounded-full mb-8 uppercase">
          PREMIUM 1:1 STUDIO
        </span>
        <h1 className="font-serif text-5xl md:text-7xl text-brand-text-main mb-8 leading-[1.1] font-semibold">
          몸이 바뀌면,<br />삶이 달라집니다
        </h1>
        <p className="text-lg md:text-xl text-brand-text-variant mb-12 max-w-lg leading-relaxed">
          단 4주, 눈에 보이는 변화 시작<br />1:1 맞춤 필라테스로 바디라인과 건강함을 완성하세요
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-brand-primary text-white px-10 py-5 rounded-full font-bold shadow-xl shadow-brand-primary/20 hover:-translate-y-1 transition-all">
            지금 무료 상담 받기
          </button>
          <button className="border border-brand-primary/20 text-brand-text-main hover:bg-brand-surface-container px-10 py-5 rounded-full font-bold transition-all">
            프로그램 자세히 보기
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

const Highlights = () => {
  const items = [
    { icon: <UserRound className="w-8 h-8" />, title: "1:1 Personalization", desc: <>개개인의 체형과 목적에 최적화된<br />맞춤형 솔루션</> },
    { icon: <Ruler className="w-8 h-8" />, title: "Expert Correction", desc: <>해부학적 지식을 기반으로 한<br />정밀 자세 교정</> },
    { icon: <Eye className="w-8 h-8" />, title: "Visible Results", desc: <>단 10회 만에 느낄 수 있는<br />몸의 긍정적 변화</> },
    { icon: <Leaf className="w-8 h-8" />, title: "Premium Space", desc: <>오직 나만을 위한<br />쾌적하고 프라이빗한 시설</> },
  ];

  return (
    <section className="py-32 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {items.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-brand-primary-fixed rounded-2xl flex items-center justify-center mb-8 text-brand-primary">
                {item.icon}
              </div>
              <h3 className="font-serif text-2xl mb-4 text-brand-text-main">{item.title}</h3>
              <p className="text-brand-text-variant px-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Transformation = () => (
  <section className="py-32 bg-brand-surface-low">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
      <div className="text-center mb-20">
        <span className="text-xs font-bold tracking-widest text-brand-primary mb-4 block uppercase">TRANSFORMATION</span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">눈으로 확인하는 변화</h2>
        <p className="text-brand-text-variant">CorePulse와 함께한 수많은 회원님들의 놀라운 결과입니다.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {[1, 2].map((id) => (
          <div key={id} className="bg-white p-8 rounded-2xl editorial-shadow group">
            <div className="flex gap-4 mb-8">
              <div className="flex-1 aspect-[3/4] rounded-xl overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover transition-all duration-700" 
                  src={id === 1 ? "https://postfiles.pstatic.net/MjAyNjA1MDJfMjEy/MDAxNzc3NjkwNDQ5MTMx.sVPSq2CSEMFCpNegLb2y8mJFOd-6ymdpGvHhgRGW0jIg.1Asyt7EIsDNgxouJp4c9hyI7GDXXqUvLbGnT6VJBrMUg.PNG/%EC%9E%90%EC%84%B801.png?type=w966" : "https://postfiles.pstatic.net/MjAyNjA1MDJfMTI5/MDAxNzc3Njk5ODcwOTE3.ovlMOga2hf0091BtGVOnFe4_jFPd7jWh9nh58WQBa9sg.bnIaZvhDSHoLrLUD8GFJcaw-WeEzcSsRL3Knejwx0fkg.PNG/%EC%9E%90%EC%84%B803.png?type=w966"}
                  alt="Transformation Before"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter text-brand-text-main uppercase">Before</div>
              </div>
              <div className="flex-1 aspect-[3/4] rounded-xl overflow-hidden relative">
                <img 
                  className="w-full h-full object-cover" 
                  src={id === 1 ? "https://postfiles.pstatic.net/MjAyNjA1MDJfMTYx/MDAxNzc3NjkwNDU0NDgw.QrAXoREjDAdICk6PKE2WoA8qDoxfhZ8ICHsu4cSiYeYg.QSh7ZCKZeR4iYs2Xaiwvv4ObHxExl7Hw1CqyJ8xM0-Ag.PNG/%EC%9E%90%EC%84%B802.png?type=w966" : "https://postfiles.pstatic.net/MjAyNjA1MDJfMjEx/MDAxNzc3Njk5ODk1OTYw.7LpakmJ5-Nv843sS9z-BB1-AvNj-S8QNH4JWFK0xxpMg.8RL8D_ycDYxB0VjzT-SV0iI2gD3EJ5ZzSjdJhdzUIXgg.PNG/%EC%9E%90%EC%84%B804.png?type=w966"}
                  alt="Transformation After"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-primary text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter uppercase">After</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-serif text-2xl mb-2">{id === 1 ? "거북목 및 척추 불균형 개선" : "복부 탄력 및 바디라인 정리"}</h4>
              <p className="text-brand-text-variant text-sm">{id === 1 ? "직장인 K회원님 (20회 진행) - 통증 완화" : "주부 L회원님 (30회 진행) - 다이어트"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PremiumSection = () => {
  const features = [
    {
      title: "1:1 프라이빗 레슨",
      desc: "오직 나만을 위한 맞춤 수업으로\n더 집중적인 케어를 제공합니다.",
      icon: <UserRound className="w-10 h-10" />
    },
    {
      title: "체형 분석 기반 프로그램",
      desc: "체형과 움직임을 정확히 분석하여\n내 몸에 맞는 프로그램을 설계합니다.",
      icon: <Ruler className="w-10 h-10" />
    },
    {
      title: "무리 없는 단계별 진행",
      desc: "개인의 수준과 컨디션에 맞춰\n안전하고 효과적으로 진행합니다.",
      icon: <ChevronRight className="rotate-[-45deg] w-10 h-10" /> // Using a proxy for the steps/flag
    }
  ];

  return (
    <section className="py-32 bg-[#faf9f6] relative overflow-hidden">
      {/* Decorative leaf shadow/overlay (approximated) */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03]">
        <Leaf className="absolute top-10 left-10 w-96 h-96 -rotate-12" />
        <Leaf className="absolute bottom-10 right-10 w-96 h-96 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
        <span className="text-sm font-bold tracking-[0.2em] text-[#6b7c5b] mb-6 block uppercase">PREMIUM 1:1 STUDIO</span>
        <h2 className="font-serif text-3xl md:text-4xl mb-16 leading-relaxed">
          처음이라도 걱정 없이 시작할 수 있도록,<br />
          코어펄스 필라테스가 고민을 덜어드릴게요.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-12 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center border border-brand-surface-container"
            >
              <div className="w-24 h-24 bg-[#f4f2ee] rounded-full flex items-center justify-center mb-8 text-[#6b7c5b]">
                {feature.icon}
              </div>
              <div className="w-8 h-0.5 bg-brand-surface-container mb-6"></div>
              <h3 className="font-serif text-2xl mb-4 font-bold text-brand-text-main">{feature.title}</h3>
              <p className="text-brand-text-variant text-sm whitespace-pre-line leading-relaxed">
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
          className="bg-[#f0f2ed] rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 flex items-center justify-center opacity-30">
              <Leaf className="w-12 h-12 text-[#6b7c5b]" />
            </div>
            <div className="w-px h-12 bg-gray-300 hidden md:block"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-[#2d3a1f]">
              <Check className="w-8 h-8 stroke-[3]" />
            </div>
          </div>
          <div className="text-center md:text-left">
            <h4 className="font-serif text-2xl md:text-3xl mb-2 font-bold text-[#1a2b0d]">처음이라도 걱정 없이 시작할 수 있습니다.</h4>
            <p className="text-brand-text-variant font-medium">코어펄스 필라테스는 회원님의 건강한 변화를 함께 만들어갑니다.</p>
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

      {/* Philosophy Section */}
      <section className="py-32" id="about">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <motion.img 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="rounded-2xl shadow-2xl relative z-10" 
              src="https://postfiles.pstatic.net/MjAyNjA1MDJfNDQg/MDAxNzc3NzAzOTQ4NTY0.8Y-biJjFRhV--3WL2lkaN_2-YDugnGSGKCOXSdJirFcg.jhClS0F6QTPHNt-cWWdhmIiJeznT9T-ozOd4ShAbYfwg.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_2%EC%9D%BC_%EC%98%A4%ED%9B%84_03_38_46.png?type=w966" 
              alt="Instructor Guidance"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-primary opacity-5 rounded-full blur-3xl"></div>
          </div>
          <div>
            <span className="text-xs font-bold text-brand-primary mb-6 block tracking-widest uppercase">PHILOSOPHY</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-10 leading-tight">Scientific & Results-Oriented</h2>
            <p className="text-lg text-brand-text-variant mb-12 leading-relaxed">
              CorePulse는 단순히 동작을 따라 하는 필라테스가 아닙니다. 근육의 작용과 해부학적 원리를 기반으로 한 <strong>과학적인 접근법</strong>으로 가장 효율적인 변화를 이끌어냅니다.
            </p>
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="text-brand-primary mt-1"><CheckCircle2 className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-text-main mb-1">국제 공인 전문 강사진</h4>
                  <p className="text-brand-text-variant text-sm">PMA-CPT를 포함한 다수의 국내외 권위 있는 자격 보유</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="text-brand-primary mt-1"><CheckCircle2 className="w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-brand-text-main mb-1">메디컬 필라테스 접근</h4>
                  <p className="text-brand-text-variant text-sm">재활 및 통증 케어에 특화된 정밀 시퀀스 설계</p>
                </div>
              </div>
            </div>
            <button className="text-brand-primary font-bold flex items-center gap-2 group">
              강사진 상세 프로필 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-32 bg-brand-surface-container" id="program">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Programs</h2>
          <p className="text-brand-text-variant">당신의 상태와 목표에 맞춘 전문적인 커리큘럼</p>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <div className="h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={prog.img} alt={prog.title} referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all"></div>
                <div className="absolute bottom-6 left-8 text-white text-[10px] font-black tracking-widest">{prog.tag}</div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-4">{prog.title}</h3>
                <ul className="space-y-2 text-brand-text-variant text-sm">
                  {prog.perks.map((p, j) => <li key={j}>• {p}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-brand-surface" id="pricing">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="text-xs font-bold text-brand-primary mb-6 block tracking-widest">MEMBERSHIP</span>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">당신의 가치를 높이는 투자</h2>
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-brand-error-container text-red-900 rounded-full mb-16 text-xs font-bold animate-pulse">
            <Clock className="w-4 h-4" /> 이번 달 한정 선착순 5명 마감 임박
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-12 rounded-2xl editorial-shadow border border-brand-surface-container flex flex-col">
              <h4 className="font-serif text-3xl mb-2">Introduction</h4>
              <p className="text-brand-text-variant text-sm mb-10">필라테스가 처음이신 분들을 위한 시작</p>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-4xl font-bold">₩550,000</span>
                <span className="text-brand-text-variant">/ 10회</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-primary" /> 체형 분석 무료 제공</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5 text-brand-primary" /> 1:1 개인 레슨 (50분)</li>
              </ul>
              <button className="w-full py-4 border border-brand-primary/20 rounded-full font-bold hover:bg-brand-surface-low transition-all">자세히 보기</button>
            </div>
            <div className="bg-brand-primary text-white p-12 rounded-2xl editorial-shadow transform md:scale-105 flex flex-col relative z-10 shadow-2xl shadow-brand-primary/30">
              <h4 className="font-serif text-3xl mb-2">Essential Change</h4>
              <p className="opacity-80 text-sm mb-10">가장 확실한 신체 변화를 위한 추천 코스</p>
              <div className="flex items-baseline gap-2 mb-10">
                <span className="text-4xl font-bold">₩1,500,000</span>
                <span className="opacity-80">/ 30회</span>
              </div>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3"><Check className="w-5 h-5" /> 식단 가이드 & 관리 시스템</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5" /> 샤워실 및 운동복 무료 이용</li>
                <li className="flex items-center gap-3"><Check className="w-5 h-5" /> 우선 예약권 혜택</li>
              </ul>
              <button className="w-full py-4 bg-white text-brand-primary rounded-full font-bold hover:bg-opacity-95 transition-all">이 패키지로 시작하기</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-32 bg-[#fdfaf5] relative overflow-hidden">
        {/* Soft studio background atmosphere with improved readability mask */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
          <img 
            src="https://postfiles.pstatic.net/MjAyNjA1MDNfMTI5/MDAxNzc3Nzc0NzQ0OTA1.oLROa384tWFcf_pDd8qmqpqq_xc6pBpeWYa3qe1mluUg.Ys4wxYrTd3CH8qQTgKahzejQXrjwyxt-A73GY8VP4g8g.PNG/ChatGPT_Image_2026%EB%85%84_5%EC%9B%94_3%EC%9D%BC_%EC%98%A4%EC%A0%84_11_18_36.png?type=w966" 
            alt="Studio Background" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#fdfaf5] via-[#fdfaf5]/60 to-transparent"></div>
        </div>
        
        {/* Leaf Overlay (approximated shadow feel) */}
        <div className="absolute top-0 left-0 w-1/3 h-full pointer-events-none opacity-[0.05]">
          <Leaf className="w-full h-full -rotate-12 translate-x-[-20%] translate-y-[-10%]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex flex-col items-center md:items-start"
            >
              <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-[#8ea07e] mb-8 uppercase">COREPULSE PILATES</span>
              
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-12 leading-snug text-[#1f2b16]">
                지금 시작하지 않으면,<br />
                몸은 <span className="relative">그대로입니다<span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#8ea07e]/30"></span></span>
              </h2>

              <div className="w-12 h-px bg-brand-surface-container mb-10"></div>

              <p className="text-[#55634a] text-base md:text-lg mb-12 leading-relaxed">
                지금 상담 신청 시<br />
                1:1 맞춤 프로그램을 무료로 안내드립니다.
              </p>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#4a5d3f] text-white px-10 py-5 rounded-2xl md:rounded-3xl font-bold flex items-center gap-3 hover:bg-[#3d4d34] transition-all shadow-xl shadow-[#4a5d3f]/20 group"
              >
                <Calendar className="w-5 h-5 opacity-80" />
                <span>무료 상담 예약하기</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Bottom Mini Icons */}
              <div className="grid grid-cols-3 gap-8 md:gap-16 mt-24">
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-11 h-11 flex items-center justify-center text-[#8ea07e] mb-3">
                    <UserRound className="w-7 h-7" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#55634a] whitespace-nowrap">1:1 맞춤 프로그램</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-11 h-11 flex items-center justify-center text-[#8ea07e] mb-3">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#55634a] whitespace-nowrap">체계적인 관리</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-11 h-11 flex items-center justify-center text-[#8ea07e] mb-3">
                    <Leaf className="w-7 h-7" />
                  </div>
                  <span className="text-xs md:text-sm font-semibold text-[#55634a] whitespace-nowrap">건강한 변화</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Review Section */}
      <section className="py-32 bg-brand-surface-low overflow-hidden" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-xs font-bold text-brand-primary mb-6 block tracking-widest uppercase">REAL REVIEWS</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">
              "나를 사랑하는 시간, CorePulse"
            </h2>
            <p className="text-brand-text-variant">실제 회원님들의 놀라운 변화와 생생한 후기</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Review */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-7 h-[600px] relative rounded-3xl overflow-hidden shadow-2xl group"
            >
              <img 
                src="https://postfiles.pstatic.net/MjAyNjA1MDJfMTYx/MDAxNzc3NjkwNDU0NDgw.QrAXoREjDAdICk6PKE2WoA8qDoxfhZ8ICHsu4cSiYeYg.QSh7ZCKZeR4iYs2Xaiwvv4ObHxExl7Hw1CqyJ8xM0-Ag.PNG/%EC%9E%90%EC%84%B802.png?type=w966" 
                alt="Member Result" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12 text-white">
                <div className="flex text-yellow-400 mb-6 space-x-1">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-xl md:text-2xl font-serif mb-8 leading-relaxed italic">
                  "만성적인 허리 통증 때문에 시작했는데, 5회 만에 통증이 사라졌어요. 이제는 바른 자세를 유지하는 게 자연스러워졌고 주변에서 몸 선이 예뻐졌다는 말을 정말 많이 들어요."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-lg font-bold">K</div>
                  <div>
                    <p className="font-bold text-lg">김OO 회원님</p>
                    <p className="text-white/60 text-sm">20회 수강 · 거북목 & 통증 케어</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Smaller Reviews Column */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-8">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-3xl editorial-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-brand-primary mb-6 space-x-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-brand-text-main text-lg mb-8 leading-relaxed">
                    "운동을 정말 싫어했는데 CorePulse에서는 시간이 가는 줄 몰라요. 선생님께서 컨디션에 맞춰 세심하게 조절해주시는 게 최고예요!"
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-primary-fixed flex items-center justify-center text-brand-primary font-bold">L</div>
                    <div>
                      <p className="font-bold text-brand-text-main text-sm">이OO 회원님</p>
                      <p className="text-brand-text-variant text-[10px] uppercase tracking-widest font-bold">Verified</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-brand-primary text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-white/40 mb-6 space-x-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 fill-current text-white" />)}
                  </div>
                  <p className="text-lg mb-8 leading-relaxed">
                    "출산 후 처진 뱃살과 골반 불균형이 가장 큰 고민이었는데, 1:1 레슨을 통해 몸매뿐만 아니라 자존감까지 완벽하게 회복했습니다."
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">P</div>
                    <div>
                      <p className="font-bold text-sm">박OO 회원님</p>
                      <p className="text-white/60 text-[10px] uppercase tracking-widest font-bold">30회 수강</p>
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
      <section id="contact" className="py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-8">지금 바로 상담하세요</h2>
            <p className="text-brand-text-variant font-bold mb-12">30초 입력으로 간편 상담<br />지금 신청 시 1:1 맞춤 프로그램을 안내드립니다</p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase">성함</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-brand-primary/20 focus:border-brand-primary py-2 transition-colors outline-none bg-transparent" 
                    placeholder="홍길동" 
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase">연락처</label>
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
                <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase">희망 프로그램</label>
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
                <label className="text-[10px] font-bold text-brand-text-variant mb-2 block tracking-widest uppercase">메모 (선택)</label>
                <textarea 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border-b border-brand-primary/20 focus:border-brand-primary py-2 transition-colors outline-none bg-transparent resize-none" 
                  placeholder="추가 궁금하신 점을 적어주세요." 
                  rows={2}
                />
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-primary text-white py-5 rounded-full font-bold hover:shadow-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : "무료 상담 신청하기"}
              </button>

              {submitStatus && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-center text-sm font-bold ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}
                >
                  {submitStatus.msg}
                </motion.div>
              )}
              <button type="button" className="w-full bg-[#FEE500] text-[#3c1e1e] py-5 rounded-full font-bold flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 fill-current" /> 카카오톡 실시간 상담
              </button>
            </form>
          </div>
          <div className="h-full min-h-[400px] bg-brand-surface-container rounded-2xl flex flex-col items-center justify-center p-12 text-center border border-brand-primary/5">
            <MapPin className="w-12 h-12 text-brand-primary mb-6" />
            <h4 className="font-serif text-2xl mb-4">CorePulse Studio 위치</h4>
            <p className="text-brand-text-variant">서울특별시 강남구 테헤란로 123<br />CorePulse 빌딩 4층</p>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-20 border-t border-brand-surface-container bg-brand-surface-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <img 
              src="https://postfiles.pstatic.net/MjAyNjA0MzBfMzEg/MDAxNzc3NTIwNDcwNzUw.8upP1Q4XPKKHLM72IShjK0qZt4AeRnD4D8NQsm6WXzog._40YsbcPc8Q_fK0ceZyNM582ZRm0V2uWOTGDm_pXr6Mg.PNG/ChatGPT_Image_2026%EB%85%84_4%EC%9B%94_30%EC%9D%BC_%EC%98%A4%ED%9B%84_12_08_50.png?type=w966" 
              alt="CorePulse Logo" 
              className="h-10 md:h-12 object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-lg font-bold text-brand-primary tracking-tight">CorePulse Pilates</span>
          </div>
          <div className="text-xs text-brand-text-variant">© 2024 CorePulse Pilates. Effortless Precision.</div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest text-brand-text-variant uppercase">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
