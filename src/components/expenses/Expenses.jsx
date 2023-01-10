import { ExpenseItem } from "../expense-item/ExpenseItem"

export const Expenses = ({expenses}) => {
    return <ul style={{padding: "20px", border: "2px solid " , borderRadius: "13px" , backgroundColor: 'black'}}>
        {expenses.map((elem) => {
            return <ExpenseItem title={elem.title} price={elem.price} date={elem.date} />
        })}
    </ul>
};