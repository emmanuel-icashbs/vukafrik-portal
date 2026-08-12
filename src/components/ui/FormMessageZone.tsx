const FormMessageZone = ({
  successMessage,
  errorMessage,
  isOpen,
}: {
  successMessage: string | null;
  errorMessage: string | null;
  isOpen: boolean;
}) => {
  return (
    <>
      {isOpen && (
        <div className="my-toast-wrapper">
          {successMessage && (
            <div className="successMessage">
              <span>{successMessage}</span>
              <span className="messageCloseBtn"></span>
            </div>
          )}
          {errorMessage && (
            <div className="errorMessage">
              <span>{errorMessage}</span>
              <span className="messageCloseBtn"></span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FormMessageZone;
