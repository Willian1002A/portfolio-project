import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import projectPreviewContent from "../../assets/languages/pt/projectPreview.json";
import Link from "next/link";
import LinkA from "../../components/LinkA";
export default function Projects() {
    const { query } = useRouter();
    const projectPreviewObject = projectPreviewContent[`${query.id}`];
    const imgClass = projectPreviewObject?.imgClass;
    const text = projectPreviewObject?.text;
    return (
        <div className="Projects">
            <Header className="headerProjectPreview"/>
            <div className="ProjectPreview">
                <div className="regionIcon">
                    <LinkA href="/projects" className="Icon backIcon"/>
                </div>
                <div className="InternalPreview">
                    <div className={`Img ${imgClass}`} ></div>
                    <div className="description">
                        <div className="internalDescription">
                            <div className="internalInternalDescription">
                                <h1>{text?.title}</h1>
                                <p>{text?.description}</p>
                                <p>{text?.usedTechnologies}</p>
                                <p>{text?.sourceCode.string}<LinkA href={`/${text?.sourceCode.href}`}>{text?.sourceCode.a}</LinkA></p>
                                <div className="regionButton">
                                    <LinkA href={`/${text?.button.href}`}>
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