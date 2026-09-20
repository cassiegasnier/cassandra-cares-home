import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, Clock, HeartHandshake, Home, Accessibility } from "lucide-react";

import heroCare from "@/assets/hero-care.jpg";
import portrait from "@/assets/cassandra-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cassandra Gasnier — Aide à domicile" },
      {
        name: "description",
        content:
          "Aide à domicile par Cassandra Gasnier, infirmière de profession. Accompagnement des personnes âgées dépendantes, pathologies lourdes, handicap et fin de vie. Lun, mar, jeu, ven · 9h–16h · 06 69 99 29 11.",
      },
      { property: "og:title", content: "Cassandra Gasnier — Aide à domicile" },
      {
        property: "og:description",
        content:
          "Un accompagnement humain et attentionné à domicile : personnes âgées dépendantes, pathologies lourdes, handicap, fin de vie. Contact : 06 69 99 29 11.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const PHONE = "06 69 99 29 11";
const PHONE_HREF = "tel:0669992911";
const EMAIL = "cassandra.gasnier@hotmail.fr";
const EMAIL_HREF = "mailto:cassandra.gasnier@hotmail.fr";

const services = [
  {
    icon: HeartHandshake,
    label: "(a)",
    title: "Personne âgée dépendante",
    text: "Aide au quotidien, accompagnement des gestes de la vie et présence rassurante pour garder le confort du foyer.",
  },
  {
    icon: Home,
    label: "(b)",
    title: "Pathologie lourde",
    text: "Une aide à domicile attentive et régulière, en lien avec l'entourage et les professionnels de santé.",
  },
  {
    icon: Accessibility,
    label: "(c)",
    title: "Handicap",
    text: "Un accompagnement personnalisé, respectueux et adapté à chaque besoin et à chaque rythme.",
  },
  {
    icon: Flower2,
    label: "(d)",
    title: "Accompagnement de fin de vie",
    text: "Une présence douce et bienveillante au quotidien, pour la personne et pour ses proches, dans le respect et la sérénité.",
  },
];

const jours = [
  { jour: "Lundi", ouvert: true },
  { jour: "Mardi", ouvert: true },
  { jour: "Mercredi", ouvert: false },
  { jour: "Jeudi", ouvert: true },
  { jour: "Vendredi", ouvert: true },
  { jour: "Samedi", ouvert: false },
  { jour: "Dimanche", ouvert: false },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground antialiased">
      {/* Barre de contact sticky */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3">
          <p className="font-display text-lg font-semibold tracking-tight">
            Cassandra Gasnier
          </p>
          <div className="flex items-center gap-5">
            <a
              href={EMAIL_HREF}
              className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
            >
              {EMAIL}
            </a>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-opacity hover:opacity-90"
            >
              <Phone className="size-3.5" />
              {PHONE}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pt-16 pb-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Aide à domicile · Infirmière de profession
            </p>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Une aide douce, <span className="italic text-primary">à la maison</span>.
            </h1>
            <p className="mt-8 max-w-[46ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              Je suis Cassandra, infirmière de profession. J'accompagne à domicile
              les personnes âgées dépendantes, les personnes atteintes de
              pathologies lourdes et les personnes en situation de handicap —
              avec le calme d'une visite, jamais la froideur d'un hôpital.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 text-base font-semibold text-background transition-colors hover:bg-primary"
              >
                <Phone className="size-4" />
                Appeler Cassandra
              </a>
              <a
                href={EMAIL_HREF}
                className="inline-flex items-center rounded-full border border-border px-7 py-4 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Écrire un message
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="size-4 text-primary" />
              Lundi, mardi, jeudi et vendredi · 9h à 16h
            </p>
          </div>
          <div className="lg:col-span-5">
            <img
              src={heroCare}
              alt="Une main de soignante tenant doucement la main d'une personne âgée autour d'un thé"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-[28px] object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
              Ce que j'accompagne
            </h2>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:block">
              Trois domaines
            </span>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-[24px] bg-card p-8 ring-1 ring-black/5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-extrabold text-primary/25">
                    {s.label}
                  </span>
                  <s.icon className="size-6 text-accent" />
                </div>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <img
              src={portrait}
              alt="Portrait de Cassandra Gasnier, aide à domicile"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[24px] object-cover outline-1 -outline-offset-1 outline-black/5"
            />
          </div>
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Cassandra Gasnier
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance">
              Infirmière de profession, aide à domicile de vocation
            </h2>
            <p className="mt-6 max-w-[52ch] text-pretty text-lg leading-relaxed text-muted-foreground">
              Mon expérience d'infirmière guide chacune de mes visites : une
              écoute de tous les instants, des gestes posés et une vraie
              connaissance des situations de dépendance. Mon métier est
              d'apporter à l'aide à domicile la chaleur d'un chez-soi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                Aide à domicile
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                Expérience infirmière
              </span>
              <span className="rounded-full bg-secondary px-4 py-2 text-sm font-medium">
                Accompagnement personnalisé
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[24px] bg-card p-8 ring-1 ring-black/5 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Mes disponibilités
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight">
                Du lundi au vendredi, 9h à 16h
              </h2>
              <p className="mt-3 max-w-[44ch] text-muted-foreground">
                Je suis disponible le lundi, mardi, jeudi et vendredi. Le
                mercredi et le week-end, laissez-moi un message : je vous
                rappelle dès mon retour.
              </p>
            </div>
            <ul className="grid min-w-56 grid-cols-1 gap-2 text-sm">
              {jours.map((j) => (
                <li
                  key={j.jour}
                  className="flex items-center justify-between rounded-xl bg-secondary/60 px-4 py-2"
                >
                  <span className="font-medium">{j.jour}</span>
                  <span
                    className={
                      j.ouvert
                        ? "font-semibold text-accent"
                        : "text-muted-foreground"
                    }
                  >
                    {j.ouvert ? "9h – 16h" : "Fermé"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-foreground text-background">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="font-display text-5xl font-extrabold tracking-tight text-balance sm:text-6xl">
            Parlons de votre besoin.
          </h2>
          <p className="mt-6 max-w-[48ch] text-pretty text-lg leading-relaxed text-background/70">
            Un appel, un message, et je reviens vers vous avec une écoute
            attentive. C'est par là que tout commence.
          </p>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
            <a
              href={PHONE_HREF}
              className="rounded-[24px] bg-primary p-8 transition-opacity hover:opacity-90"
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                <Phone className="size-3.5" /> Téléphone
              </p>
              <p className="mt-3 font-display text-3xl font-extrabold tracking-tight text-primary-foreground">
                {PHONE}
              </p>
              <p className="mt-2 text-sm text-primary-foreground/80">
                Lun, mar, jeu, ven · 9h – 16h
              </p>
            </a>
            <a
              href={EMAIL_HREF}
              className="rounded-[24px] bg-background/10 p-8 ring-1 ring-background/15 transition-colors hover:bg-background/20"
            >
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
                <Mail className="size-3.5" /> Email
              </p>
              <p className="mt-3 break-words font-display text-2xl font-semibold tracking-tight">
                {EMAIL}
              </p>
              <p className="mt-2 text-sm text-background/70">Écrire un message</p>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-background/10 bg-foreground text-background/50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm sm:flex-row">
          <span className="font-display font-semibold text-background/80">
            Cassandra Gasnier
          </span>
          <span>© 2026 · Aide à domicile · Personnes âgées, pathologies lourdes, handicap</span>
        </div>
      </footer>
    </div>
  );
}
