import React from 'react';
import Menu from '../Menu/menu';
import ChangeBar from '../ChangeBar/changeBar';
import './coursStyles.scss';

function Cours() {
  return (
    <main className="main-cours">
      <Menu />
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
      <ChangeBar />
    </main>
  );
}

export default React.memo(Cours);
