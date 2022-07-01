import Link from "next/link";
interface headerProps{
    className?: string;
}
export default function Header(props: headerProps) {
    return (
        <header className={`header ${props.className}`}>
            <Link href="/">
                <a className="logo">Willian D’Amico</a>
            </Link>
            <Link href="/">
                <a className="headerButton">Home</a>
            </Link>
            <Link href="/.#about">
                <a className="headerButton">Sobre</a>
            </Link>
            <Link href="/projects">
                <a className="headerButton">Projetos</a>
            </Link>
            <div className="languageButtons">
                <Link href="/">
                    <a className="headerLanguageButton">PT</a>
                </Link>
                <Link href="/">
                    <a className="headerLanguageButton">ES</a>
                </Link>
                <Link href="/">
                    <a className="headerLanguageButton">EN</a>
                </Link>
            </div>
        </header>
    )
}