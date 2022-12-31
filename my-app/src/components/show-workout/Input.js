const Input = ({
  defaultValue,
  saveChanges,
  id,
  isRep = false,
  isWeight = false,
}) => {
  return (
    <input
      onBlur={(e) => saveChanges(e, defaultValue, id, isRep, isWeight)}
      className="input"
      defaultValue={defaultValue}
    />
  );
};

export default Input;
