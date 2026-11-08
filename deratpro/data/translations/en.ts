import type { Dictionary } from "./ro";

export const en: Dictionary = {
    hero: {
        tagline:
            "Complete protection against pests and pathogens for your home or business. Guaranteed bio-ecological safety.",
        cta: "Get a free quote",
    },
    services: {
        title: "Our services",
        items: [
            {
                title: "Rodent control",
                description:
                    "Fast elimination and prevention of rodent colonies using secured bait stations, eco-friendly mechanical traps and baits approved by the Ministry of Health.",
                points: [
                    "Tamper-proof bait stations locked with a key",
                    "Periodic monitoring and technical report",
                    "Compliant with sanitary regulations",
                ],
            },
            {
                title: "Insect control",
                description:
                    "Control of any crawling or flying insects through ULV spraying (cold fog), attractant gels and odorless residual treatments.",
                points: [
                    "No lengthy evacuation of the premises",
                    "Proven effective against bed bugs",
                    "Long-lasting active residual effect",
                ],
            },
            {
                title: "Disinfection",
                description:
                    "Sterilization and sanitization of indoor air and surfaces with broad-spectrum virucidal and bactericidal biocides, using fine atomized fogging.",
                points: [
                    "Sanitary approval for clinics, schools and offices",
                    "Eliminates 99.9% of known pathogens",
                    "Official certificate of compliance included",
                ],
            },
        ],
    },
    advantages: {
        title: "Why DeratPro?",
        items: [
            {
                title: "24/7 Rapid Response",
                description:
                    "Fully equipped mobile teams, ready to arrive within 2–4 hours for urgent calls in Bucharest and Ilfov.",
            },
            {
                title: "Approved & Eco Biocides",
                description:
                    "We use only new-generation substances: odorless, biodegradable and safe for children and pets.",
            },
            {
                title: "Licensed Staff",
                description:
                    "Professionally authorized technicians, rigorously trained in line with European sanitary protocols.",
            },
            {
                title: "Official Report & Guarantee",
                description:
                    "We issue official pest control documents on the spot, valid for sanitary, veterinary and consumer protection inspections, backed by a firm contractual guarantee.",
            },
        ],
    },
    steps: {
        title: "How it works",
        items: [
            {
                title: "Contact the team",
                description:
                    "Tell us about your space (apartment, house, restaurant or warehouse) and the pests you suspect. You get a free quote right away.",
            },
            {
                title: "Assessment & Action Plan",
                description:
                    "Our inspector identifies infestation sources and travel routes and chooses the best biocides without disrupting your daily routine.",
            },
            {
                title: "Treatment & Documents",
                description:
                    "We apply the shock or barrier treatment, check the results and hand over the official report and a legally valid Guarantee Certificate.",
            },
        ],
    },
    contact: {
        title: "Request a quote",
        labels: { name: "Name", phone: "Phone", message: "Message" },
        placeholders: {
            name: "Your name",
            phone: "Your phone number",
            message: "Your message",
        },
        submit: "Send",
        success: "Your request has been sent successfully!",
        errors: {
            name: "Name is required and must be at least 2 characters long.",
            phone: "Enter a valid Romanian mobile number, e.g. 0722 123 456.",
            message: "Message is required and must be at least 10 characters long.",
        },
        urgentTitle: "Have an emergency?",
        urgentText:
            "Call us directly at the number below and we will be there as soon as possible.",
    },
};