"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
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
          type="email"
          placeholder="email@example.com"
          className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
        />
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          Dịch vụ quan tâm
        </label>
        <select className="w-full rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500">
          <option>Thiết kế & Thi công Trạm biến áp</option>
          <option>Thiết kế & Thi công Điện nhà xưởng</option>
          <option>Khác</option>
        </select>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-semibold text-navy-800">
          Nội dung yêu cầu
        </label>
        <textarea
          rows={4}
          placeholder="Mô tả ngắn gọn về công trình, quy mô, vị trí..."
          className="w-full resize-none rounded-xl border border-navy-200 px-4 py-3 text-sm outline-none transition-colors focus:border-navy-500"
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Gửi yêu cầu tư vấn
        <Send size={16} />
      </button>
    </form>
  );
}
