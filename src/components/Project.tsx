import LinkA from "./LinkA";
interface ProjectProps{
    title: string;
    href: string;
    imgClass?: string;
}
export default function Project(props: ProjectProps) {
    return (
        <div className="project">
            <div id="preview">
                <div className={`previewImg Img ${props.imgClass}`}></div>
            </div>
            <h1>{props.title}</h1>
            <LinkA href={`/projectPreview/${props.href}`}>
                Saber mais-&gt;
            </LinkA>
        </div>
    )
}