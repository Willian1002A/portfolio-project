import LinkA from "./LinkA";
import footerContent from "../assets/languages/pt/template/footer.json";
interface FooterProps{
    className?: string;
}
export default function Footer(props: FooterProps) {
    return (
        <footer className={`footer ${props.className}`}>
            <div className="info">
            <div className="contact">
                <h1>{footerContent.contact.title}</h1>
                <p>{footerContent.contact.emailText}<LinkA href="mailto:wasdamico@gmail.com">wasdamico@gmail.com</LinkA></p>
                <p>{footerContent.contact.foneText}<LinkA href="tel:+55-51-99898-6588">(51) 99898-6588</LinkA></p>
            </div>
            <div className="siteMap">
                <h1>{footerContent.siteMap.title}</h1>
                <LinkA href="/">{footerContent.siteMap.home}</LinkA>
                <LinkA href="/#about">{footerContent.siteMap.about}</LinkA>
                <LinkA href="/projects">{footerContent.siteMap.projects}</LinkA>
            </div>
            </div>
            <div className="basicFooter">
                <p>{footerContent.basicFooter.p}</p>
                <LinkA href={`/${footerContent.basicFooter.a.href}`}>{footerContent.basicFooter.a.description}</LinkA>
            </div>
      </footer>
    )
}