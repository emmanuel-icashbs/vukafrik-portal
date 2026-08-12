const FormMessageZone = ({
  successMessage,
  errorMessage,
}: {
  successMessage: string;
  errorMessage: string;
}) => {
  return (
    <div className="col-sm-12">
      {successMessage && (
        <div className="successMessage mb-25">{successMessage}</div>
      )}
      {errorMessage && <div className="errorMessage mb-25">{errorMessage}</div>}
    </div>
  );
};

export default FormMessageZone;
