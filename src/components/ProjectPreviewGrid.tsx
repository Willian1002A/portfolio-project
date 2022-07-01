import Link from "next/link";
interface ProjectPreviewGridProps{
    children?: string;
    title?: string;
    href?: string;
    imgClass?: string;
}
function OpenCloseP(filter,Img) {
    const previewGridP = document.querySelector<HTMLElement>("#"+Img);
    if(filter){
        previewGridP.classList.add("openP");
    }else{
        previewGridP.classList.remove("openP");
    }

}
export default function ProjectPreviewGrid(props: ProjectPreviewGridProps) {
    return (
        <Link href={`/projectPreview/${props.href}`}>
            <a
                className="projectPreviewGrid"
                onMouseEnter={() => OpenCloseP( true, props.imgClass)}
                onMouseLeave={() => OpenCloseP( false, props.imgClass)}
            >
                <div className={`previewGrid Img ${props.imgClass}`}>
                    <h1>{props.title}</h1>
                    <p id={props.imgClass} className="previewGridP">{ props.children }</p>
                </div>
            </a>
        </Link>
    )
}