import React from 'react';
import './App.sass';
import { Main } from './Components/Main';

export function App() {
  const styles = {
  backgroundImage: "url(/images/5.jpg)",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed'
  }

  return (
    <div className="app" style={styles}>
      <Main />
    </div>
  );
}