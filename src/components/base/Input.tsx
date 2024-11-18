type inputProps = {
  type: string;
  placeholder: string;
};

const Input = (inputProps: inputProps) => {
  return (
    <input
      type={inputProps.type}
      placeholder={inputProps.placeholder}
      className="p-10 bg-grey border-none radius-10 w-200px"
    />
  );
};

export default Input;
