import Image from "next/image";

type LogoProps = {
  variant?: "light" | "dark";
  className?: string;
};

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const isLight = variant === "light";
  const textColor = isLight ? "#ffffff" : "#142566";
  const subColor = isLight ? "#fde685" : "#1f52ef";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Logo Long Nhật Minh"
        width={44}
        height={44}
        className="shrink-0 object-contain"
      />
      <div className="leading-tight">
        <p className="text-base font-extrabold tracking-tight" style={{ color: textColor }}>
          LONG NHẬT MINH
        </p>
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: subColor }}
        >
          TECHNICAL COMPANY LIMITED
        </p>
      </div>
    </div>
  );
}
