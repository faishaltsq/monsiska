export default function Footer() {
    return (
        <div className="bg-sky-200 font-bold p-1 sm:p-1 shadow-lg  left-0 w-full z-10">
        <nav className="container mx-auto flex justify-between items-center">
            <p className="text-center text-sky-900">
              © {new Date().getFullYear()} MONSISKAMI
            </p>
        </nav>
        </div>
    )

}