"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface MenuItem {
    id: string;
    title: string;
    url: string;
}

const Menu: React.FC<{ menuData: MenuItem[] }> = ({ menuData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
    // const [loading, setLoading] = useState(true);

    // Fetch menu items from WordPress API
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleMenuItemClick = () => {
        setIsOpen(false); // Close menu when item is clicked
    };

    useEffect(() => {
        setMenuItems(menuData);
    }, [menuData]);

    return (
        <nav className="relative px-2 py-3 mb-3">
            <div>
                <button
                    className="cursor-pointer z-50 relative"
                    onClick={handleClick}
                    aria-label="Toggle menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="15"
                        viewBox="0 0 17 15"
                    >
                        <g
                            id="Group_1"
                            data-name="Group 1"
                            transform="translate(-41 -35)"
                        >
                            <rect
                                id="Rectangle_3"
                                data-name="Rectangle 3"
                                width="17"
                                height="3"
                                rx="1.5"
                                transform="translate(41 35)"
                                fill="#090909"
                            />
                            <rect
                                id="Rectangle_4"
                                data-name="Rectangle 4"
                                width="17"
                                height="3"
                                rx="1.5"
                                transform="translate(41 41)"
                                fill="#090909"
                            />
                            <rect
                                id="Rectangle_5"
                                data-name="Rectangle 5"
                                width="17"
                                height="3"
                                rx="1.5"
                                transform="translate(41 47)"
                                fill="#090909"
                            />
                        </g>
                    </svg>
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div
                        className="fixed inset-0 bg-[#09090990] z-40"
                        onClick={handleClick}
                    />
                )}

                {/* Menu Items */}
                <div
                    className={`md:w-[30vw] w-[70vw]
                    fixed top-0 right-0 bottom-0 bg-white shadow-lg z-50 
                    transition-all duration-300 ease-in-out
                    ${
                        isOpen
                            ? "opacity-100 visible transform translate-y-0"
                            : "opacity-0 invisible transform -translate-y-2"
                    }
                `}
                >
                    <button
                        className="absolute top-0 right-0 m-2 cursor-pointer"
                        onClick={handleClick}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    {/* <div className="p-4 text-center text-gray-500">
                        Loading menu...
                    </div> */}

                    {/* {error && (
                        <div className="p-4 text-center text-red-500">
                            Error loading menu: {error}
                        </div>
                    )}

                    {!loading && !error && menuItems.length === 0 && (
                        <div className="p-4 text-center text-gray-500">
                            No menu items found
                        </div>
                    )} */}

                    {menuItems.length > 0 && (
                        <ul className="py-2 mt-10">
                            {menuItems.map((item) => (
                                <li
                                    key={item.id}
                                    className="border-b border-gray-100 last:border-b-0"
                                >
                                    {/* Check if it's an external link */}
                                    {item.url &&
                                    item.url.startsWith("http") &&
                                    !item.url.includes(
                                        "your-wordpress-site.com"
                                    ) ? (
                                        <Link
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors duration-200"
                                            onClick={handleMenuItemClick}
                                        >
                                            {item.title}
                                        </Link>
                                    ) : null}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Menu;
