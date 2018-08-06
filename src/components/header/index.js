import React from 'react';
import HeaderLogo from 'assets/img/logotype.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/" title="2UP">
          <HeaderLogo />
        </a>
      </div>
      <div className="header__title">
        <p>Стажировка</p>
      </div>
    </header>
  );
}
