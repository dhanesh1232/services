"use client";

import Image from "next/image";

const Logo = ({
  verison = false,
  hide = false,
  size = "md",
  className = "",
}) => {
  const classSize = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  const iconSize = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
    xl: "w-12 h-12",
    xxl: "w-16 h-16",
    xxxl: "w-20 h-20",
  };

  return (
    <div className={`flex items-center ${className}`}>
      {!hide && (
        <Image
          src="/logo.png"
          className={iconSize[size]}
          height={100}
          width={100}
          alt="ECODrIx Logo"
        />
      )}
    </div>
  );
};

export default Logo;
