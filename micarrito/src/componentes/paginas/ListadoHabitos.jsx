import ListaHabitos from '../organismos/ListaHabitos';

export default function ListadoHabitos(props) {
  return (
    <div className="page-listado-habitos">
      <ListaHabitos {...props} />
    </div>
  );
}
