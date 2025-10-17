import Imagen from '../atomos/Imagen';
import Boton from '../atomos/Boton';
import Checkbox from '../atomos/Checkbox';
import Titulo from '../atomos/Titulo';

export default function CardHabito({ habit, onToggleDay, onDelete, onToggleActive, onSelect }) {
  // habit: { id, name, category, icon, history: [ '2025-10-01', ...' ] }
  const today = new Date().toISOString().slice(0, 10);
  const doneToday = habit.history && habit.history.includes(today);

  return (
    <article className={`card-habit ${habit.active === false ? 'card-habit--inactive' : ''}`}>
      <Imagen src={habit.icon} alt={habit.name} className="card-habit__icon" />
      <div className="card-habit__body">
        <Titulo level={3}>{habit.name}</Titulo>
        <div className="card-habit__category">{habit.category}</div>
        <div className="card-habit__controls">
          <Checkbox
            id={`habit-${habit.id}`}
            checked={!!doneToday}
            onChange={() => onToggleDay(habit.id, today)}
            label={doneToday ? 'Cumplido hoy' : 'Marcar como cumplido'}
          />
          <div style={{display: 'flex', gap: 8}}>
            <Boton onClick={() => onSelect && onSelect(habit.id)} className="card-habit__select">Ver detalle</Boton>
            <Boton onClick={() => onToggleActive && onToggleActive(habit.id)} className="card-habit__delete">{habit.active === false ? 'Activar' : 'Desactivar'}</Boton>
            <Boton onClick={() => onDelete(habit.id)} className="card-habit__delete">Eliminar</Boton>
          </div>
        </div>
      </div>
    </article>
  );
}
