import Image from 'next/image'
import logo from "../../../assets/img/Outros/logo.jpg"
interface LogoProps {
    className?: string;
}
export default function Logo(props: LogoProps) {
    return(
        <div className={`${props.className} flex justify-center items-center`} >
            <div className="w-1/3 relative block">
                <Image
                    src={logo}
                    alt="Logo"
                    sizes="45vw"
                    layout="responsive"
                    // layout="fill"
                    width={1024}
                    height={348}
                    // width="2048vh"
                    className="opacity-70 "
                />
            </div>
        </div>
    )
}