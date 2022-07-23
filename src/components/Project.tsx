import LinkA from "./LinkA";
import Link from "next/link";
interface ProjectProps{
    title: string;
    href: string;
    imgClass?: string;
}
export default function Project(props: ProjectProps) {
    return (
        <Link href={`/projectPreview/${props.href}`}>
            {/* <a id="preview" className="ProjectGridElement"> */}
            <a id="preview">
                <div className={`previewImg Img ${props.imgClass}`}></div>
                <h1>{props.title}</h1>
            </a>
            {/* <LinkA href={`/projectPreview/${props.href}`}>
                Saber mais-&gt;
            </LinkA> */}
        </Link>
        // <Link href={`/projectPreview/${props.href}`}>
        //     <a
        //         className="ProjectGridElement"
        //     >
        //         <div className={`previewElement Img ${props.imgClass}`}>
        //         </div>
        //         <h1>{props.title}</h1>
        //     </a>
        // </Link>
    )
}