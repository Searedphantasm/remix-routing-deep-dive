import {Outlet} from "@remix-run/react";
import {LinksFunction} from "@remix-run/node";
import styles from "~/styles/expenses.css"

export const links: LinksFunction = () => {
    return [{
        rel:"stylesheet",
        href:styles
    }]
}

function ExpensesPage() {
    return (
        <main>
            <p>
                Shared Element!
            </p>
            <Outlet />
        </main>
    );
}

export default ExpensesPage;