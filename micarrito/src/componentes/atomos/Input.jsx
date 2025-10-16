export default function Input({ id, value, onChange, placeholder = '', type = 'text', className = '', ...rest }) {
    return (
        <input
            id={id}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            className={className}
            {...rest}
        />
    );
}
