import React from "react";

const ButtonCom = ({link, text, addStyle}) => {
  return (
    <a href={link}>
      <button
        className={`text-white rounded-[22px] border-2 flex gap-2 duration-150 transition hover:border-green-700 hover:text-green-700  font-medium text-lg  px-5 py-2.5 text-center ${addStyle}`}
      >
        {text}
      </button>
    </a>
  );
};

export default ButtonCom;