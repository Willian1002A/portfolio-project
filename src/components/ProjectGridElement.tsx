import Link from "next/link";
interface ProjectGridElementProps{
    children?: string;
    title?: string;
    href?: string;
    imgClass?: string;
}
function OpenCloseP(filter,Img) {
    const previewElementP = document.querySelector<HTMLElement>("#"+Img);
    if(filter){
        previewElementP.classList.add("open");
    }else{
        previewElementP.classList.remove("open");
    }
}
export default function ProjectGridElement(props: ProjectGridElementProps) {
    return (
        <Link href={`/projectPreview/${props.href}`}>
            <a
                className="ProjectGridElement"
                onMouseEnter={() => OpenCloseP( true, props.imgClass)}
                onMouseLeave={() => OpenCloseP( false, props.imgClass)}
            >
                <div className={`previewElement Img ${props.imgClass}`}>
                    <h1>{props.title}</h1>
                    <p id={props.imgClass} className="previewElementP">{ props.children }</p>
                </div>
            </a>
        </Link>
    )
}