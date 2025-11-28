export default function SearchMovie({ type, value, change, className }) {
  return (
    <input type={type} value={value} onChange={change} className={className} />
  );
}
