import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectPreviewGrid from "../components/ProjectPreviewGrid";
import projectContent from "../assets/languages/pt/projects.json"
export default function Projects() {
  const project = projectContent.project;
  return (
    <div className="Projects">
      <Header />
      <div className="projectGrid">
        {project.map((item) => (
          <ProjectPreviewGrid href={item.href} imgClass={item.imgClass} title={item.title}>
            {item.about}
          </ProjectPreviewGrid>
        ))}
      </div>
      <Footer className="projectGridFooter"/>
    </div>
  )
}