"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Contact",
//   description:
//     "Get in touch with Jayasurya. Open to frontend developer opportunities and collaborations.",
// };

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setSuccess(false);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                setSuccess(true);
                setForm({ name: "", email: "", message: "" });
            }
        } catch (error) {
            console.error(error);
        }

        setLoading(false);
    };

    return (
        <main className="mx-auto max-w-3xl px-6 py-20">

            <Reveal className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Contact</h1>

                <p className="text-gray-400">
                    Feel free to reach out if you want to collaborate or discuss an opportunity.
                </p>
            </Reveal>

            <Reveal delay={0.08}>
                <form
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-[#16161c] p-8 rounded-xl border border-zinc-800"
                >

                    <div>
                        <label className="block mb-2 text-sm text-gray-400">
                            Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            required
                            onChange={handleChange}
                            className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-400">
                            Email
                        </label>

                        <input
                            type="email"
                            name="email"
                            required
                            onChange={handleChange}
                            className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-400">
                            Message
                        </label>

                        <textarea
                            name="message"
                            rows={5}
                            required
                            onChange={handleChange}
                            className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-500 transition disabled:opacity-50"
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </button>

                </form>
            </Reveal>

            {success && (
                <p className="text-green-400 mt-4">
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                </p>
            )}

        </main>
    );
}
