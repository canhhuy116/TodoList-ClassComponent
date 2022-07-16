import * as React from 'react';
import './styleButton.scss';

interface propsBtn {
  nameBtn: string;
}

function Button({ nameBtn }: propsBtn) {
  return (
    <button className={`${nameBtn}Btn primaryBtn`}>
      <span className="NameBtn">{nameBtn}</span>
    </button>
  );
}

export default Button;
