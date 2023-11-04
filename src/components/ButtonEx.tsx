interface Props {
  children: string;
  onClick: () => void;
  color?: string;
}

const ButtonEx = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonEx;
