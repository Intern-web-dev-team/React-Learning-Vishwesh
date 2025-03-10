function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 bg-stone-500 rounded text-white hover:bg-stone-400"
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
