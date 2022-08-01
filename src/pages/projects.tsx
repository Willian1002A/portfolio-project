import { useRouter } from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectGridElement from "../components/ProjectGridElement";
import projectContentPt from "../assets/languages/pt/projects.json";
import projectContentEn from "../assets/languages/en/projects.json";
import projectContentEs from "../assets/languages/es/projects.json";
export default function Projects() {
  const { query } = useRouter();
  let hrefAtrib = "";
  if(query.idioma){
      hrefAtrib = "?idioma=" + query.idioma;
  }
  let projectContentTranslated = projectContentPt;
  switch(query.idioma){
    case "PT":
      projectContentTranslated = projectContentPt;
      break;
    case "EN":
      projectContentTranslated = projectContentEn;
      break;
    case "ES":
      projectContentTranslated = projectContentEs;
      break;
  }
  const project = projectContentTranslated.project;
  return (
    <div className="Background">
      <Header />
      <section className="projectGrid">
        {project.map((item,index) => (
          <ProjectGridElement key={index} href={item.href + hrefAtrib} imgClass={item.imgClass} title={item.title} />
        ))}
      </section>
      <Footer className="footerAdjust"/>
    </div>
  )
}