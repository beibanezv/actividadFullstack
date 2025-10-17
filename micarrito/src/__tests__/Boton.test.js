import Boton from '../componentes/atomos/Boton';

describe('Boton', () => {
  it('es una función que produce un elemento button', () => {
    const el = Boton({ children: 'Click' });
    expect(el).toBeDefined();
    expect(el.type).toBe('button');
  });
});
