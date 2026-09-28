import '@fontsource-variable/manrope'
import '@fontsource/barlow-condensed/600.css'
import '@fontsource/barlow-condensed/700.css'
import {
  ArrowRight,
  Check,
  CircleCheck,
  Clock,
  createIcons,
  Droplets,
  Flame,
  Gauge,
  Home,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Wrench,
  X,
} from 'lucide'
import './style.css'

const phoneDisplay = '062 823 9219'
const phoneLink = 'tel:+381628239219'
const asset = (path) => `${import.meta.env.BASE_URL}${path}`

document.querySelector('#app').innerHTML = `
  <a class="skip-link" href="#main">Preskoči na sadržaj</a>

  <div class="topbar">
    <div class="shell topbar__inner">
      <span><i data-lucide="clock" aria-hidden="true"></i> Pouzdano i na vreme</span>
      <div>
        <a href="${phoneLink}"><i data-lucide="phone" aria-hidden="true"></i> ${phoneDisplay}</a>
        <span class="topbar__location"><i data-lucide="map-pin" aria-hidden="true"></i> Inđija i okolina</span>
      </div>
    </div>
  </div>

  <header class="site-header" id="pocetna">
    <div class="shell header__inner">
      <a class="brand" href="#pocetna" aria-label="Vodoinstalater Peđa, početna">
        <span class="brand__mark"><i data-lucide="droplets" aria-hidden="true"></i></span>
        <span class="brand__copy">
          <strong>PEĐA</strong>
          <small>VODOVOD · GREJANJE</small>
        </span>
      </a>

      <button class="menu-toggle" type="button" aria-label="Otvori meni" aria-expanded="false" aria-controls="main-nav">
        <i class="menu-icon" data-lucide="menu" aria-hidden="true"></i>
        <i class="close-icon" data-lucide="x" aria-hidden="true"></i>
      </button>

      <nav class="main-nav" id="main-nav" aria-label="Glavna navigacija">
        <a href="#pocetna">Početna</a>
        <a href="#usluge">Usluge</a>
        <a href="#o-nama">O nama</a>
        <a href="#kontakt">Kontakt</a>
      </nav>

      <a class="button button--red header__call" href="${phoneLink}">
        <i data-lucide="phone" aria-hidden="true"></i>
        Pozovite nas
      </a>
    </div>
  </header>

  <main id="main">
    <section class="hero" aria-labelledby="hero-title">
      <img
        class="hero__image"
        src="${asset('images/plumber-fitting.jpg')}"
        alt="Vodoinstalater montira cevne spojeve"
        width="1600"
        height="1067"
        fetchpriority="high"
      />
      <div class="hero__veil"></div>
      <div class="shell hero__content">
        <p class="eyebrow reveal" data-reveal>Profesionalni vodoinstalater · Inđija i okolina</p>
        <h1 id="hero-title" class="split-text" data-split>Nemački standard. Majstor iz komšiluka.</h1>
        <p class="hero__lead reveal" data-reveal>
          Izrada i popravka vodovoda, kanalizacije i grejanja. Kvalitetno, pouzdano i na vreme.
        </p>
        <div class="hero__actions reveal" data-reveal>
          <a class="button button--red button--large" href="${phoneLink}">
            <i data-lucide="phone" aria-hidden="true"></i>
            ${phoneDisplay}
          </a>
          <a class="text-link" href="#usluge">
            Pogledajte usluge
            <i data-lucide="arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div class="hero__facts reveal" data-reveal>
          <span><i data-lucide="shield-check" aria-hidden="true"></i> Iskustvo iz Nemačke</span>
          <span><i data-lucide="clock" aria-hidden="true"></i> Brz dogovor</span>
          <span><i data-lucide="map-pin" aria-hidden="true"></i> Inđija i okolina</span>
        </div>
      </div>
    </section>

    <section class="why" aria-labelledby="why-title">
      <div class="shell">
        <p class="section-kicker reveal" data-reveal>Siguran izbor za vaš dom</p>
        <h2 id="why-title" class="section-title split-text" data-split>Zašto izabrati nas?</h2>
        <div class="why__grid">
          <article class="reason reveal" data-reveal>
            <i data-lucide="circle-check" aria-hidden="true"></i>
            <div><strong>Nove vodovodne instalacije</strong><span>Precizna izrada od prvog spoja</span></div>
          </article>
          <article class="reason reveal" data-reveal>
            <i data-lucide="circle-check" aria-hidden="true"></i>
            <div><strong>Adaptacije i prepravke</strong><span>Pametna rešenja za svaki prostor</span></div>
          </article>
          <article class="reason reveal" data-reveal>
            <i data-lucide="circle-check" aria-hidden="true"></i>
            <div><strong>Vodovod i kanalizacija</strong><span>Od curenja do kompletne mreže</span></div>
          </article>
          <article class="reason reveal" data-reveal>
            <i data-lucide="circle-check" aria-hidden="true"></i>
            <div><strong>Radijatorsko i podno grejanje</strong><span>Toplota urađena kako treba</span></div>
          </article>
        </div>
      </div>
    </section>

    <section class="service-gallery" aria-label="Glavne usluge">
      <a class="service-tile reveal" href="#vodovod" data-reveal>
        <img src="${asset('images/water-pipes.jpg')}" alt="Vodovodne cevi i ventili" width="900" height="700" loading="lazy" />
        <span class="service-tile__overlay service-tile__overlay--blue"></span>
        <span><i data-lucide="droplets" aria-hidden="true"></i> Vodovod</span>
      </a>
      <a class="service-tile reveal" href="#kanalizacija" data-reveal>
        <img src="${asset('images/sewer-pipes.jpg')}" alt="Cevi kanalizacione mreže" width="900" height="700" loading="lazy" />
        <span class="service-tile__overlay service-tile__overlay--navy"></span>
        <span><i data-lucide="wrench" aria-hidden="true"></i> Kanalizacija</span>
      </a>
      <a class="service-tile reveal" href="#grejanje" data-reveal>
        <img src="${asset('images/heating-manifold.jpg')}" alt="Razvodni sistem za grejanje" width="900" height="700" loading="lazy" />
        <span class="service-tile__overlay service-tile__overlay--orange"></span>
        <span><i data-lucide="flame" aria-hidden="true"></i> Grejanje</span>
      </a>
    </section>

    <section class="services" id="usluge" aria-labelledby="services-title">
      <div class="shell">
        <div class="section-heading">
          <div>
            <p class="section-kicker section-kicker--blue reveal" data-reveal>Kompletna usluga</p>
            <h2 id="services-title" class="section-title split-text" data-split>Od prve cevi do završne provere.</h2>
          </div>
          <p class="section-intro reveal" data-reveal>
            Profesionalni vodoinstalater, povratnik iz Nemačke, vrši usluge u objektima i van njih.
          </p>
        </div>

        <article class="service-block reveal" id="vodovod" data-reveal>
          <div class="service-block__number">01</div>
          <div class="service-block__icon"><i data-lucide="droplets" aria-hidden="true"></i></div>
          <div class="service-block__content">
            <p class="service-block__label">Vodovod i sanitarije</p>
            <h3>Izrada novih i rekonstrukcija postojećih instalacija</h3>
            <ul class="check-list">
              <li><i data-lucide="check" aria-hidden="true"></i> Izrada potpuno nove instalacije i postavljanje sanitarija</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Potpuna rekonstrukcija postojećih instalacija</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Brza detekcija i sanacija curenja vode na baterijama, ventilima i vodokotliću</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Zamena slavina, kade, lavaboa i WC šolje</li>
            </ul>
          </div>
        </article>

        <article class="service-block reveal" id="kanalizacija" data-reveal>
          <div class="service-block__number">02</div>
          <div class="service-block__icon"><i data-lucide="search" aria-hidden="true"></i></div>
          <div class="service-block__content">
            <p class="service-block__label">Kanalizacija</p>
            <h3>Odgušenje, odvodi i pouzdano povezivanje uređaja</h3>
            <ul class="check-list">
              <li><i data-lucide="check" aria-hidden="true"></i> Odgušenje kade i sudopere</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Povezivanje veš i sudomašine na vodovodnu i odvodnu mrežu</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Popravka i zamena kanalizacionih cevi</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Radovi u objektima i van njih</li>
            </ul>
          </div>
        </article>

        <article class="service-block reveal" id="grejanje" data-reveal>
          <div class="service-block__number">03</div>
          <div class="service-block__icon service-block__icon--warm"><i data-lucide="flame" aria-hidden="true"></i></div>
          <div class="service-block__content">
            <p class="service-block__label service-block__label--warm">Podno i radijatorsko grejanje</p>
            <h3>Efikasan sistem grejanja prilagođen vašem prostoru</h3>
            <ul class="check-list">
              <li><i data-lucide="check" aria-hidden="true"></i> Izrada kompletnog sistema</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Zamena ventila i radijatora</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Zamena ekspanzionog suda</li>
              <li><i data-lucide="check" aria-hidden="true"></i> Mogućnost izrade primenom nemačke tehnologije</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <section class="about" id="o-nama" aria-labelledby="about-title">
      <div class="shell about__grid">
        <div class="about__media reveal" data-reveal>
          <img src="${asset('images/plumber-tools.jpg')}" alt="Profesionalni vodoinstalaterski alat" width="1000" height="1100" loading="lazy" />
          <div class="about__badge">
            <i data-lucide="sparkles" aria-hidden="true"></i>
            <span><strong>Nemački</strong> standard rada</span>
          </div>
        </div>
        <div class="about__content">
          <p class="section-kicker section-kicker--blue reveal" data-reveal>O majstoru</p>
          <h2 id="about-title" class="section-title split-text" data-split>Profesionalni vodoinstalater sa iskustvom stečenim u Nemačkoj.</h2>
          <p class="about__lead reveal" data-reveal>
            Majstor Predrag donosi preciznost, pouzdanost i nemačke standarde kvaliteta u svaki dom u Inđiji i okolini.
          </p>
          <div class="about__stats reveal" data-reveal>
            <div><i data-lucide="gauge" aria-hidden="true"></i><strong>Precizno</strong><span>bez improvizacije</span></div>
            <div><i data-lucide="shield-check" aria-hidden="true"></i><strong>Pouzdano</strong><span>dogovor se poštuje</span></div>
            <div><i data-lucide="clock" aria-hidden="true"></i><strong>Na vreme</strong><span>brza organizacija</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="contact" id="kontakt" aria-labelledby="contact-title">
      <div class="contact__pattern" aria-hidden="true"></div>
      <div class="shell contact__inner">
        <p class="section-kicker section-kicker--light reveal" data-reveal>Vaš dom, naša briga</p>
        <h2 id="contact-title" class="contact__title">
          <span class="split-text contact__title-text contact__title-text--full" data-split>Trebate vodoinstalatera?</span>
          <span class="split-text contact__title-text contact__title-text--short" data-split>Trebate pomoć?</span>
        </h2>
        <p class="reveal" data-reveal>Pozovite Predraga. Kratak dogovor, jasno rešenje i kvalitetan rad.</p>
        <a class="contact__phone reveal" href="${phoneLink}" data-reveal>
          <i data-lucide="phone" aria-hidden="true"></i>
          <span><small>Pozovite odmah</small>${phoneDisplay}</span>
        </a>
        <span class="contact__location reveal" data-reveal><i data-lucide="map-pin" aria-hidden="true"></i> Inđija i okolina</span>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="shell footer__grid">
      <div>
        <a class="brand brand--light" href="#pocetna">
          <span class="brand__mark"><i data-lucide="droplets" aria-hidden="true"></i></span>
          <span class="brand__copy"><strong>PEĐA</strong><small>VODOVOD · GREJANJE</small></span>
        </a>
        <p>Profesionalni vodoinstalater sa iskustvom stečenim u Nemačkoj.</p>
        <em>„Kvalitetno, pouzdano, na vreme!“</em>
      </div>
      <div>
        <h2>Usluge</h2>
        <a href="#vodovod">Nove vodovodne instalacije</a>
        <a href="#vodovod">Adaptacije i prepravke</a>
        <a href="#kanalizacija">Kanalizacija</a>
        <a href="#grejanje">Radijatorsko grejanje</a>
        <a href="#grejanje">Podno grejanje</a>
      </div>
      <div>
        <h2>Kontakt</h2>
        <a href="${phoneLink}"><i data-lucide="phone" aria-hidden="true"></i> ${phoneDisplay}</a>
        <span><i data-lucide="map-pin" aria-hidden="true"></i> Inđija i okolina</span>
      </div>
    </div>
    <div class="shell footer__bottom">
      <span>© <span id="year"></span> Vodoinstalater Peđa. Sva prava zadržana.</span>
      <a href="#pocetna">Nazad na vrh <i data-lucide="arrow-right" aria-hidden="true"></i></a>
    </div>
  </footer>
`

