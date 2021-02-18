import React from 'react';

const { Pixo } = window;

export const PixoImage = ({ src, onChange }) => {
  const pixo = new Pixo.Bridge({
    type: 'modal',
    apikey: 'x36eibah088i0', // put your API key here!
    onSave: img => onChange(img.toDataURL()),
  });
  return <img src={src} alt='Custom Meme' onClick={() => pixo.edit(src)} />;
}