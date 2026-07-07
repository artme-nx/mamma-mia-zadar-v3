import { SiteHeader } from "@/components/site-header";
import { RevealInit } from "@/components/reveal-init";

const IMG = {
  hero: "https://images.unsplash.com/photo-1689150911817-3e27168ab6a3",
  gardenTerrace: "https://images.unsplash.com/photo-1778423618435-a38359846976",
  pizzaMargherita: "https://images.unsplash.com/photo-1664309641932-0e03e0771b97",
  woodOven: "https://images.unsplash.com/photo-1770670644176-100813bce5a8",
  pastaBlack: "https://images.unsplash.com/photo-1765100778802-f684a4b7fd20",
  gnocchi: "https://images.unsplash.com/photo-1579349443343-73da56a71a20",
  seaBass: "https://images.unsplash.com/photo-1773417461034-75e751de40ba",
  steakGrill: "https://images.unsplash.com/photo-1774806288349-3d910c6a9334",
  tiramisu: "https://images.unsplash.com/photo-1724116379273-ba32b70d112c",
  cheesecake: "https://images.unsplash.com/photo-1702925614886-50ad13c88d3f",
  interior: "https://images.unsplash.com/photo-1596641069082-b1d5ac2b6fc1",
  doughHands: "https://images.unsplash.com/photo-1716237388463-14fdbfc0ca5e",
  ingredients: "https://images.unsplash.com/photo-1629145400374-e99188d4443b",
  tableSetting: "https://images.unsplash.com/photo-1758648207539-b40dd1f6b50e",
  exteriorNight: "https://images.unsplash.com/photo-1768121496277-8b9887bd6f7f",
  peopleDining: "https://images.unsplash.com/photo-1681657687044-9bde75edb38e",
};

function img(url: string, w: number, q = 80) {
  return `${url}?auto=format&fit=crop&w=${w}&q=${q}`;
}

const MENU = [
  {
    cat: "Pizza iz krušne peći",
    image: IMG.pizzaMargherita,
    dishes: [
      { name: "Margherita", desc: "Rajčica, mozzarella i svježi bosiljak — klasik nad klasicima." },
      { name: "Mamma Mia", desc: "Naša potpisna pizza: pršut, rikola, listići tartufa i parmezan." },
      { name: "Capricciosa", desc: "Šunka, gljive, artičoke i masline, pečeno u pravoj krušnoj peći." },
      { name: "Diavola", desc: "Pikantna kulen salama, chilli i mozzarella, za one koji vole jače." },
    ],
  },
  {
    cat: "Domaća pasta",
    image: IMG.pastaBlack,
    dishes: [
      { name: "Crni špageti s plodovima mora", desc: "Tjestenina bojana sipinim crnilom, kozice, škampi i češnjak." },
      { name: "Carbonara", desc: "Pancetta, jaje, pecorino i puno crnog papra, po pravom receptu." },
      { name: "Njoki s orasima i kaduljom", desc: "Domaći njoki u maslacu sa žajom, orasima i pecorinom." },
      { name: "Lazanje", desc: "Slojevite domaće lazanje s polako kuhanim bolognese umakom." },
    ],
  },
  {
    cat: "Iz mora i s roštilja",
    image: IMG.seaBass,
    dishes: [
      { name: "Brancin s roštilja", desc: "Cijela riba dana, limun, pečeni krumpir i tikvice s roštilja." },
      { name: "Škampi na buzaru", desc: "U umaku od rajčice, bijelog vina i češnjaka, uz kruh za umakanje." },
      { name: "Biftek s pomfritom", desc: "Sočan biftek, hrskavi pomfrit i salata po želji." },
      { name: "Carpaccio od govedine", desc: "Tanko rezana govedina, rikola, parmezan i maslinovo ulje." },
    ],
  },
  {
    cat: "Za kraj",
    image: IMG.cheesecake,
    dishes: [
      { name: "Cheesecake", desc: "Naš najpoznatiji desert — kremast, domaći, gosti ga pamte godinama." },
      { name: "Tiramisu", desc: "Klasični talijanski desert po obiteljskom receptu." },
      { name: "Panna cotta", desc: "Lagan krem desert s prelivom od sezonskog voća." },
    ],
  },
];

