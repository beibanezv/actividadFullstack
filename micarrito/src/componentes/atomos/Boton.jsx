export default function Boton({ children, manejarClic, onClick, type = 'button', className = '', ...rest }) {
    const handle = manejarClic || onClick;
    return (
        <button type={type} className={className} onClick={handle} {...rest}>
            {children}
        </button>
    );
}