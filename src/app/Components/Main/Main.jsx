import React from 'react';
import { Section } from './components/Section';
import './Main.sass';

export const Main = () => {
  return (
    <main className="main">
      <Section color={'transparent'} type={'gallery'}/>

      <Section color={'aqua'} />

      <Section color={'transparent'} />

      <Section color={'pink'} />

      <Section color={'transparent'} />

      <Section color={'chocolate'}/>
    </main>
  );
}
