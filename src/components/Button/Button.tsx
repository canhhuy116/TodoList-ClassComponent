import * as React from 'react';
import './styleButton.scss';

interface propsBtn {
  nameBtn: string;
  isEmptyInput: boolean;
  onClickBtn: () => void;
  className: string;
}

function Button({ nameBtn, isEmptyInput, onClickBtn, className }: propsBtn) {
  return (
    <button
      className={`${className} primaryBtn`}
      onClick={onClickBtn}
      disabled={isEmptyInput}
    >
      <span className="NameBtn">{nameBtn}</span>
    </button>
  );
}

export default Button;
