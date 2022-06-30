import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ProjectPreviewGrid from "../components/ProjectPreviewGrid";
export default function Projects() {
  return (
    <div className="Projects">
      <Header />
      <div className="projectGrid">
        <ProjectPreviewGrid href="projectPreview" imgClass="azzteck" title="azzteck">
        Sobre asddssssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="calculadoraReact" title="calculadoraReact">
          Sobre 2
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="calculadoraVue" title="calculadoraVue">
          Sobre 3
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="crudHomeReact" title="crudHomeReact">
          Sobre 4
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="deliciasMarinhas" title="deliciasMarinhas">
          Sobre 5
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="geradorQRCode" title="geradorQRCode">
          Sobre 6
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="jogoDaVelha" title="jogoDaVelha">
          sobre 7
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="montyHall" title="montyHall">
          Sobre 8
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="mostUsedWordsElectron" title="mostUsedWordsElectron">
          Sobre 9
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="relogioAnalogico" title="relogioAnalogico">
          Sobre 10
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="projectPreview" imgClass="flappyBird" title="flappyBird">
          Sobre 11
        </ProjectPreviewGrid>
      </div>
      <Footer className="projectGridFooter"/>
    </div>
  )
}