import Link from "next/link";
import Layout from "../components/layout";

export default function Login() {
    return (
        <Layout>
            <div>
                <section id="registerForm">
                    <h1>Registracija</h1>
                    <form action="submit">
                        <div>
                            <label htmlFor="fname">Ime</label>
                            <input type="text" name="fname" id="fname" />
                        </div>
                        <div>
                            <label htmlFor="lname">Priimek</label>
                            <input type="text" name="lname" id="lname" />
                        </div>
                        <div>
                            <label htmlFor="email">e-poštni naslov</label>
                            <input type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor="email2">ponovi e-poštni naslov</label>
                            <input type="email" name="email2" id="email2" />
                        </div>
                        <div>
                            <label htmlFor="password">geslo</label>
                            <input type="password" name="password" id="password" />
                        </div>
                        <div>
                            <label htmlFor="password2">ponovi geslo</label>
                            <input type="password" name="password2" id="password2" />
                        </div>
                        <input type="submit" value="Prijava" id="submit" />
                    </form>
                </section>
                <h1><Link href="/">Nazaj domov</Link></h1>
            </div>
        </Layout>
        
    )
}