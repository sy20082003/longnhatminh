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
      {/* Thay thế toàn bộ SVG cũ bằng thẻ img chứa logo của bạn */}
      <img 
        src="/images/logo.png" // Đường dẫn lấy từ thư mục public/images/logo.png
        alt="Logo Long Nhật Minh"
        className="w-11 h-11 object-contain shrink-0" // w-11 và h-11 tương đương 44px giống kích thước SVG cũ
      />

      {/* Giữ nguyên phần chữ bên phải của bạn */}
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
