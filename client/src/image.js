import React from 'react';

const { Pixo } = window;

export const PixoImage = ({ src, onChange }) => {
  const pixo = new Pixo.Bridge({
    type: 'modal',
    apikey: '36eibah088i0', // put your API key here!
    onSave: img => onChange(img.toDataURL()),
    onClose: () => window.location.href = './home',
    theme: 'light',
    propertypanel: {
      collapsible: true,
      collapsed: true
    },
  });
  return <img src={src} alt="another dank meme" onClick={() => pixo.edit(src)} />;
}

