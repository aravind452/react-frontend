import "./Medicines.css";
import Card from "./Card";

function Medicines(props) {
  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs {props.amount}</div>
        </div>
    </Card>
  );
}

export default Medicines;
