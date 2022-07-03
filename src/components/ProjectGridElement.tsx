import Link from "next/link";
interface ProjectGridElementProps{
    children?: string;
    title?: string;
    href?: string;
    imgClass?: string;
}
function OpenCloseP(filter,Img) {
    const previewElementH1 = document.querySelector<HTMLElement>("."+Img+">"+"h1");
    const previewElementP = document.querySelector<HTMLElement>("."+Img+">"+"p");
    if(filter){
        previewElementH1.classList.add("open");
        previewElementP.classList.add("open");
    }else{
        previewElementH1.classList.remove("open");
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
                    <h1 className="previewElementP">{props.title}</h1>
                    <p className="previewElementP">{ props.children }</p>
                </div>
                <h1>{props.title}</h1>
            </a>
        </Link>
    )
}