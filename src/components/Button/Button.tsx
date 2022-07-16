import * as React from 'react';
import './styleButton.scss';

interface propsBtn {
  nameBtn: string;
  onClickBtn: () => void;
}

function Button({ nameBtn, onClickBtn }: propsBtn) {
  return (
    <button className={`${nameBtn}Btn primaryBtn`} onClick={onClickBtn}>
      <span className="NameBtn">{nameBtn}</span>
    </button>
  );
}

export default Button;
