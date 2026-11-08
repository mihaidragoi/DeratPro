# DeratPro

A modern one-page presentation website (landing page) with five sections for a fictional company offering pest control services: *deratizare* (rodent control), *dezinsecție* (insect control) and *dezinfecție* (disinfection). The site also includes a light/dark theme and a Romanian/English language switch.

**Live link:** https://derat-pro-nine.vercel.app/

**Technologies:** Next.js, TypeScript, Tailwind CSS, @react-three/fiber (Three.js), lucide-react, Vercel.

## Running locally

To run the project locally, follow these steps:

1. `npm install`
2. `npm run dev`
3. Open http://localhost:3000

## Design and tool used

**Tool used:** https://stitch.withgoogle.com/

### Prompts used

The prompts are reproduced verbatim, including typos. Stitch's outputs were in Romanian and are translated here.

***INPUT:***

> "Design a modern, trustworthy one page website for "DeratPro", a Romanian service company offering pest control ("Deratizare"), insect control ("Dezinsecție") and disinfection ("Dezinfecție") for residential and commercial clients. Language : Romanian. Sections are stacked vertically and contains: 1. Hero - a full-screen dark background with some particles as a placeholder for a 3D animation. In the center will be the company name "DeratPro" and a button "Cere ofertă"; 2. Servicii- contains the three services, with a short description , title and icon ; 3. De ce DeratPro - contains 3 or 4 advantages with icons (example: fast intervention, approved substances, licensed staff, guarantee, etc.) ; 4. Cum funcționează - contains three numbered steps (Ne suni -> Evaluare -> Intervenție); 5. Contact - a simple form with name, phone, message fileds and a submit button. As a style : clean, proffesional, dark hero, light sections, green or similar colors, rounded corners, hight text contrast, mobile-first and responsive (it should be responsible for desktop as well)."

***OUTPUT:***

> "I created the complete, responsive one-page design for DeratPro - Authorized DDD Services, meeting all requirements:
> Page structure and implemented elements:
> Hero Section (Dark background & Particle effect):
> Elegant dark background with emerald green accents and a floating particle effect (placeholder optimized for 3D animations).
> Centered title with the company name DeratPro, a dedicated subtitle and the main conversion button "Cere ofertă" (Request a quote), accompanied by a quick emergency call button and trust labels (100% Guarantee, Approved Substances, 2-4h Intervention).
> DDD Services (Light section, high contrast):
> Modern rounded cards with dedicated icons and clear labels for the 3 services:
> Chemical & Mechanical Rodent Control (rodents, rats, secured stations);
> Ecological Insect Control & ULV (cockroaches, bed bugs, ticks, ULV cold fog);
> Professional Microaerial Disinfection (bacteria, viruses, fungi, approved biocides).
> Why DeratPro (Key advantages):
> 4 key strengths highlighted with icons: 24/7 Rapid Intervention, Approved & Eco Biocides, Licensed Staff and Official Report & Guarantee in line with DSP/DSVSA regulations.
> How it works (3 clear steps):
> Numbered visual stepper: 1. Contact the Team → 2. Assessment & Action Plan → 3. Intervention & DDD Documents.
> Contact & Quote Request Form:
> Specific fields for Name, Phone, Service Type (dropdown), a property type selector (Residential / Commercial), a details/area field and a direct submit button, alongside the 24/7 intervention hotline.
> Visual style & Responsive:
> Mobile-first, rounded corners (rounded-2xl, rounded-xl), clean sanitary/eco green palette (#10B981 / #0D5C3A), optimal readability contrast and full adaptability for desktop and mobile screens."

***INPUT:***

> "Create the desktop version of this same page, using the same design system."

***OUTPUT:***

> "I generated the desktop version of the one-page site for DeratPro, using the same design system (DeratPro Clinical Sanitary), the same texts and the same visual identity as the mobile version:
> Desktop-specific adaptations:
> Header & Desktop Navigation:
> Persistent bar with the DeratPro logo, direct navigation links with smooth scrolling (Services, Why DeratPro, How It Works, Pricing, Contact), prominent display of the emergency line Emergencies 24/7: 0722 123 456 and the quick "Cere Ofertă" button.
> Hero Section with visual impact:
> Generous dark background with ambient particles (support for the 3D animation), extended typographic hierarchy, dual CTA buttons and 3 horizontal trust cards (100% Contractual Guarantee, MS/DSP-Approved Substances, 2-4h Rapid Arrival).
> DDD Services in a 3-Column Grid:
> Each service (Rodent Control, Insect Control, Disinfection) has dedicated space, sanitary-specific icons, pest labels, checked key points and direct request buttons.
> Why DeratPro (4 Horizontal Columns):
> Optimal distribution across the full screen width for the 4 major advantages (24/7 Rapid Intervention, Approved & Eco Biocides, Licensed Staff, Official Report & Guarantee).
> How It Works (Horizontal 3-Step Stepper):
> Clear horizontal flow from the initial call, to on-site diagnosis and the actual intervention with issuing of official documents.
> Form & Contact (2-Column Layout):
> The left column holds the detailed quote form (with property type selector and services dropdown), while the right column offers the non-stop dispatch, direct contact details and legal execution guarantees.
> Full Footer:
> Tax and DSP/DSVSA authorization data, useful links and non-stop intervention schedule."

* The proposed design variants are also available on GitHub, in the `docs/design` folder, where I attached both the mobile and the desktop versions.

## What I kept and what I changed

After the prompt given to the AI tool, in which I described my vision of the site as well as I could, I made the following changes:

* I removed the pricing section, because it was not part of the assignment and would have added unnecessary code.
* I simplified the Hero section, which now contains only the company name, a short description, the 3D animation and the CTA button.
* I simplified the Contact section, which now contains only the simple form, together with the contact details for emergencies.
* I removed the buttons from the Services section. If the user has scrolled past the Hero section, their intent is to get informed, and extra buttons would have cluttered the interface for no reason.
* I removed the account icon and the "DeratPro Servicii DDD" label from the header.
* I added a light/dark theme toggle and a Romanian/English language switch, which were not part of the generated design.

I chose to keep the color palette, the animation I implemented afterwards and the core ideas of the proposed design. This ensures clarity, readability and impact for users.

## Hero animation

The 3D animation consists of an icosahedron and a particle system, optimized for performance. The particle positions are generated with `useMemo` to avoid unnecessary recalculations on every re-render and to prevent performance bottlenecks.

## Decisions and trade-offs

* Manual validation, to understand and control the logic.
* The texts live in `data/translations/` (`ro.ts` and `en.ts`), the icons in `data/icons.ts` and the company details in `data/content.ts`. Each section is a separate component in the `components` folder and displays the corresponding content.
* No external i18n library: a small custom hook (`useSyncExternalStore`) and typed dictionaries. The chosen language is saved in `localStorage`.
* Dark mode uses the `dark` class on `<html>`, set by an inline script before the first paint (to avoid a flash on load) and saved in `localStorage`.
* The site has a single URL, so the page title and meta description stay in Romanian.
* The form does not send data, it only validates it and shows a confirmation message.
* The company data is fictional and does not exist in real life.

## AI tools

As mentioned above, I used Stitch to create the design. Besides it, I also used Claude and Gemini to get starter code skeletons, extra explanations and code reviews.

What I did myself was learn. I fixed visual bugs, implemented the logic behind the features and made sure the final product was of the highest quality I could reach.

Together with these tools I managed to build a site from scratch and grow in this direction. This experience sparked my interest in this area of the IT industry. I am glad I had the opportunity to gain new knowledge about these technologies.
