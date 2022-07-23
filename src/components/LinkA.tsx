import Link from "next/link";
interface LinkAProps{
    href: string;
    children?: any;
    className?: string;
    targetOnNewTab?: boolean;
}
export default function LinkA(props: LinkAProps) {
    return (
        <Link href={props.href} >
            <a className={props.className} target={props.targetOnNewTab ? "_blank" : ""}>
                {props.children}
            </a>
        </Link>
    )
}