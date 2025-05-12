import { ROUTES } from "@/constants/routes";
import Link from "next/link";
import Image from "next/image";
import imgBosch from "@/app/assets/bosch.png";
import imgLine from "@/app/assets/line.jpeg";

interface MenuProps {
    op1: string;
    op2: string;
}

const styleMenu = {
    link: "text-white text-[25px] hover:text-black transition easy-in-out",
    bosch: "font-extrabold text-red-600 text-[25px]",
    title: "text-[25px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 via-purple-900 via-cyan-400 to-green-700"
}

export const Menu: React.FC<MenuProps> = ({op1, op2}) => {
    return(
        <nav className="flex flex-col fixed w-full z-10 font-robFont text-large justify-center align-center">
          <div className="bg-white p-3 pl-6 pr-6 justify-between w-full font-robFont text-large flex flex-row align-center">
            <div className="flex flex-row items-center justify-center">
                <Image src={imgBosch} alt="símbolo bosch" className="w-7 h-7 rounded-t-3xl m-2"/>
                <Link href={ROUTES.home} className={styleMenu.bosch}>{op1}</Link>
            </div>
            <Link href={ROUTES.home} className={styleMenu.title}>{op2}</Link>
          </div>
          <Image src={imgLine} alt="line bosch" className="w-full h-3"/>
        </nav>
    )
}