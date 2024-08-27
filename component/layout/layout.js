import Link from "next/link";

function Layout({children}) {
    return (
        <>
            <header className="header">
                <h2 className="text-white">Project CRM</h2>
                <Link className="text-white" href="/add-customer">Add Customer</Link>
            </header>
            <div className="main">
                {children}
            </div>
            <footer className="footer">
                <a href="https://zahramotazediyan.ir" target="_blank" rel="noreferrer">Project CRM</a> Next.js | Project
                CRM &copy;
            </footer>
        </>
    )
}

export default Layout;