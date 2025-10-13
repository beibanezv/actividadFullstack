export default function Boton({children, manejarClic}) {
    return(
        <button onClick={manejarClic}>
            {children}
        </button>
    )
}