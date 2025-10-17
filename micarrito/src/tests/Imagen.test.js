import Imagen from '../componentes/atomos/Imagen';

describe('Imagen', () => {
  it('devuelve un objeto con src y alt', () => {
    const props = { src: '/water.png', alt: 'agua' };
    const el = Imagen(props);
    expect(el).toBeDefined();
    expect(el.props).toBeDefined();
    expect(el.props.src).toBe(props.src);
    expect(el.props.alt).toBe(props.alt);
  });
});
