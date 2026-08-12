const SubmitButton = ({
  title,
  isSubmitting,
}: {
  title: string;
  isSubmitting: boolean;
}) => {
  return (
    <div className="col-lg-12">
      <button type="submit" className="td-btn w-100" disabled={isSubmitting}>
        {isSubmitting ? "Envoi encours..." : title}
      </button>
    </div>
  );
};

export default SubmitButton;
