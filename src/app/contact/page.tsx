"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import {
    COUNTRY_CODE_RULES,
    type ContactFieldErrors,
    type ContactFormData,
    validateContactForm,
} from "@/lib/contactValidation";

export default function ContactPage() {
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
    const [feedback, setFeedback] = useState<{
        type: "error" | "success";
        text: string;
    } | null>(null);

    useEffect(() => {
        if (!feedback) {
            return;
        }

        const timer = window.setTimeout(
            () => setFeedback(null),
            feedback.type === "success" ? 10000 : 4000
        );

        return () => window.clearTimeout(timer);
    }, [feedback]);

    useEffect(() => {
        if (!Object.keys(fieldErrors).length) {
            return;
        }

        const timer = window.setTimeout(() => setFieldErrors({}), 4000);
        return () => window.clearTimeout(timer);
    }, [fieldErrors]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });

        setFieldErrors((prev) => {
            if (!prev[name as keyof ContactFormData]) {
                return prev;
            }
            return { ...prev, [name]: undefined };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationErrors = validateContactForm(form);
        if (Object.keys(validationErrors).length > 0) {
            setFieldErrors(validationErrors);
            setFeedback({
                type: "error",
                text: "Please fix the highlighted fields and try again.",
            });
            return;
        }

        setLoading(true);
        setFeedback(null);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                setFieldErrors(data.fieldErrors ?? {});
                setFeedback({
                    type: "error",
                    text: data.error ?? "Failed to send message. Please try again.",
                });
                return;
            }

            setFeedback({
                type: "success",
                text: "Thanks, I will get you back shortly.",
            });
            setForm({
                name: "",
                email: "",
                countryCode: "+91",
                phone: "",
                message: "",
            });
            setFieldErrors({});
        } catch (error) {
            console.error(error);
            setFeedback({
                type: "error",
                text: "Something went wrong. Please try again in a moment.",
            });
        } finally {
            setLoading(false);
        }
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
                    <AnimatePresence>
                        {feedback && (
                            <motion.div
                                initial={{ opacity: 0, y: -8 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -8 }}
                                transition={{ duration: 0.25, ease: "easeOut" }}
                                className={`rounded-lg px-4 py-3 text-sm ${
                                    feedback.type === "success"
                                        ? "border border-emerald-400/40 bg-emerald-500/10 text-emerald-300"
                                        : "border border-red-400/40 bg-red-500/10 text-red-300"
                                }`}
                            >
                                {feedback.text}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm text-gray-400">
                            Name
                        </label>

                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                        />
                        <AnimatePresence>
                            {fieldErrors.name && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-2 text-sm text-red-300"
                                >
                                    {fieldErrors.name}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm text-gray-400">
                            Email
                        </label>

                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                        />
                        <AnimatePresence>
                            {fieldErrors.email && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-2 text-sm text-red-300"
                                >
                                    {fieldErrors.email}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm text-gray-400">Phone</label>
                        <div className="grid grid-cols-[130px_1fr] gap-3">
                            <select
                                name="countryCode"
                                value={form.countryCode}
                                onChange={(e) => {
                                    setForm({ ...form, countryCode: e.target.value });
                                    setFieldErrors((prev) => ({ ...prev, countryCode: undefined, phone: undefined }));
                                }}
                                className="bg-[#0F0F13] border border-zinc-700 rounded-lg px-3 py-3 focus:outline-none focus:border-purple-500"
                            >
                                {COUNTRY_CODE_RULES.map((item) => (
                                    <option key={item.code} value={item.code}>
                                        {item.label}
                                    </option>
                                ))}
                            </select>

                            <input
                                type="tel"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone number"
                                className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                            />
                        </div>
                        <AnimatePresence>
                            {(fieldErrors.countryCode || fieldErrors.phone) && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-2 text-sm text-red-300"
                                >
                                    {fieldErrors.countryCode ?? fieldErrors.phone}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    <div>
                        <label htmlFor="message" className="block mb-2 text-sm text-gray-400">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={form.message}
                            onChange={handleChange}
                            className="w-full bg-[#0F0F13] border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                        />
                        <AnimatePresence>
                            {fieldErrors.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: -4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -4 }}
                                    transition={{ duration: 0.2 }}
                                    className="mt-2 text-sm text-red-300"
                                >
                                    {fieldErrors.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
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
        </main>
    );
}
