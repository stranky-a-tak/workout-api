const FormGroup = ({ input }) => {
  return (
    <div className="mb-5">
      <p className="label">{input}</p>
      <input className="input text-white" />
    </div>
  );
};

export default FormGroup;
