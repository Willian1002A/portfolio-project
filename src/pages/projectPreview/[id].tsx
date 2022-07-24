import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import projectPreviewContentPt from "../../assets/languages/pt/projectPreview.json";
import projectPreviewContentEn from "../../assets/languages/en/projectPreview.json";
import projectPreviewContentEs from "../../assets/languages/es/projectPreview.json";
import LinkA from "../../components/LinkA";
export default function Projects() {
    const { query } = useRouter();
    let hrefAtrib = "";
    if(query.idioma){
        hrefAtrib = "?idioma=" + query.idioma;
    }
    let prjectPreviewContentTranslated = projectPreviewContentPt;
    switch(query.idioma){
      case "PT":
        prjectPreviewContentTranslated = projectPreviewContentPt;
        break;
      case "EN":
        prjectPreviewContentTranslated = projectPreviewContentEn;
        break;
      case "ES":
        prjectPreviewContentTranslated = projectPreviewContentEs;
        break
    }
    const projectPreviewObject = prjectPreviewContentTranslated[`${query.id}`];
    const imgClass = projectPreviewObject?.imgClass;
    const text = projectPreviewObject?.text;
    function goBack(){
        window.history.back()
    }
    return (
        <div className="Background">
            <Header className="headerAdjust"/>
            <div id="ProjectPreview">
                <div className="iconRegion">
                    <div className="Icon backIcon" onClick={() => goBack()}></div>
                </div>
                <div id="ProjectPreviewContent">
                    <div className={`preview Img ${imgClass}`} ></div>
                    <div className="descriptionRegion">
                        <div className="description">
                            <div className="content">
                                <h1>{text?.title}</h1>
                                <p>{text?.description}</p>
                                <p>{text?.usedTechnologies}</p>
                                <p>{text?.sourceCode.string}<LinkA href={`${text?.sourceCode.href}`} targetOnNewTab={true} >{text?.sourceCode.a}</LinkA></p>
                                <div className="regionButton">
                                    <LinkA href={`${text?.button.href}`} targetOnNewTab={true}>
                                        {text?.button.string}
                                    </LinkA>
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