interface ProjectProps{
    title: string;
    href: string;
    imgClass?: string;
}
export default function Project(props: ProjectProps) {
    return (
        <div className="project">
            <div className="projectPreview">
                <div className={`preview Img ${props.imgClass}`}></div>
            </div>
            <h1>{props.title}</h1>
            <a href={props.href}>Saber mais-&gt;</a>
        </div>
    )
}