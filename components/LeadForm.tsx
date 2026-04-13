"use client";

import { useState } from "react";

export default function LeadForm({ type }: { type: "buyer" | "seller" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://baget.ai/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyId: "e2afed31-4cb8-40b9-a6f9-886ec81a4305",
          email,
          name: `EncoreGear ${type.charAt(0).toUpperCase() + type.slice(1)} Waitlist`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <div className="w-full">
      {status === "success" ? (
        <div className="border-2 border-brand-black p-4 text-center">
          <p className="font-bebas text-xl">WELCOME TO THE LIST.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-0 border-2 border-brand-black">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL"
            required
            className="p-4 outline-none border-b-2 border-brand-black bg-brand-white font-bebas text-lg placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-brand-black text-brand-white p-4 font-bebas text-xl hover:bg-brand-red active:bg-brand-black"
          >
            {status === "loading" ? "PROCESSING..." : type === "buyer" ? "GET EARLY ACCESS" : "START SELLING"}
          </button>
          {status === "error" && (
            <p className="text-brand-red text-xs p-2 text-center uppercase font-bold">Try again later</p>
          )}
        </form>
      )}
    </div>
  );
}