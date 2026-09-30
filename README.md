# DeratPro

În cadrul acestui proiect am avut ocazia de a face cunoștință directă cu noi tehnologii, precum React, Next.js, Three.js și TypeScript.

Am utilizat "stitch.withgoogle.com", pe baza căruia am stabilit partea de design a acestuia. Prompt-ul folosit a fost:

    "Design a modern, trustworthy one page website for "DeratPro", a Romanian service company offering pest control ("Deratizare"), insect control ("Dezinsecție") and disinfection ("Dezinfecție") for residential and commercial clients. Language : Romanian. Sections are stacked vertically and contains: 1. Hero - a full-screen dark background with some particles as a placeholder for a 3D animation. In the center will be the company name "DeratPro" and a button "Cere ofertă"; 2. Servicii- contains the three services, with a short description , title and icon ; 3. De ce DeratPro - contains 3 or 4 advantages with icons (example: fast intervention, approved substances, licensed staff, guarantee, etc.) ; 4. Cum funcționează - contains three numbered steps (Ne suni -> Evaluare -> Intervenție); 5. Contact - a simple form with name, phone, message fileds and a submit button. As a style : clean, proffesional, dark hero, light sections, green or similar colors, rounded corners, hight text contrast, mobile-first and responsive (it should be responsible for desktop as well).". 

Output: 
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


Am oferit cât mai multe informații asimilate din contextul temei, la care am adăugat propriile viziuni și perspective asupra site-ului.
Ulterior acesta mi-a oferit design-ul pentru Mobile (lucru salvat pe Repo în cadrul folderului docs/design). Am cerut apoi un prompt pentru a vizualiza și partea de Desktop:
    "Create the desktop version of this same page, using the same design system."

Output: 
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

Având design-ul oferit de AI, am decis să păstrez ceea ce respecta cerința și asigura calitatea site-ului, împreună cu lizibilitatea sa.

Astfel, secțiunea Hero a fost redusă la: animație 3D (realizată prin @react-three/fiber), numele companiei, o scurtă descriere, butoane pentru acces rapid la restul secțiunilor și evidențierea butonului pentru contact urgent. 
Secțiunea Serviciilor conține cele trei servicii oferite, împreună cu descriere și avantaje ale acestora. Nu am luat în calcul adăugarea de butoane pentru trimiterea la secțiunea Contact, întrucât daca utilizatorul nu a accesat direct de la început, înseamnă că acesta dorește să parcurgă tot site-ul. În plus, s-ar fi încărcat conținutul și ar fi devenit greu de urmărit și citit. 
Secțiunea Contact a fost diminuată și ea la un formular simplu, cu nume, telefon și mesaj. A fost realizată și o validare de bază a acestor date, iar un mesaj de confirmare a trasmiterii solicitării este afișat dacă este totul în regulă.  

Pe scurt, am păstrez ceea ce era relevant temei și ajuta la menținerea coerenței și clarității site-ului.

Fiind o oportunitate de a interacționa cu aceste tehnologii și framework-uri, pentru dezvoltarea codului am folosit Inteligența Artificială, în special Claude și Gemini. Pe baza acestora am reușit să învăț noua structură a acestor tehnologii, să lucrez direct cu comenzi în terminal și să cât de cât habar despre cum ar trebui lucrurile făcute pentru obținerea unui astfel de site. Am citit și parcurs și documentațiile de pe Internet despre acestea, în paralel cu informațiile oferite de agenții AI. M-am străduit constant să fiu capabil să știu ce face codul meu și să asigur conceptele de clean & maintable code. 

Rularea locală se realizează prin comanda "npm run dev" executată în terminal în folderul proiectului, apoi accesez "http://localhost:3000". Încărcarea site-ului (deploy) o voi realiza pe Vercel.