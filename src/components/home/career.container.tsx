'use client'

import CareerSection from './career.section'
import useLang from '@/hooks/useLang'

const CareerContainer = () => {
  const lang = useLang()

  const experiences = [
    {
      title: lang === 'en' ? 'Senior Frontend Developer' : 'توسعه‌دهنده ارشد فرانت‌اند',
      company: 'Digikala',
      location: lang === 'en' ? 'Tehran, Iran' : 'تهران، ایران',
      date: lang === 'en' ? '2022 - Present' : '۱۴۰۱ - اکنون',
      description: lang === 'en' 
        ? 'Leading frontend development for Iran\'s largest e-commerce platform. Implementing modern web technologies, optimizing performance, and mentoring junior developers. Working with React, TypeScript, and Next.js to build scalable and maintainable applications.'
        : 'رهبری توسعه فرانت‌اند در بزرگترین پلتفرم تجارت الکترونیک ایران. پیاده‌سازی تکنولوژی‌های مدرن وب، بهینه‌سازی عملکرد و راهنمایی توسعه‌دهندگان تازه‌کار. کار با React، TypeScript و Next.js برای ساخت برنامه‌های مقیاس‌پذیر و قابل نگهداری.',
      link: 'https://digikala.com'
    },
    {
      title: lang === 'en' ? 'Frontend Developer' : 'توسعه‌دهنده فرانت‌اند',
      company: 'Snapp',
      location: lang === 'en' ? 'Tehran, Iran' : 'تهران، ایران',
      date: lang === 'en' ? '2020 - 2022' : '۱۳۹۹ - ۱۴۰۱',
      description: lang === 'en'
        ? 'Developed and maintained web applications for Iran\'s leading ride-hailing service. Focused on performance optimization, user experience, and implementing new features. Collaborated with cross-functional teams to deliver high-quality products.'
        : 'توسعه و نگهداری برنامه‌های وب برای سرویس پیشرو درخواست خودرو در ایران. تمرکز بر بهینه‌سازی عملکرد، تجربه کاربری و پیاده‌سازی ویژگی‌های جدید. همکاری با تیم‌های چند‌تخصصی برای ارائه محصولات با کیفیت بالا.',
      link: 'https://snapp.ir'
    },
    {
      title: lang === 'en' ? 'Web Developer' : 'توسعه‌دهنده وب',
      company: lang === 'en' ? 'Freelance' : 'فریلنسر',
      location: lang === 'en' ? 'Remote' : 'دورکاری',
      date: lang === 'en' ? '2018 - 2020' : '۱۳۹۷ - ۱۳۹۹',
      description: lang === 'en'
        ? 'Worked on various web development projects for clients worldwide. Specialized in responsive design, modern JavaScript frameworks, and creating intuitive user interfaces. Delivered projects ranging from small business websites to complex web applications.'
        : 'کار روی پروژه‌های مختلف توسعه وب برای مشتریان در سراسر جهان. تخصص در طراحی واکنش‌گرا، فریم‌ورک‌های مدرن جاوااسکریپت و ایجاد رابط‌های کاربری کاربرپسند. تحویل پروژه‌ها از وب‌سایت‌های تجاری کوچک تا برنامه‌های وب پیچیده.'
    }
  ]

  return <CareerSection experiences={experiences} />
}

export default CareerContainer 