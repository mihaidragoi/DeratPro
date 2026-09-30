# DeratPro

Site de prezentare modern, tip landing page, cu cinci secțiuni pentru o firmă fictivă ce oferă serviciile: deratizare, dezinfecție și desinsecție.

**Link de accesare:** https://derat-pro-nine.vercel.app/ 

**Tehnologii utilizate:** Next.js, TypeScript, Tailwind CSS, @react-three/fiber (Three.js), lucide-react, Vercel.

## Rularea locală

Pentru a rula local trebuie efectuați următorii pași: 
    1. npm install
    2. npm run dev
    3. accesare: http://localhost:3000

## Design și Tool utilizat

**Tool utilizat:** https://stitch.withgoogle.com/

### Prompt-uri utilizate: 

***INPUT:*** 
        "Design a modern, trustworthy one page website for "DeratPro", a Romanian service company offering pest control ("Deratizare"), insect control ("Dezinsecție") and disinfection ("Dezinfecție") for residential and commercial clients. Language : Romanian. Sections are stacked vertically and contains: 1. Hero - a full-screen dark background with some particles as a placeholder for a 3D animation. In the center will be the company name "DeratPro" and a button "Cere ofertă"; 2. Servicii- contains the three services, with a short description , title and icon ; 3. De ce DeratPro - contains 3 or 4 advantages with icons (example: fast intervention, approved substances, licensed staff, guarantee, etc.) ; 4. Cum funcționează - contains three numbered steps (Ne suni -> Evaluare -> Intervenție); 5. Contact - a simple form with name, phone, message fileds and a submit button. As a style : clean, proffesional, dark hero, light sections, green or similar colors, rounded corners, hight text contrast, mobile-first and responsive (it should be responsible for desktop as well)."

