import HistorialHabito from '../organismos/HistorialHabito';

export default function DetalleHabito({ habit }) {
  if (!habit) return <div>Selecciona un hábito para ver el detalle.</div>;
  return (
    <div className="page-detalle-habito">
      <HistorialHabito habit={habit} />
    </div>
  );
}
