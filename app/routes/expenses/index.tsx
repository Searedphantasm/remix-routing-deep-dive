import {Outlet} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";
import styles from "~/styles/expenses.css"
import ExpensesList from "~/components/expenses/ExpensesList";

export const links: LinksFunction = () => {
    return [{
        rel:"stylesheet",
        href:styles
    }]
}


const DUMMY_DATA = [{
    id:'e1',
    title:"First Expense",
    amount:12.99,
    date:new Date().toISOString(),
},{
    id:'e2',
    title:"Second Expense",
    amount:1.99,
    date:new Date().toISOString(),
},
]

function ExpensesPage() {
    return (
        <>
            <Outlet />
            <main>
                <ExpensesList expenses={DUMMY_DATA} />
            </main>
        </>
    );
}

export default ExpensesPage;