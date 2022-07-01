import Header from "../components/Header";
import Footer from "../components/Footer";
import Project from "../components/Project";
import ProjectPreviewGrid from "../components/ProjectPreviewGrid";
export default function Projects() {
  return (
    <div className="Projects">
      <Header />
      <div className="projectGrid">
        <ProjectPreviewGrid href="azzteck" imgClass="azzteck" title="azzteck">
        Sobre asddssssssssssssssssssssssssssdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd.
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="calculadoraReact" imgClass="calculadoraReact" title="calculadoraReact">
          Sobre 2
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="calculadoraVue" imgClass="calculadoraVue" title="calculadoraVue">
          Sobre 3
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="crudHomeReact" imgClass="crudHomeReact" title="crudHomeReact">
          Sobre 4
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="deliciasMarinhas" imgClass="deliciasMarinhas" title="deliciasMarinhas">
          Sobre 5
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="geradorQRCode" imgClass="geradorQRCode" title="geradorQRCode">
          Sobre 6
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="jogoDaVelha" imgClass="jogoDaVelha" title="jogoDaVelha">
          sobre 7
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="montyHall" imgClass="montyHall" title="montyHall">
          Sobre 8
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="mostUsedWordsElectron" imgClass="mostUsedWordsElectron" title="mostUsedWordsElectron">
          Sobre 9
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="relogioAnalogico" imgClass="relogioAnalogico" title="relogioAnalogico">
          Sobre 10
        </ProjectPreviewGrid>
        <ProjectPreviewGrid href="flappyBird" imgClass="flappyBird" title="flappyBird">
          Sobre 11
        </ProjectPreviewGrid>
      </div>
      <Footer className="projectGridFooter"/>
    </div>
  )
}