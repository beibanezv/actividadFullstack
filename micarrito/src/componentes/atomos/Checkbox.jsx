export default function Checkbox({ label, id, checked, onChange, className, ...rest }) {
    return (
        <label htmlFor={id} className={className}>
            <input
                id={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                {...rest}
            />
            {label}
        </label>
    );
}