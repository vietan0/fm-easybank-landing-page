import { ReactNode } from "react";

type Props = {
  className?: string;
  children: string | ReactNode;
};

export default function CTAButton({ className = "", children }: Props) {
  return (
    <button
      className={`${className} h-12 whitespace-nowrap rounded-full bg-gradient-to-r from-lime-green to-bright-cyan px-10 py-2 text-[15px] font-bold text-white`}
    >
      {children}
    </button>
  );
}
