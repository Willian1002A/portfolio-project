import { useRouter } from 'next/router';
import LinkA from "./LinkA";
import headerContentPt from "../assets/languages/pt/template/header.json";
import headerContentEn from "../assets/languages/en/template/header.json";
import headerContentEs from "../assets/languages/es/template/header.json";
interface headerProps{
    className?: string;
}
export default function Header(props: headerProps) {
    const { query } = useRouter();
    let hrefAtrib = "";
    if(query.idioma){
        hrefAtrib = "?idioma=" + query.idioma;
    }
    let headerContentTranslated = headerContentPt;
    switch(query.idioma){
      case "PT":
        headerContentTranslated = headerContentPt;
        break;
      case "EN":
        headerContentTranslated = headerContentEn;
        break;
      case "ES":
        headerContentTranslated = headerContentEs;
        break
      default:
        headerContentTranslated = headerContentTranslated;
    }
    return (
        <header className={`header ${props.className}`}>
            <div className={`contentHeader ${props.className}`}>
                <div className="Img buttonExpandMenu"/>
                <LinkA href={`/${headerContentTranslated[0]?.href + hrefAtrib}`} className="logo">
                    Willian D’Amico
                </LinkA>
                <div className="links">
                    <LinkA href={`/${headerContentTranslated[0]?.href + hrefAtrib}`} className="headerButton">
                        {headerContentTranslated[0]?.text}
                    </LinkA>
                    <LinkA href={`/${hrefAtrib + headerContentTranslated[1]?.href}`} className="headerButton">
                        {headerContentTranslated[1]?.text}
                    </LinkA>
                    <LinkA href={`/${headerContentTranslated[2]?.href + hrefAtrib}`} className="headerButton">
                        {headerContentTranslated[2]?.text}
                    </LinkA>
                </div>
                <div className="languageButtons">
                    <LinkA href={query.id ? query.id + headerContentTranslated[3]?.href : headerContentTranslated[3]?.href } className="headerLanguageButton">
                        {headerContentTranslated[3]?.text}
                    </LinkA>
                    <LinkA href={query.id ? query.id + headerContentTranslated[4]?.href : headerContentTranslated[4]?.href } className="headerLanguageButton">
                        {headerContentTranslated[4]?.text}
                    </LinkA>
                    <LinkA href={query.id ? query.id + headerContentTranslated[5]?.href : headerContentTranslated[5]?.href } className="headerLanguageButton">
                        {headerContentTranslated[5]?.text}
                    </LinkA>
                </div>
            </div>
        </header>
    )
}