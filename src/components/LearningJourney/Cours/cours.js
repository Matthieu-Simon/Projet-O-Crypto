import React from 'react';
import './coursStyles.scss';

function Cours() {
  return (
    <main className="main-cours">
      <header className="head-menu">
        <div>
          <button className="btn-menu" type="submit">Quitter le cours</button>
          <button className="btn-menu" type="submit">Menu</button>
        </div>
        <h3>Expert trader - niveau 3 (2022)</h3>
        <div>
          <span>ProgressBar 75 %</span>
        </div>
      </header>
      <div className="cours">
        <div className="title-cours">
          <h5>Comment investir au bon moment ?</h5>
        </div>
        <div>
          <p className="lesson">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dicta porro obcaecati saepe ratione eligendi reprehenderit,
            eius voluptatem sint expedita.
            Unde cum animi vero maxime amet cupiditate eligendi,
            assumenda aliquam ab odio libero sapiente voluptas perspiciatis minima,
            fugiat eaque atque in doloribus hic, porro nulla.
            Voluptate animi veniam maiores sit velit.
            Vel fugiat assumenda quod ullam! Quibusdam tenetur,
            amet dolore dolores error similique adipisci impedit,
            quos cumque facilis asperiores earum quasi ut reprehenderit libero!
            Magni alias eum, impedit fuga veritatis facilis?
            Vitae a aliquid dolores qui expedita veritatis quos,
            beatae illo numquam debitis,
            dolorum quaerat veniam. Eum cumque nisi non asperiores!
          </p>
        </div>
      </div>
      <footer className="footer-container">
        <div className="btn-footer">
          <button className="btn-cours" type="submit">Retour</button>
          <p className="numberPage">13/17</p>
          <button className="btn-cours" type="submit">Suivant</button>
        </div>
      </footer>
    </main>
  );
}

export default React.memo(Cours);
