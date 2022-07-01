import Link from "next/link";
interface LinkAProps{
    href: string;
    children?: any;
    className?: string;
}
export default function LinkA(props: LinkAProps) {
    return (
        <Link href={props.href}>
            <a className={props.className}>
                {props.children}
            </a>
        </Link>
    )
}