import './App.css';
import React, { useState, useMemo } from 'react';
import Layout from './componentes/plantillas/Layout';
import PanelResumen from './componentes/plantillas/PanelResumen';
import ListadoHabitos from './componentes/paginas/ListadoHabitos';
import DetalleHabito from './componentes/paginas/DetalleHabito';
import habitsData from './data/habits';

function App() {
  // initialize habits ensuring `active` exists
  const [habits, setHabits] = useState(() => habitsData.map((h) => ({ active: true, ...h })));
  const [selectedId, setSelectedId] = useState(null);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

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
    if (selectedId === id) setSelectedId(null);
  }

  function handleToggleActive(id) {
    setHabits((prev) => prev.map((h) => (h.id === id ? { ...h, active: !h.active } : h)));
  }

  function handleCreate(newHabit) {
    setHabits((prev) => [{ active: true, ...newHabit }, ...prev]);
  }

  const selected = habits.find((h) => h.id === selectedId) || null;

  const totalToday = useMemo(() => habits.filter((h) => h.active && (h.history || []).includes(today)).length, [habits, today]);
  const totalWeek = useMemo(() => {
    const todayDate = new Date();
    const last7 = new Date(todayDate);
    last7.setDate(todayDate.getDate() - 7);
    return habits.filter((h) => h.active && (h.history || []).some((d) => new Date(d) >= last7)).length;
  }, [habits]);

  const side = (
    <div>
      <PanelResumen totalToday={totalToday} totalWeek={totalWeek} />
      <DetalleHabito habit={selected} />
    </div>
  );

  return (
    <div className="App">
      <Layout side={side}>
        <ListadoHabitos
          habits={habits}
          onToggleDay={handleToggleDay}
          onDelete={handleDelete}
          onCreate={handleCreate}
          onToggleActive={handleToggleActive}
          onSelect={setSelectedId}
        />
      </Layout>
    </div>
  );
}

export default App;
