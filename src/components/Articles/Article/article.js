import React from 'react';
import './articleStyles.scss';

function Article() {
  return (
    <div className="App-article">
      <h1>ARTICLE</h1>
    </div>
  );
}

export default React.memo(Article);
