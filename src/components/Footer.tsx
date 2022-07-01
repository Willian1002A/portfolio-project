import Link from "next/link";

interface FooterProps{
    className?: string;
}
export default function Footer(props: FooterProps) {
    return (
        <footer className={`footer ${props.className}`}>
            <div className="info">
            <div className="contact">
                <h1>Contato</h1>
                <p>Email: <Link href="mailto:wasdamico@gmail.com"><a>wasdamico@gmail.com</a></Link></p>
                <p>Fone/WhatsApp: <Link href="tel:+55-51-99898-6588"><a>(51) 99898-6588</a></Link></p>
            </div>
            <div className="siteMap">
                <h1>Site Map</h1>
                <Link href="/"><a>Home</a></Link>
                <Link href="/#about"><a>Sobre</a></Link>
                <Link href="/projects"><a>Projetos</a></Link>
            </div>
            </div>
            <div className="basicFooter">
            <p>© 2022 Willian A. S. D’Amico</p>
            <Link href="/"><a >Website Source Code</a></Link>
            
            </div>
      </footer>
    )
}