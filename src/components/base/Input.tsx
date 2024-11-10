type inputProps = {
  type: string;
  placeholder: string;
};

const Input = (inputProps: inputProps) => {
  return <input type={inputProps.type} placeholder={inputProps.placeholder} />;
};

export default Input;
