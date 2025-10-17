import React from 'react';
import { render } from '@testing-library/react';
import Imagen from '../componentes/atomos/Imagen';

describe('Imagen átomo', () => {
  it('muestra la imagen con alt', () => {
    const { getByAltText } = render(<Imagen src="/water.png" alt="agua" />);
    expect(getByAltText('agua')).toBeTruthy();
  });
});