const GALLERY = [
  { src: IMG.gardenTerrace, alt: "Vrtna terasa u zelenilu", tall: true },
  { src: IMG.woodOven, alt: "Pizza u krušnoj peći" },
  { src: IMG.doughHands, alt: "Ruke koje mijese tijesto za pizzu" },
  { src: IMG.peopleDining, alt: "Gosti za stolom u vrtu, uz smijeh i vino", wide: true },
  { src: IMG.ingredients, alt: "Svježe rajčice, mozzarella i bosiljak" },
  { src: IMG.gnocchi, alt: "Domaći njoki na tanjuru" },
  { src: IMG.exteriorNight, alt: "Terasa navečer, uz tople girlande svjetla", wide: true },
];

export default function Home() {
  return (
    <>
      <RevealInit />
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-screen min-h-[640px] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <img
            id="heroImg"
            src={img(IMG.hero, 1900)}
            alt="Pizza pečena u pravoj krušnoj peći, obasjana plamenom"
            className="h-full w-full object-cover scale-[1.14] will-change-transform"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-vignette)" }} />
          <div className="absolute inset-0" style={{ background: "var(--hero-glow)" }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20">
          <span className="text-label reveal block mb-5" style={{ color: "var(--paper-100, #F3E7D2)" }}>
            Pizzeria · Zadar · od 2007.
          </span>
          <h1
            className="font-display reveal max-w-[17ch]"
            style={{ fontSize: "var(--hero-title-size)", lineHeight: "var(--hero-title-leading)", color: "#FBF3E6" }}
          >
            Pizza iz krušne peći, <em className="italic" style={{ color: "#E8A56B" }}>u vrtu punom zelenila.</em>
          </h1>
          <p className="reveal mt-6 max-w-[46ch] text-[1.05rem]" style={{ color: "rgba(251,243,230,0.82)" }}>
            U sjeni starih stabala na Putu Dikla pečemo pravu talijansku pizzu i mijesimo domaću tjesteninu — po receptima kakve pamtimo, bez ijednog konzervansa, od 2007.
          </p>
          <div className="reveal mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#kontakt"
              className="rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--brand)", color: "#FBF3E6" }}
            >
              Rezerviraj stol
            </a>
            <a
              href="#jelovnik"
              className="border-b pb-1 text-[0.9rem] transition-colors hover:text-[var(--brand)]"
              style={{ borderColor: "rgba(251,243,230,0.4)", color: "#FBF3E6" }}
            >
              Pogledaj jelovnik →
            </a>
          </div>
        </div>
      </section>

      {/* STATS / SOCIAL PROOF */}
      <div className="border-b" style={{ background: "var(--card)", borderColor: "var(--surface-line)" }}>
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-14 px-6 py-8 text-center">
          <div>
            <div className="font-display text-4xl" data-count="4.4" data-dec="1" style={{ color: "var(--foreground)" }}>
              4.4
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>★ Google / TripAdvisor</div>
          </div>
          <div>
            <div className="font-display text-4xl" data-count="1399" data-suffix="+" style={{ color: "var(--foreground)" }}>
              1399+
            </div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>Recenzija gostiju</div>
          </div>
          <div>
            <div className="font-display text-4xl" style={{ color: "var(--foreground)" }}>Od 2007.</div>
            <div className="text-label mt-1" style={{ color: "var(--muted-foreground)" }}>U srcu Zadra</div>
          </div>
        </div>
      </div>

      {/* MANIFESTO */}
      <section id="filozofija" className="py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <span className="text-label reveal block mb-6" style={{ color: "var(--brand)" }}>Naš recept</span>
          <p className="font-display reveal text-[clamp(1.6rem,3.2vw,2.5rem)] leading-snug" style={{ color: "var(--foreground)" }}>
            Tijesto koje odmara cijeli dan, umak od zrelih rajčica i peć koja gori od jutra do večeri —{" "}
            <em className="italic" style={{ color: "var(--brand)" }}>jedemo kao kod mame, bez ijednog konzervansa.</em>
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="jelovnik" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-16 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--brand)" }}>Jelovnik</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              Iz naše <em className="italic" style={{ color: "var(--brand)" }}>kuhinje</em>
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {MENU.map((group, i) => (
              <div
                key={group.cat}
                className={`reveal grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
                style={{ background: "var(--card)" }}
              >
                <div className="min-h-[280px] md:min-h-[360px] overflow-hidden">
                  <img src={img(group.image, 900)} alt={group.cat} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex flex-col justify-center p-9 md:p-12">
                  <div className="text-label mb-4" style={{ color: "var(--brand)" }}>{group.cat}</div>
                  <div className="flex flex-col">
                    {group.dishes.map((d) => (
                      <div key={d.name} className="border-b py-4 last:border-none" style={{ borderColor: "var(--surface-line)" }}>
                        <div className="font-display text-xl" style={{ color: "var(--foreground)" }}>{d.name}</div>
                        <div className="mt-1 text-[0.92rem]" style={{ color: "var(--muted-foreground)" }}>{d.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="prica" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 md:grid-cols-2">
          <div className="reveal h-[420px] md:h-[540px] overflow-hidden rounded-2xl">
            <img src={img(IMG.interior, 1000)} alt="Topla unutrašnjost restorana Mamma Mia" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div>
            <span className="text-label reveal block mb-5" style={{ color: "var(--brand)" }}>Naša priča</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-6" style={{ color: "var(--foreground)" }}>
              Komad Italije <em className="italic" style={{ color: "var(--brand)" }}>u srcu Zadra</em>
            </h2>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Mamma Mia otvorila je vrata 2007. godine, u vrtu punom starih stabala na Putu Dikla — tihom, zelenom mjestu tik uz cestu prema Boriku. Terasa je zaklonjena krovom i biljkama, a za tople i hladne dane tu je i klimatizirana unutrašnjost.
            </p>
            <p className="reveal mb-4 max-w-[46ch]" style={{ color: "var(--muted-foreground)" }}>
              Tijesto mijesimo svaki dan, umake kuhamo polako, a pizzu pečemo u pravoj krušnoj peći — bez aditiva i konzervansa. Porcije su velike, baš kao kod bake, a naš cheesecake gosti pamte godinama.
            </p>
            <p className="reveal font-display italic text-lg" style={{ color: "var(--brand)" }}>
              — obitelj Mamma Mia, Zadar
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galerija" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="reveal mb-14 text-center">
            <span className="text-label block mb-4" style={{ color: "var(--brand)" }}>Galerija</span>
            <h2 className="font-display text-[clamp(2.1rem,4.2vw,3.2rem)]" style={{ color: "var(--foreground)" }}>
              S našeg <em className="italic" style={{ color: "var(--brand)" }}>stola</em>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {GALLERY.map((g) => (
              <figure
                key={g.src}
                className={`reveal overflow-hidden rounded-xl ${g.tall ? "row-span-2 h-[220px] md:h-full" : "h-[220px]"} ${
                  g.wide ? "col-span-2" : ""
                }`}
              >
                <img src={img(g.src, 700)} alt={g.alt} className="h-full w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="kontakt" className="py-24" style={{ background: "var(--card)" }}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2" style={{ background: "var(--background)" }}>
          <div className="p-9 md:p-14">
            <span className="text-label reveal block mb-5" style={{ color: "var(--brand)" }}>Posjetite nas</span>
            <h2 className="font-display reveal text-[clamp(1.9rem,3.6vw,2.8rem)] mb-8" style={{ color: "var(--foreground)" }}>
              Nađite nas <em className="italic" style={{ color: "var(--brand)" }}>na Putu Dikla</em>
            </h2>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--brand)" }}>Adresa</div>
              <p style={{ color: "var(--muted-foreground)" }}>Put Dikla 54, 23000 Zadar</p>
            </div>

            <div className="reveal mb-6">
              <div className="text-label mb-2" style={{ color: "var(--brand)" }}>Rezervacije</div>
              <p style={{ color: "var(--muted-foreground)" }}>Ljeti se brzo popuni — preporučamo rezervaciju unaprijed.</p>
              <a href="tel:+38523334246" className="font-display text-2xl mt-1 inline-block" style={{ color: "var(--brand)" }}>
                +385 23 334 246
              </a>
            </div>

            <div className="reveal mb-8">
              <div className="text-label mb-2" style={{ color: "var(--brand)" }}>Radno vrijeme</div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Uto – Ned</span><span>12:00 – 24:00</span>
              </div>
              <div className="flex justify-between max-w-[280px] border-b border-dotted py-1.5" style={{ borderColor: "var(--surface-line)", color: "var(--foreground)" }}>
                <span>Ponedjeljak</span><span>Zatvoreno</span>
              </div>
            </div>

            <a
              href="tel:+38523334246"
              className="reveal inline-block rounded-full px-8 py-4 text-[0.8rem] uppercase tracking-[0.12em] font-medium"
              style={{ background: "var(--brand)", color: "#FBF3E6" }}
            >
              Rezerviraj stol
            </a>
          </div>
          <div className="reveal min-h-[360px]">
            <iframe
              src="https://maps.google.com/maps?q=Mamma+Mia+Put+Dikla+54+Zadar&output=embed"
              loading="lazy"
              title="Mamma Mia — Put Dikla 54, Zadar"
              className="h-full w-full min-h-[360px] border-0"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-20 pb-9" style={{ background: "var(--brand-dim, #4A1D12)" }}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 pb-14 md:grid-cols-3">
            <div>
              <div className="font-display italic text-2xl mb-4" style={{ color: "#FBF3E6" }}>
                Mamma <span style={{ color: "#E8A56B" }}>Mia</span>
              </div>
              <p className="max-w-[34ch] text-sm" style={{ color: "rgba(251,243,230,0.72)" }}>
                Talijanska pizzeria i restoran u vrtu na Putu Dikla, Zadar. Pizza iz krušne peći, domaća pasta i deserti koje pamtite — od 2007.
              </p>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "#E8A56B" }}>Izbornik</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(251,243,230,0.72)" }}>
                <a href="#jelovnik" className="hover:text-[#E8A56B]">Jelovnik</a>
                <a href="#prica" className="hover:text-[#E8A56B]">Naša priča</a>
                <a href="#galerija" className="hover:text-[#E8A56B]">Galerija</a>
                <a href="#kontakt" className="hover:text-[#E8A56B]">Kontakt</a>
              </div>
            </div>
            <div>
              <h4 className="text-label mb-5" style={{ color: "#E8A56B" }}>Kontakt</h4>
              <div className="flex flex-col gap-2.5 text-sm" style={{ color: "rgba(251,243,230,0.72)" }}>
                <a href="tel:+38523334246" className="font-display text-lg" style={{ color: "#FBF3E6" }}>+385 23 334 246</a>
                <a href="mailto:mammamiazadar2007@gmail.com" className="hover:text-[#E8A56B]">mammamiazadar2007@gmail.com</a>
                <p>Put Dikla 54, Zadar, Hrvatska</p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-wrap justify-between gap-3 border-t pt-6 text-xs"
            style={{ borderColor: "rgba(251,243,230,0.16)", color: "rgba(251,243,230,0.6)" }}
          >
            <span>© 2026 Mamma Mia · Zadar</span>
            <span>4.4 ★ · 1399+ recenzija</span>
          </div>
        </div>
      </footer>
    </>
  );
}
