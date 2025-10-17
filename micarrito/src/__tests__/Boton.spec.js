import React from 'react';
import { render } from '@testing-library/react';
import Boton from '../componentes/atomos/Boton';

describe('Boton átomo', () => {
  it('renderiza con texto', () => {
    const { getByText } = render(<Boton>Click</Boton>);
    expect(getByText('Click')).toBeTruthy();
  });
});
