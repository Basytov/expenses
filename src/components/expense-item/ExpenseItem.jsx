import "./ExpenseItem.css";

export const ExpenseItem = ({date,title,price}) => {
    return (
      <div className="item">
        <div className="item1">
          <p>{date.toString()}</p>
        </div>
        <div className="item2">
          <p>{title}</p>
          <p>{price}</p>
        </div>
      </div>
    );
};

