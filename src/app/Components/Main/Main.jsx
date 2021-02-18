import React, { useEffect } from 'react';
import { Section } from './components/Section';
import './Main.sass';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Main = () => {

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    [...sections].forEach(section => {
      gsap.from(section, {
        duration: 1,
        alpha: 0,
        y: 300,
        scrollTrigger: {
          trigger: section,
        }
      })
    })
  }, [])

  return (
    <main className="main">

      <Section type={'transparent'} />

      <Section type={'gallery'} />

      <Section type={'transparent'} />

      <Section type={'info'} />

      <Section type={'transparent'} />

      <Section type={'about'} />
    </main>
  );
}
