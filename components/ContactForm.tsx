"use client";

import { useState } from "react";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name:    (form.elements.namedItem("name")    as HTMLInputElement).value,
      phone:   (form.elements.namedItem("phone")   as HTMLInputElement).value,
      email:   (form.elements.namedItem("email")   as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("server_error");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Gửi thất bại, vui lòng thử lại hoặc gọi trực tiếp 0938 978 138.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-navy-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-gradient text-navy-900">
          <CheckCircle2 size={28} />
        </span>
        <h3 className="mt-5 text-xl font-bold text-navy-900">
          Cảm ơn bạn đã liên hệ!
        </h3>
        <p className="mt-2 text-sm text-navy-500">
          Đội ngũ Long Nhật Minh sẽ phản hồi trong thời gian sớm nhất.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-800">
            Họ và tên
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Nguyễn Văn A"
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-semibold text-navy-800">
            Số điện thoại
          </label>
          <input
            required
            name="phone"
            type="tel"
            placeholder="09xx xxx xxx"
            className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="email@example.com"
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          Dịch vụ quan tâm
        </label>
        <select
          name="service"
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
        >
          <option>Sản xuất Kết cấu thép & Phụ kiện Lưới điện</option>
          <option>Phân phối Vật tư & Thiết bị Đường dây 220kV</option>
          <option>Cung cấp & lắp đặt hệ thống điện mặt trời</option>
          <option>Nhập khẩu & Phân phối trực tiếp</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          Nội dung yêu cầu
        </label>
        <textarea
          name="message"
          rows={4}
          placeholder="Mô tả ngắn gọn về công trình, quy mô, vị trí..."
          className="w-full resize-none rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Đang gửi...
          </>
        ) : (
          <>
            Gửi yêu cầu tư vấn
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  );
}
