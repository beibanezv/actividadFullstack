import habits from '../data/habits';

describe('Datos de hábitos', () => {
  it('tiene al menos un hábito', () => {
    expect(Array.isArray(habits)).toBeTrue();
    expect(habits.length).toBeGreaterThan(0);
  });

  it('cada hábito tiene id, name y icon', () => {
    habits.forEach(h => {
      expect(h.id).toBeDefined();
      expect(h.name).toBeDefined();
      expect(h.icon).toBeDefined();
    });
  });
});
