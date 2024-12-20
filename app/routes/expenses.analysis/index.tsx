
import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart"

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

function ExpensesAnalysisPage() {
    return (
        <main>
            <Chart expenses={DUMMY_DATA} />
            <ExpenseStatistics expenses={DUMMY_DATA} />
        </main>
    );
}

export default ExpensesAnalysisPage;