import React from "react"

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500">© 2024 Soirée App. Tous droits réservés.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <a className="text-xs hover:underline underline-offset-4" href="/">
                    Conditions d'utilisation
                </a>
                <a className="text-xs hover:underline underline-offset-4" href="/">
                    Politique de confidentialité
                </a>
            </nav>
        </footer>
    )
}
