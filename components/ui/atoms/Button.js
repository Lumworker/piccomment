export default function Button({
  children,
  onClick,
  type,
  setClassName = "btn",
}) {
  return (
    <button className={setClassName} type={type} onClick={onClick}>
      {children}
    </button>
  );
}
