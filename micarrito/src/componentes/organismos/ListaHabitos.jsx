import { useState } from 'react';
import CardHabito from '../moleculas/CardHabito';
import FormularioHabito from '../moleculas/FormularioHabito';
import habitsData from '../../data/habits';

export default function ListaHabitos() {
  const [habits, setHabits] = useState(habitsData);

  function handleToggleDay(id, day) {
    setHabits((prev) =>
      prev.map((h) => {
        if (h.id !== id) return h;
        const has = h.history && h.history.includes(day);
        return {
          ...h,
          history: has ? h.history.filter((d) => d !== day) : [...(h.history || []), day],
        };
      })
    );
  }

  function handleDelete(id) {
    setHabits((prev) => prev.filter((h) => h.id !== id));
  }

  function handleCreate(newHabit) {
    setHabits((prev) => [newHabit, ...prev]);
  }

  return (
    <section className="lista-habitos">
      <h2>Mis hábitos</h2>
      <FormularioHabito onCreate={handleCreate} />
      <div className="lista-habitos__grid">
        {habits.map((h) => (
          <CardHabito key={h.id} habit={h} onToggleDay={handleToggleDay} onDelete={handleDelete} />
        ))}
      </div>
    </section>
  );
}
