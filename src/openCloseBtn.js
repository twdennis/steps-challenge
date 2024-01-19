export function OpenCloseBtn({ isOpen, onClick }) {
  return (
    <button className="close" onClick={onClick}>
      {isOpen ? "✖️" : "➕"}
    </button>
  );
}
