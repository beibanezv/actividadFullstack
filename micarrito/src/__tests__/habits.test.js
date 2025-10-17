import habits from '../data/habits';

describe('habits data', () => {
  it('exporta un array con al menos 1 hábito', () => {
    expect(Array.isArray(habits)).toBeTrue();
    expect(habits.length).toBeGreaterThan(0);
  });

  it('cada hábito tiene id, name y category', () => {
    const h = habits[0];
    expect(h.id).toBeDefined();
    expect(h.name).toBeDefined();
    expect(h.category).toBeDefined();
  });
});
