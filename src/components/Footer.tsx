import { useRouter } from 'next/router';
import LinkA from "./LinkA";
import footerContentPt from "../assets/languages/pt/template/footer.json";
import footerContentEn from "../assets/languages/en/template/footer.json";
import footerContentEs from "../assets/languages/es/template/footer.json";
interface FooterProps{
    className?: string;
}
export default function Footer(props: FooterProps) {
    const { query } = useRouter();
    let hrefAtrib = "";
    if(query.idioma){
        hrefAtrib = "?idioma=" + query.idioma;
    }
    let footerContentTranslated = footerContentPt;
    switch(query.idioma){
      case "PT":
        footerContentTranslated = footerContentPt;
        break;
      case "EN":
        footerContentTranslated = footerContentEn;
        break;
      case "ES":
        footerContentTranslated = footerContentEs;
        break
    }
    return (
        <footer className={`footer ${props.className}`}>
            <div className="info">
                <div className="contactSiteMap">             
                    <div className="contact">
                        <h1>{footerContentTranslated.contact.title}</h1>
                        <p>{footerContentTranslated.contact.emailText}<LinkA href="mailto:wasdamico@gmail.com">wasdamico@gmail.com</LinkA></p>
                        <p>{footerContentTranslated.contact.foneText}<LinkA href="tel:+55-51-99898-6588">(51) 99898-6588</LinkA></p>
                    </div>
                    <div className="siteMap">
                        <h1>{footerContentTranslated.siteMap.title}</h1>
                        <LinkA href={`/${hrefAtrib}`}>{footerContentTranslated.siteMap.home}</LinkA>
                        <LinkA href={`/${hrefAtrib}#about`}>{footerContentTranslated.siteMap.about}</LinkA>
                        <LinkA href={`/projects${hrefAtrib}`}>{footerContentTranslated.siteMap.projects}</LinkA>
                    </div>
                </div>
            </div>
            <div className="basicFooter">
                <div className="footerContent">         
                    <p>{footerContentTranslated.basicFooter.p}</p>
                    <LinkA href={`/${footerContentTranslated.basicFooter.a.href}`}>{footerContentTranslated.basicFooter.a.description}</LinkA>
                </div>
            </div>
      </footer>
    )
}