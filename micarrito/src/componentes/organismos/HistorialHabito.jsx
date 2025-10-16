import Titulo from '../atomos/Titulo';

export default function HistorialHabito({ habit }) {
  if (!habit) return null;
  const history = habit.history || [];

  // simple weekly stat: count of entries in the last 7 days
  const today = new Date();
  const last7 = new Date(today);
  last7.setDate(today.getDate() - 7);
  const weeklyCount = history.filter((d) => new Date(d) >= last7).length;

  return (
    <aside className="historial-habit">
      <Titulo level={3}>Historial — {habit.name}</Titulo>
      <div>Cumplidos esta semana: {weeklyCount}</div>
      <ul>
        {history.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </aside>
  );
}
