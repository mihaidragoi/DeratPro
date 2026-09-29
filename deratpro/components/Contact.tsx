"use client";
import { useState, type ChangeEvent, type SubmitEvent } from "react";

import { Phone, Mail} from "lucide-react";
import { siteInfo } from "@/data/content";

export default function Contact() {


    const [values, setValues] = useState({name: "", phone: "", message: ""});

    const [errors, setErrors] = useState<Record<string, string>>({});

    const [isSuccess, setIsSuccess] = useState(false);

    const validate = (values: Record<string, string>) => {
        const newErrors: Record<string, string> = {};
        if (!values.name || values.name.length < 2) newErrors.name = "Numele este obligatoriu și trebuie să aibă cel puțin 2 caractere.";
        if (!values.phone || !/^\d{10}$/.test(values.phone)) newErrors.phone = "Numărul de telefon este obligatoriu și trebuie să aibă 10 cifre.";
        if (!values.message || values.message.length < 10) newErrors.message = "Mesajul este obligatoriu si trebuie să aibă cel puțin 10 caractere.";
        return newErrors;
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({ ...prevValues, [name]: value }));
        if(errors[name]) 
            setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
        if(isSuccess)
            setIsSuccess(false);
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newErrors = validate(values);
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted:", values);
            setValues({name: "", phone: "", message: ""});
            setIsSuccess(true);
        }
    }

    return (
        <section id="contact" className="bg-white py-10 md:py-20">
            <div className="mx-auto max-w-7xl px-4 md:px-8">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-secondary md:text-4xl"> Cere o ofertă </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                   
                    <form className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-surface p-6 shadow-sm transition-shadow duration-300 hover:shadow-lg" onSubmit={handleSubmit}>
                        <label htmlFor="name" className="sr-only"> Nume </label>  
                        <input type="text" id="name" name="name" placeholder="Numele tău" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-primary focus:ring focus:ring-primary/20" value={values.name} onChange={handleChange}/>
                        {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                        <label htmlFor="phone" className="sr-only"> Telefon </label>
                        <input type="tel" id="phone" name="phone" placeholder="Numărul tău de telefon" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-primary focus:ring focus:ring-primary/20" value={values.phone} onChange={handleChange} />
                        {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                        <label htmlFor="message" className="sr-only"> Mesaj </label>
                        <textarea id="message" name="message" placeholder="Mesajul tău" className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-primary focus:ring focus:ring-primary/20" value={values.message} onChange={handleChange} rows={4} />
                        {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                        <button type="submit" className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-primary/90"> Trimite </button>
                        {isSuccess && <p className="mt-2 text-sm text-green-500"> Mesajul a fost trimis cu succes! </p>}
                    </form>
                    <div className="flex flex-col justify-center rounded-2xl bg-secondary p-8 text-white md:p-10">
                        <h3 className="text-2xl font-bold"> Ai o urgență? </h3>
                        <p className="mt-2 text-slate-300"> Sună-ne direct la numărul de telefon de mai jos și vom fi acolo cât mai repede posibil. </p>
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