import React, { useRef } from 'react';

const Formulario = () => {
  const inputRef = useRef(null);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClearInput}>Limpar</button>
    </div>
  );
};

export default Formulario;
