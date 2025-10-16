export default function Titulo({ children, level = 2, className = '' }) {
    const Tag = `h${level}`;
    return <Tag className={className}>{children}</Tag>;
}
