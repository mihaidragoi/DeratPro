"use client";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

import { Phone, Mail } from "lucide-react";
import { siteInfo } from "@/data/content";
import { useLanguage } from "@/lib/language";

const fieldClasses =
    "w-full rounded-md border border-slate-300 px-4 py-3 text-base text-slate-700 placeholder:text-slate-400 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200";

export default function Contact() {
    const { t } = useLanguage();

    const [values, setValues] = useState({ name: "", phone: "", message: "" });

    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const [isSuccess, setIsSuccess] = useState(false);

    const validate = (values: Record<string, string>) => {
        const newErrors: Record<string, boolean> = {};
        if (values.name.trim().length < 2) newErrors.name = true;
        const phone = values.phone.replace(/\s/g, "");
        if (!/^(\+40|0)7\d{8}$/.test(phone)) newErrors.phone = true;
        if (values.message.trim().length < 10) newErrors.message = true;
        return newErrors;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        if (errors[name])
            setErrors((prevErrors) => ({ ...prevErrors, [name]: false }));
        if (isSuccess)
            setIsSuccess(false);
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setValues({ name: "", phone: "", message: "" });
            setIsSuccess(true);
        }
    }

    return (
        <section id="contact" className="bg-white py-10 md:py-20 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl dark:text-white"> {t.contact.title} </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

                    <form className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-surface p-6 shadow-sm dark:border-slate-700 dark:bg-slate-800" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="sr-only"> {t.contact.labels.name} </label>
                        <input type="text" id="name" name="name" placeholder={t.contact.placeholders.name} className={fieldClasses} value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
                        {errors.name && <p className="self-start text-sm text-red-600 dark:text-red-400">{t.contact.errors.name}</p>}
                        <label htmlFor="phone" className="sr-only"> {t.contact.labels.phone} </label>
                        <input type="tel" id="phone" name="phone" placeholder={t.contact.placeholders.phone} className={fieldClasses} value={values.phone} onChange={handleChange} aria-invalid={Boolean(errors.phone)} />
                        {errors.phone && <p className="self-start text-sm text-red-600 dark:text-red-400">{t.contact.errors.phone}</p>}
                        <label htmlFor="message" className="sr-only"> {t.contact.labels.message} </label>
                        <textarea id="message" name="message" placeholder={t.contact.placeholders.message} className={fieldClasses} value={values.message} onChange={handleChange} rows={4} aria-invalid={Boolean(errors.message)} />
                        {errors.message && <p className="self-start text-sm text-red-600 dark:text-red-400">{t.contact.errors.message}</p>}
                        <button type="submit" className="mt-4 h-12 w-full rounded-md bg-primary px-4 text-base font-semibold text-white transition-colors duration-300 hover:bg-primary/90"> {t.contact.submit} </button>
                        {isSuccess && <p className="mt-2 text-sm text-primary dark:text-emerald-300" role="status"> {t.contact.success} </p>}
                    </form>

                    <div className="flex flex-col justify-center rounded-2xl bg-secondary p-8 text-white md:p-10 dark:bg-slate-950">
                        <h3 className="text-2xl font-bold"> {t.contact.urgentTitle} </h3>
                        <p className="mt-2 text-slate-300"> {t.contact.urgentText} </p>
                        <div className="mt-8 flex flex-col gap-5">
                            <a href={`tel:${siteInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-lg font-semibold hover:text-accent transition-colors" >
                                <Phone className="h-5 w-5" aria-hidden="true" />
                                {siteInfo.phone}
                            </a>
                            <a href={`mailto:${siteInfo.email}`} className="flex items-center gap-3 text-lg font-semibold hover:text-accent transition-colors">
                                <Mail className="h-5 w-5" aria-hidden="true" />
                                {siteInfo.email}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}