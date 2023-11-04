interface Props {
  children: string;
  onClick: () => void;
}
const Alert = ({ children, onClick }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClick}
      ></button>
    </div>
  );
};

export default Alert;
