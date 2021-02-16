import React, { useState } from 'react';

import { PixoImage } from '../../image';

const Edit = () => {
  const [src, onChange] = useState('https://via.placeholder.com/350x150');
  return (
    <>
      <h1>Click image to edit</h1>
      <PixoImage src={src} onChange={onChange} />
    </>
  );
};

export default Edit;
