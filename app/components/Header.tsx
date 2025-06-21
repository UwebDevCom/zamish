import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import { getWordpressMainMenu } from "@/app/api/menu/route";

const Header = async () => {
    const menu = await getWordpressMainMenu();
    console.log({ menu });

    return (
        <header className="flex justify-between w-full max-w-screen-xl h-16 text-center p-4 mx-auto">
            <Menu menuData={menu} />
            <div className="flex items-center justify-center flex-wrap">
                <Image
                    className="ml-3 relative top-1"
                    src="/images/logo-icon.svg"
                    alt="Logo"
                    width={23}
                    height={23}
                />
                <h1 className="text-xl font-bold text-[2.1rem]">זַמִישׁ</h1>
                {/* <p className="text-sm flex-[100%]">כל מה שצריך לדעת על ניהול</p> */}
            </div>
            <div className=""></div>
        </header>
    );
};

export default Header;
