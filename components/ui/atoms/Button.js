export default function Button({ children, onClick, type, ClassName = "btn" }) {
  return (
    <button className={ClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
