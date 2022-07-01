import { useRouter } from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectGridElement from "../components/ProjectGridElement";
import projectContent from "../assets/languages/pt/projects.json"
export default function Projects() {
  const { query } = useRouter();
  let hrefAtrib = "";
  if(query.idioma){
      hrefAtrib = "?idioma=" + query.idioma;
  }
  const project = projectContent.project;
  return (
    <div className="Background">
      <Header />
      <div className="projectGrid">
        {project.map((item,index) => (
          <ProjectGridElement key={index} href={item.href + hrefAtrib} imgClass={item.imgClass} title={item.title}>
            {item.about}
          </ProjectGridElement>
        ))}
      </div>
      <Footer className="footerAdjust"/>
    </div>
  )
}