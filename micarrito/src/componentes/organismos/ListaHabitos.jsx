import { useState } from 'react';
import CardHabito from '../moleculas/CardHabito';
import FormularioHabito from '../moleculas/FormularioHabito';

export default function ListaHabitos({ habits = [], onToggleDay, onDelete, onCreate, onToggleActive, onSelect }) {
  return (
    <section className="lista-habitos">
      <h2>Mis hábitos</h2>
      <FormularioHabito onCreate={onCreate} />
      <div className="lista-habitos__grid">
        {habits.map((h) => (
          <CardHabito
            key={h.id}
            habit={h}
            onToggleDay={onToggleDay}
            onDelete={onDelete}
            onToggleActive={onToggleActive}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
