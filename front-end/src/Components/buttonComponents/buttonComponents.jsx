const Button = (props) => {
  const { type, label, className } = props;
  return (
    <button type={type} className={`px-4 py-2 ${className}`}>
      {label}
    </button>
  );
};

export default Button;
