import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface SubmenuProps {
    op1: string;
    op2: string;
    op3: string; 
    op4: string; 
}

const styleSubmenu = {
    link: "text-black text-[16px] hover:text-gray-500 black transition easy-in-out p-1.5"
}

export const Submenu: React.FC<SubmenuProps> = ({op1, op2, op3, op4}) => {
    return(
        <div className="bg-gray-100 h-full w-[250px] fixed font-robFont text-large border-gray-300 border-[0.5px]">
            <h3 className="mt-24 text-[18px] text-black bg-gray-200 p-2 pl-4">Menu principal</h3>
            <div className="flex flex-col p-6">
                <Link href={ROUTES.home} className={styleSubmenu.link}>{op1}</Link>
                <Link href={ROUTES.users} className={styleSubmenu.link}>{op2}</Link>
                <Link href={ROUTES.tools} className={styleSubmenu.link}>{op3}</Link>
                <Link href={ROUTES.historic} className={styleSubmenu.link}>{op4}</Link>
            </div>
        </div>
    )
}