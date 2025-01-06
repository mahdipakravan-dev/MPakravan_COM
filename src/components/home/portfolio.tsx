'use client';

import Image from 'next/image';
import { Button } from '../ui/button';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const PortfolioSection = ({t} : {t : Record<string , any>}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const cards = section.querySelectorAll('.project-card');

    // Animate the cards when the section comes into view
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.8, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%', // Animation starts when the section's top is 80% from the top of the viewport
          end: 'bottom 20%', // Ends when the section's bottom is 20% from the top
          toggleActions: 'play none none none', // Plays the animation only once
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="container min-h-[800px]" id="portfolio">
      <h2 className="!text-center text-[36px] font-bold">
        <span className="text-primary">{t["greenTitle"]} </span>{t["whiteTitle"]}
      </h2>
      <p className="!text-center hyphens-manual text-sm opacity-60 mt-6 leading-9 rtl:text-lg">
        {t["description"]}
      </p>

      <div className="flex justify-center gap-2 mt-12">
        <Button variant={'outlinePrimary'}>NextJS</Button>
        <Button variant={'outlinePrimary'}>React</Button>
        <Button variant={'outlinePrimary'}>PHP (WordPress)</Button>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="w-full min-h-[200px] relative project-card transform transition-transform"
            >
              <Image
                src={'/images/home/project.png'}
                objectFit="contain"
                fill
                alt="PROJECT"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
