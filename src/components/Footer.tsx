interface FooterProps{
    className?: string;
}
export default function Footer(props: FooterProps) {
    return (
        <footer className={`footer ${props.className}`}>
            <div className="info">
            <div className="contact">
                <h1>Contato</h1>
                <p>Email: <a href="mailto:wasdamico@gmail.com">wasdamico@gmail.com</a></p>
                <p>Fone/WhatsApp: <a href="tel:+55-51-99898-6588">(51) 99898-6588</a></p>
            </div>
            <div className="siteMap">
                <h1>Site Map</h1>
                <a href="/">Home</a>
                <a href="/#about">Sobre</a>
                <a href="/projects">Projetos</a>
            </div>
            </div>
            <div className="basicFooter">
            <p>© 2022 Willian A. S. D’Amico</p>
            <a href="">Website Source Code</a>
            </div>
      </footer>
    )
}