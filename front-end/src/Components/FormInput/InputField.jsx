import "../../Page/Homepage/Homepage.css";
const InputField = (props) => {
  const { inputType, classStyle, data, setData } = props;
  const actualInputType = inputType === "number" ? "number" : "text";
  return (
    <>
      {inputType === "textarea" ? (
        <textarea
          type="text"
          className={classStyle}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
        />
      ) : (
        <input
          type={actualInputType}
          placeholder={data}
          onChange={(e) => setData(e.target.value)}
          className={classStyle}
        />
      )}
    </>
  );
};

export default InputField;