createIcons({
  icons: {
    ArrowRight,
    Check,
    CircleCheck,
    Clock,
    Droplets,
    Flame,
    Gauge,
    Home,
    MapPin,
    Menu,
    Phone,
    Search,
    ShieldCheck,
    Sparkles,
    Wrench,
    X,
  },
})

document.querySelector('#year').textContent = new Date().getFullYear()

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.main-nav')

const closeMenu = () => {
  menuButton.setAttribute('aria-expanded', 'false')
  menuButton.setAttribute('aria-label', 'Otvori meni')
  navigation.classList.remove('is-open')
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true'
  menuButton.setAttribute('aria-expanded', String(!isOpen))
  menuButton.setAttribute('aria-label', isOpen ? 'Otvori meni' : 'Zatvori meni')
  navigation.classList.toggle('is-open', !isOpen)
})

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu))

document.querySelectorAll('[data-split]').forEach((element) => {
  const label = element.textContent.trim()
  const fragment = document.createDocumentFragment()

  label.split(' ').forEach((word, wordIndex, words) => {
    const wordElement = document.createElement('span')
    wordElement.className = 'split-word'
    wordElement.setAttribute('aria-hidden', 'true')

    Array.from(word).forEach((letter) => {
      const letterElement = document.createElement('span')
      letterElement.className = 'split-char'
      letterElement.textContent = letter
      wordElement.append(letterElement)
    })

    fragment.append(wordElement)
    if (wordIndex < words.length - 1) fragment.append(' ')
  })

  element.setAttribute('aria-label', label)
  element.replaceChildren(fragment)
})

const animatedElements = document.querySelectorAll('[data-reveal], [data-split]')

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.12 },
  )

  animatedElements.forEach((element) => observer.observe(element))
} else {
  animatedElements.forEach((element) => element.classList.add('is-visible'))
}
