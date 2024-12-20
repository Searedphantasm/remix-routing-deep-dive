import styles from "~/styles/auth.css"
import AuthForm from "~/components/auth/AuthForm"
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => {
    return [{
        rel:"stylesheet",
        href: styles
    }]
}

function AuthPage() {
    return (
        <AuthForm />
    );
}

export default AuthPage;