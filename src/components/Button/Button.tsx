import * as React from 'react';
import './styleButton.scss';

interface propsBtn {
  nameBtn: string;
  isEmptyInput: boolean;
  onClickBtn: () => void;
}

function Button({ nameBtn, isEmptyInput, onClickBtn }: propsBtn) {
  return (
    <button
      className={`${nameBtn}Btn primaryBtn`}
      onClick={onClickBtn}
      disabled={isEmptyInput}
    >
      <span className="NameBtn">{nameBtn}</span>
    </button>
  );
}

export default Button;
