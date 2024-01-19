export function Button({ onClick, btnColor, children }) {
  return (
    <button style={btnColor} onClick={onClick}>
      {children}
    </button>
  );
}
