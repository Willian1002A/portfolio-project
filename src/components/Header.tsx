import LinkA from "./LinkA";
import headerContent from "../assets/languages/pt/template/header.json";
interface headerProps{
    className?: string;
}
export default function Header(props: headerProps) {
    return (
        <header className={`header ${props.className}`}>
            <LinkA href="/" className="logo">
                Willian D’Amico
            </LinkA>
            <LinkA href={`/${headerContent[0]?.href}`} className="headerButton">
                {headerContent[0]?.text}
            </LinkA>
            <LinkA href={`/${headerContent[1]?.href}`} className="headerButton">
                {headerContent[1]?.text}
            </LinkA>
            <LinkA href={`/${headerContent[2]?.href}`} className="headerButton">
                {headerContent[2]?.text}
            </LinkA>
            <div className="languageButtons">
                <LinkA href={`/${headerContent[3]?.href}`} className="headerLanguageButton">
                    {headerContent[3]?.text}
                </LinkA>
                <LinkA href={`/${headerContent[4]?.href}`} className="headerLanguageButton">
                    {headerContent[4]?.text}
                </LinkA>
                <LinkA href={`/${headerContent[5]?.href}`} className="headerLanguageButton">
                    {headerContent[5]?.text}
                </LinkA>
            </div>
        </header>
    )
}