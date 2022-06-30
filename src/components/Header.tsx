interface headerProps{
    className?: string;
}
export default function Header(props: headerProps) {
    return (
        <header className={`header ${props.className}`}>
            <a href="/." className="logo">Willian D’Amico</a>
            <a href="/." className="headerButton">Home</a>
            <a href="/.#about" className="headerButton">Sobre</a>
            <a href="/projects" className="headerButton">Projetos</a>
            <div className="languageButtons">
                <a href="" className="headerLanguageButton">PT</a>
                <a href="" className="headerLanguageButton">ES</a>
                <a href="" className="headerLanguageButton">EN</a>
            </div>
        </header>
    )
}