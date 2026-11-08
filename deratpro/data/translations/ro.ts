export const ro = {
    hero: {
        tagline:
            "Protecție completă împotriva dăunătorilor și agenților patogeni pentru locuința sau afacerea ta. Siguranță bio-ecologică garantată.",
        cta: "Cere o ofertă gratuită",
    },
    services: {
        title: "Serviciile noastre",
        items: [
            {
                title: "Deratizare",
                description:
                    "Eliminarea rapidă și prevenirea coloniilor de rozătoare prin stații de intoxicare securizate, capcane mecanice ecologice și momeli avizate de Ministerul Sănătății.",
                points: [
                    "Stații securizate ermetic cu cheie",
                    "Monitorizare și fișă tehnică periodică",
                    "Conform normelor sanitare",
                ],
            },
            {
                title: "Dezinsecție",
                description:
                    "Combaterea oricărui tip de insecte târâtoare sau zburătoare prin pulverizare ULV (ceață rece), geluri atractante și tratamente reziduale inodore.",
                points: [
                    "Fără evacuare îndelungată a spațiului",
                    "Eficiență testată contra ploșnițelor de pat",
                    "Efect rezidual activ de lungă durată",
                ],
            },
            {
                title: "Dezinfecție",
                description:
                    "Sterilizarea și igienizarea aeromicroflorei și suprafețelor cu biocide virucide și bactericide de spectru larg, prin nebulizare fină atomizată.",
                points: [
                    "Avizat sanitar pentru clinici, școli și birouri",
                    "Eradicare a 99.9% dintre patogeni cunoscuți",
                    "Certificat oficial de conformitate inclus",
                ],
            },
        ],
    },
    advantages: {
        title: "De ce DeratPro?",
        items: [
            {
                title: "Intervenție Rapidă 24/7",
                description:
                    "Echipe mobile echipate complet, gata să intervină în 2-4 ore în caz de alertă urgentă în București și Ilfov.",
            },
            {
                title: "Biocide Avizate & Eco",
                description:
                    "Utilizăm exclusiv substanțe de generație nouă, inodore, biodegradabile și inofensive pentru copii și animale de casă.",
            },
            {
                title: "Personal Licențiat",
                description:
                    "Tehnicieni DDD autorizați profesional, instruiți riguros în conformitate cu protocoalele sanitare europene.",
            },
            {
                title: "Proces Verbal & Garanție",
                description:
                    "Emitem pe loc documente DDD oficiale valabile pentru controalele DSP, DSVSA și ANPC, cu garanție contractuală fermă.",
            },
        ],
    },
    steps: {
        title: "Cum funcționează?",
        items: [
            {
                title: "Contactezi Echipa",
                description:
                    "Ne transmiți detaliile despre spațiu (apartament, vilă, restaurant sau depozit) și dăunătorii suspectați. Primești o cotație gratuită imediat.",
            },
            {
                title: "Evaluare & Plan de Acțiune",
                description:
                    "Inspectorul nostru identifică sursele de infestare, căile de tranzit și alege biocidele optime fără a perturba rutina ta zilnică.",
            },
            {
                title: "Intervenție & Acte DDD",
                description:
                    "Aplicăm tratamentul de șoc sau barieră, verificăm rezultatele și îți predăm Procesul Verbal și Certificatul de Garanție cu valabilitate legală.",
            },
        ],
    },
    contact: {
        title: "Cere o ofertă",
        labels: { name: "Nume", phone: "Telefon", message: "Mesaj" },
        placeholders: {
            name: "Numele tău",
            phone: "Numărul tău de telefon",
            message: "Mesajul tău",
        },
        submit: "Trimite",
        success: "Cererea a fost trimisă cu succes!",
        errors: {
            name: "Numele este obligatoriu și trebuie să aibă cel puțin 2 caractere.",
            phone: "Introdu un număr valid, de exemplu 0722 123 456.",
            message: "Mesajul este obligatoriu și trebuie să aibă cel puțin 10 caractere.",
        },
        urgentTitle: "Ai o urgență?",
        urgentText:
            "Sună-ne direct la numărul de telefon de mai jos și vom fi acolo cât mai repede posibil.",
    },
};

export type Dictionary = typeof ro;