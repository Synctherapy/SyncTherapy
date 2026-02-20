"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string;
    children?: React.ReactNode;
}) => {
    return (
        <div onMouseEnter={() => setActive(item)} className="relative ">
            <p className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white transition-opacity duration-300">
                {item}
            </p>
            {active !== null && (
                <div
                    className={`transition-all duration-300 ${active === item ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
                        } pointer-events-none`}
                >
                    {active === item && (
                        <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 pointer-events-auto">
                            <div className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl transition-all duration-300">
                                <div className="w-max h-full p-4 transition-all duration-300">
                                    {children}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return (
        <nav
            onMouseLeave={() => setActive(null)} // resets the state
            className="relative rounded-full border border-white/20 glass-panel flex justify-center space-x-4 px-8 py-4 "
        >
            {children}
        </nav>
    );
};

export const ProductItem = ({
    title,
    description,
    href,
}: {
    title: string;
    description: string;
    href: string;
}) => {
    return (
        <Link href={href} className="flex space-x-2">
            <div>
                <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
                    {title}
                </h4>
                <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
                    {description}
                </p>
            </div>
        </Link>
    );
};

export const HoveredLink = ({ children, ...rest }: any) => {
    return (
        <Link
            {...rest}
            className="text-neutral-700 dark:text-neutral-200 hover:text-black "
        >
            {children}
        </Link>
    );
};
