const Button = (props) => {
  const { onclick, type, label, className } = props;
  return (
    <button onclick={onclick} type={type} className={`px-4 py-2 ${className}`}>
      {label}
    </button>
  );
};

export default Button;