***OUTPUT:*** 
        "Am creat designul one-page complet și responsive pentru DeratPro - Servicii DDD Autorizate, respectând toate cerințele:
        Structura paginii și elementele implementate:
        Hero Section (Dark background & Particle effect):
        Fundal întunecat elegant cu accente de verde smarald și efect de particule plutitoare (placeholder optimizat pentru animații 3D).
        Titlu centrat cu numele companiei DeratPro, subtitlu dedicat și butonul principal de conversie „Cere ofertă”, însoțit de butonul rapid de apel urgențe și etichete de încredere (Garanție 100%, Substanțe Avizate, Intervenție 2-4h).
        Servicii DDD (Secțiune luminoasă, contrast ridicat):
        Carduri rotunjite moderne cu pictograme dedicate și etichete clare pentru cele 3 servicii:
        Deratizare Chimică & Mecanică (rozătoare, șobolani, stații securizate);
        Dezinsecție Ecologică & ULV (gândaci, ploșnițe, căpușe, ceață rece ULV);
        Dezinfecție Profesională Microaeriană (bacterii, viruși, fungi, biocide avizate).
        De ce DeratPro (Avantaje cheie):
        4 puncte forte evidențiate cu pictograme: Intervenție Rapidă 24/7, Biocide Avizate & Eco, Personal Licențiat și Proces Verbal & Garanție conform normelor DSP/DSVSA.
        Cum funcționează (3 Pași clari):
        Stepper vizual numerotat: 1. Contactezi Echipa → 2. Evaluare & Plan de Acțiune → 3. Intervenție & Acte DDD.
        Formular de Contact & Cerere Ofertă:
        Câmpuri specifice pentru Nume, Telefon, Tip Serviciu (dropdown), selector pentru tipul de spațiu (Rezidențial / Comercial), câmp pentru detalii/suprafață și buton de trimitere directă, alături de linia directă de intervenție 24/7.
        Stil vizual & Responsive:
        Mobile-first, colțuri rotunjite (rounded-2xl, rounded-xl), paletă curată verde sanitar/eco (#10B981 / #0D5C3A), contrast optim de lizibilitate și adaptabilitate completă pentru ecrane desktop și mobile."

***INPUT:***
        "Create the desktop version of this same page, using the same design system."

***OUTPUT:***
        "Am generat versiunea desktop a paginii one-page pentru DeratPro, utilizând același sistem de design (DeratPro Clinical Sanitary), aceleași texte și aceeași identitate vizuală ca pe versiunea de mobil:
        Adaptări specifice pentru Desktop:
        Header & Navigație Desktop:
        Bară persistentă cu logo DeratPro, link-uri directe de navigare cu scroll fin (Servicii, De ce DeratPro, Cum Funcționează, Tarife, Contact), afișare proeminentă a liniei de urgență Urgențe 24/7: 0722 123 456 și butonul rapid „Cere Ofertă”.
        Hero Section cu impact vizual:
        Fundal întunecat generos cu particule ambientale (suport pentru animația 3D), ierarhie tipografică extinsă, butoane duale CTA și cele 3 cărți orizontale de încredere (Garanție 100% Contractuală, Substanțe Avizate MS/DSP, Sosire Rapidă 2-4h).
        Servicii DDD în Grid pe 3 Coloane:
        Fiecare serviciu (Deratizare, Dezinsecție, Dezinfecție) dispune de spațiu dedicat, iconițe sanitare specifice, etichete de dăunători, puncte cheie bifate și butoane directe de solicitare.
        De ce DeratPro (4 Coloane Orizontale):
        Distribuție optimă pe toată lățimea ecranului pentru cele 4 avantaje majore (Intervenție Rapidă 24/7, Biocide Avizate & Eco, Personal Licențiat, Proces Verbal & Garanție).
        Cum Funcționează (Stepper Orizontal în 3 Pași):
        Flux orizontal clar de la apelul inițial, la diagnostic pe teren și intervenția propriu-zisă cu eliberare de acte oficiale.
        Formular & Contact (Layout pe 2 Coloane):
        Coloana din stânga găzduiește formularul detaliat de ofertare (cu selector tip spațiu și dropdown servicii), iar coloana din dreapta oferă dispeceratul non-stop, datele de contact directe și garanțiile legale de execuție.
        Footer complet:
        Date fiscale și de autorizare DSP/DSVSA, link-uri utile și program de intervenții non-stop."

        * se pot găsi și variantele propuse direct pe GitHub, în folderul docs/design, unde am atașat atât varianta pentru mobile, cât și varianta desktop.

## Ce am păstrat și ce am schimbat?
În urma prompt-ului oferit tool-ului AI, în care am descris cât mai bine viziunea mea asupra site-ului, am efectuat următoarele modificări:
    -> am eliminat partea de tarife, întrucât nu era parte a cerinței temei și ar fi adus cod în plus inutil.
    -> am simplificat secțiunea Hero, care acum conține doar numele companiei, cu o scurtă descriere, animația 3D și butonul CTA.
    -> am simplificat secțiunea Contact, care conține doar formularul simplu, împreună cu datele de contact în caz de urgență.
    -> am renunțat la butoanele din secțiunea Servicii. Dacă utilizatorul a trecut de secțiunea Hero, intenția sa este de informare, iar butoanele suplimentare ar fi încărcat interfața inutil.
    -> am eliminat partea de cont și partea de "DeratPro Servicii DDD".

Am ales să păstrez paleta de culori, animația pe care am implementat-o ulterior și ideile de bază din design-ul propus. Acest lucru asigură claritatea, lizibilitatea și impactul asupra utilizatorilor.

## Animația Hero  
    Animația 3D este compusă dintr-un icosaedru și un sistem de particule, optimizate pentru performanță. Generarea pozițiilor particulelor este optimizată cu useMemo pentru a evita recalculările inutile la fiecare cadru și a preveni blocajele de performanță.

## Decizii și compromisuri
    - validare efectuată manual, pentru a înțelege și controla logica 
    - conținutul se află în data/content.ts, în timp ce in folderul components se află fiecare secțiune, ce afișează conținutul corespunzător
    - formularul nu trimite date, doar le verifică și le validează printr-un mesaj corespunzător
    - datele firmei sunt fictive, nu există în realitate
    
## Tool-uri AI
    Așa cum am zis mai sus, am utilizat Stitch pentru realizarea design-ului. Pe lângă acesta, am mai folosit Claude și Gemini pentru a obține schelete de cod de pornire, explicații suplimentare și code-review. 

    Ceea ce am făcut eu a fost să învăț. Am corectat eventuale bug-uri vizuale, am implementat logica din spate și am asigurat ca varianta finală a produsului să fie la o calitate cât mai ridicată. 
        
    Împreună cu aceste tool-uri am reușit să construiesc un site from scratch și să mă dezvolt în această direcție. Această experiență mi-a stârnit interesul asupra acestei zone din marea industrie IT. Mă bucur că am avut ocazia de a acumula noi cunoștințe ale unor astfel de tehnologii.