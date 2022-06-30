import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
export default function Projects() {
  return (
    <div className="Projects">
        <Header className="headerProjectPreview"/>
        <div className="ProjectPreview">
            <div className="regionIcon">
                <a href="/projects" className="Icon backIcon"></a>
            </div>
            <div className="InternalPreview">
                <div className="Img"></div>
                <div className="description">
                    <div className="internalDescription">
                        <div className="internalInternalDescription">
                            <h1>Calculadora (React)</h1>
                            <p>asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadassadsadsdasdasasadddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd</p>
                            <p>Tecnologias utilizadas: Javascript, html, css, React</p>
                            <p>Codigo fonte: Acesse aqui!</p>
                            <div className="regionButton">
                                <button>Visitar Projeto</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer className=""/>
    </div>
  )
}