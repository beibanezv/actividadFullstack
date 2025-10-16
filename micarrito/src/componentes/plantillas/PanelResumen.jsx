export default function PanelResumen({ totalToday = 0, totalWeek = 0 }) {
  return (
    <div className="panel-resumen">
      <div>Hoy: {totalToday}</div>
      <div>Esta semana: {totalWeek}</div>
    </div>
  );
}
