import {
    Rat,
    Bug,
    SprayCan,
    Zap,
    FlaskConical,
    BadgeCheck,
    FileCheck,
    Phone,
    ClipboardCheck,
    Wrench,
    type LucideIcon,
} from "lucide-react"; 


export type Service = {
    title : string;
    description : string;
    icon : LucideIcon;
    points : string[];
};

export type Advantage = {
    title : string;
    description : string;
    icon : LucideIcon;
};

export type Step = {
    number : number;
    title : string;
    description : string;
    icon : LucideIcon;
};


export const siteInfo = {
    name : "DeratPro",
    tagline: "Protecție completă împotriva dăunătorilor și agenților patogeni pentru locuința sau afacerea ta. Siguranță bio-ecologică garantată.",
    ctaLabel : "Cere o ofertă gratuită",
    phone : "+40 123 456 789",
    email : "info@deratpro.ro"
};

export const services : Service[] = [
    {
        title : "Deratizare",
        description : "Eliminarea rapidă și prevenirea coloniilor de rozătoare prin stații de intoxicare securizate, capcane mecanice ecologice și momeli avizate de Ministerul Sănătății.",
        icon : Rat,
        points : [
            "Stații securizate ermetic cu cheie", 
            "Monitorizare și fișă tehnică periodică",
            "Conform normelor sanitare"
        ]
    },
    {
        title : "Dezinsecție",
        description : "Combaterea oricărui tip de insecte târâtoare sau zburătoare prin pulverizare ULV (ceață rece), geluri atractante și tratamente reziduale inodore.",
        icon : Bug,
        points : [
            "Fără evacuare îndelungată a spațiului",
            "Eficiență testată contra ploșnițelor de pat",
            "Efect rezidual activ de lungă durată"
        ]
    },
    {
        title : "Dezinfecție",
        description : "Sterilizarea și igienizarea aeromicroflorei și suprafețelor cu biocide virucide și bactericide de spectru larg, prin nebulizare fină atomizată.",
        icon : SprayCan,
        points : [
            "Avizat sanitar pentru clinici, școli și birouri",
            "Eradicare a 99.9% dintre patogeni cunoscuți",
            "Certificat oficial de conformitate inclus"
        ]
    }
];

export const advantages : Advantage[] = [
    {
        title : "Intervenție Rapidă 24/7",
        description : "Echipe mobile echipate complet, gata să intervină în 2-4 ore în caz de alertă urgentă în București și Ilfov.",
        icon : Zap
    },
    {
        title : "Biocide Avizate & Eco",
        description : "Utilizăm exclusiv substanțe de generație nouă, inodore, biodegradabile și inofensive pentru copii și animale de casă.",
        icon : FlaskConical
    },
    {
        title : "Personal Licențiat",
        description : "Tehnicieni DDD autorizați profesional, instruiți riguros în conformitate cu protocoalele sanitare europene.",
        icon : BadgeCheck
    },
    {
        title : "Proces Verbal & Garanție",
        description : "Emitem pe loc documente DDD oficiale valabile pentru controalele DSP, DSVSA și ANPC, cu garanție contractuală fermă.",
        icon : FileCheck
    }
];

export const steps : Step[] = [
    {
        number : 1,
        title : "Contactezi Echipa",
        description : "Ne transmiți detaliile despre spațiu (apartament, vilă, restaurant sau depozit) și dăunătorii suspectați. Primești o cotație gratuită imediat.",
        icon : Phone
    },
    {
        number : 2,
        title : "Evaluare & Plan de Acțiune",
        description : "Inspectorul nostru identifică sursele de infestare, căile de tranzit și alege biocidele optime fără a perturba rutina ta zilnică.",
        icon : ClipboardCheck
    },
    {
        number : 3,
        title : "Intervenție & Acte DDD",
        description : "Aplicăm tratamentul de șoc sau barieră, verificăm rezultatele și îți predăm Procesul Verbal și Certificatul de Garanție cu valabilitate legală.",
        icon : Wrench
    },
];