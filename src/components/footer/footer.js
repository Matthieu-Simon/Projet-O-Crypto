import React from 'react';
import './footerStyles.scss';

function footer() {
  return (
    <footer className="App-footer">
      <nav className="Footer-nav">
        <a className="Footer-link" href="/copyright">© O'crypto</a>
        <a className="Footer-link" href="/about">A propos</a>
        <a className="Footer-link" href="/team">Notre équipe</a>
      </nav>
    </footer>
  );
}

export default React.memo(footer);
