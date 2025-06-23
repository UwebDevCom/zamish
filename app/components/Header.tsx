import React from "react";
import Menu from "./Menu";
import Image from "next/image";

const Header = async () => {
    const menu = await fetch(`${process.env.CUSTOM_BASE_URL}/api/menu`);
    const menuData = await menu.json();

    return (
        <header className="flex justify-between w-full max-w-screen-xl h-16 text-center p-4 mx-auto">
            {menuData && <Menu menuData={menuData} />}
            <div className="flex items-center justify-center flex-wrap">
                <Image
                    className="ml-3 relative top-1"
                    src="/images/logo-icon.svg"
                    alt="Logo"
                    width={23}
                    height={23}
                />
                <h1 className="text-xl font-bold text-[2.1rem]">זַמִישׁ</h1>
            </div>
            <div className=""></div>
        </header>
    );
};

export default Header;
