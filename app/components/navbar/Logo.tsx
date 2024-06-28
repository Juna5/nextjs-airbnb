"use client";

import Image from "next/image";

const Logo = () => {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:2721530779.
    return (
        <Image
            alt="logo"
            className="hidden md:block cursor-pointer"
            width={100}
            height={100}
            src="/images/logo.png"
        />
    );
};

export default Logo;
