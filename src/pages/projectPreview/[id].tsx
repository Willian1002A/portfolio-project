import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import infoProjectPreview from "../../assets/languages/pt/projectPreview.json";
import Link from "next/link";
export default function Projects() {
    const { query } = useRouter();
    const projectPreviewObject = infoProjectPreview[`${query.id}`];
    const imgClass = projectPreviewObject?.imgClass;
    const text = projectPreviewObject?.text;
    return (
        <div className="Projects">
            <Header className="headerProjectPreview"/>
            <div className="ProjectPreview">
                <div className="regionIcon">
                    <Link href="/projects">
                        <a className="Icon backIcon"></a>
                    </Link>
                </div>
                <div className="InternalPreview">
                    <div className={`Img ${imgClass}`} ></div>
                    <div className="description">
                        <div className="internalDescription">
                            <div className="internalInternalDescription">
                                <h1>{text?.title}</h1>
                                <p>{text?.description}</p>
                                <p>{text?.usedTechnologies}</p>
                                <p>{text?.sourceCode.string}<Link href={`/${text?.sourceCode.href}`}><a>{text?.sourceCode.a}</a></Link></p>
                                <div className="regionButton">
                                    <Link href={`/${text?.button.href}` }>
                                        <a>{text?.button.string}</a>
                                    </Link>
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