import { useState } from "react";

const services = [
  {
    number: "01",
    icon: "print",
    title: "Printing & branding",
    description:
      "Make your next campaign stand out with brochures, leaflets, signage, display materials and custom promotional print.",
    tags: ["Brochures", "Signage", "Promotional print"],
  },
  {
    number: "02",
    icon: "computer",
    title: "Computers & hardware",
    description:
      "Find practical desktop and laptop options for your team, workspace and day-to-day business needs.",
    tags: ["Desktops", "Laptops", "Business hardware"],
  },
  {
    number: "03",
    icon: "stationery",
    title: "Office supplies",
    description:
      "Keep the essentials close at hand, from paper and filing supplies to the everyday tools your office relies on.",
    tags: ["Stationery", "Paper goods", "Desk essentials"],
  },
  {
    number: "04",
    icon: "peripherals",
    title: "IT peripherals",
    description:
      "Source the accessories and equipment that help your workplace connect, present, print and get more done.",
    tags: ["Printers", "Accessories", "Presentation"],
  },
  {
    number: "05",
    icon: "gift",
    title: "Corporate gifting",
    description:
      "Thoughtful gifting options for teams, clients and business occasions, with room to make each order your own.",
    tags: ["Gift sets", "Festive gifts", "Team occasions"],
  },
  {
    number: "06",
    icon: "supply",
    title: "Business sourcing",
    description:
      "Bring your requirements together and get help finding the right products for your office or organization.",
    tags: ["Bulk enquiries", "Product sourcing", "One point of contact"],
  },
];

const iconPaths = {
  print: (
    <>
      <path d="M7 8V3h10v5" />
      <path d="M6 17H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M7 14h10v7H7z" />
      <path d="M18 11h.01" />
    </>
  ),
  computer: (
    <>
      <rect x="3" y="3" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 16v5" />
      <path d="M7 7h10" />
    </>
  ),
  stationery: (
    <>
      <path d="m8 3 3 3-6 15-3 1 1-4 5-15Z" />
      <path d="m8 3 3 3M14 5h7M14 10h7M12 15h9M10 20h11" />
    </>
  ),
  peripherals: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4M7 8h10M7 12h5" />
    </>
  ),
  gift: (
    <>
      <path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15" />
      <path d="M12 6H8.5a2.5 2.5 0 1 1 2.5-2.5V6ZM12 6h3.5A2.5 2.5 0 1 0 13 3.5V6Z" />
    </>
  ),
  supply: (
    <>
      <path d="M3 7h11v11H3zM14 10h4l3 3v5h-7z" />
      <circle cx="7.5" cy="19" r="2" />
      <circle cx="17.5" cy="19" r="2" />
      <path d="M6 10h5M6 13h5" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
};

function Icon({ name, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
    >
      {iconPaths[name]}
    </svg>
  );
}

function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <div className="service-card-top">
        <span className="service-icon">
          <Icon name={service.icon} />
        </span>
        <span className="service-number">{service.number}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="service-tags">
        {service.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <a className="text-link" href="#contact" aria-label={`Enquire about ${service.title}`}>
        Enquire about this <Icon name="arrow" />
      </a>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  function handleEnquiry(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const requirement = formData.get("requirement");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nHow can we help?\n${requirement}`,
    );
    window.location.href = `mailto:info.sterlingspectrum@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home" aria-label="Sterling Spectrum home" onClick={closeMenu}>
            <img src="/sterling-spectrum-logo.png" alt="" />
            <span className="brand-name">
              <strong>Sterling</strong>
              <span>SPECTRUM</span>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
          <nav
            className={`main-nav${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            <a href="#services" onClick={closeMenu}>What we do</a>
            <a href="#about" onClick={closeMenu}>Why Sterling</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Talk to our team <Icon name="arrow" />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-shape hero-shape-one" />
          <div className="hero-shape hero-shape-two" />
          <div className="container hero-content">
            <div className="hero-copy">
              <div className="eyebrow"><span /> Your partner for business essentials</div>
              <h1>Better supplied.<br />Ready for <span>what’s next.</span></h1>
              <p className="hero-description">
                From the everyday things that keep an office moving to the details
                that make your brand memorable, Sterling Spectrum helps bring it
                all together.
              </p>
              <div className="hero-actions">
                <a className="button button-yellow" href="#services">
                  Explore what we do <Icon name="arrow" />
                </a>
                <a className="hero-phone" href="tel:+919211738770">
                  <span className="phone-mark">↗</span>
                  <span><small>Speak with our team</small><strong>+91 92117 38770</strong></span>
                </a>
              </div>
              <div className="hero-note">
                <span className="note-dash" />
                One reliable point of contact for your business needs.
              </div>
            </div>
            <div className="hero-visual" aria-label="Sterling Spectrum brand mark">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-card">
                <img src="/sterling-spectrum-logo.png" alt="Sterling Spectrum logo" />
                <span className="visual-card-label">SUPPLYING POSSIBILITIES</span>
              </div>
              <div className="floating-note note-top">
                <span className="note-icon">01</span>
                <span><strong>Office essentials</strong><small>Sorted in one place</small></span>
              </div>
              <div className="floating-note note-bottom">
                <span className="note-dot" />
                <span><strong>Made for business</strong><small>Local team · Delhi</small></span>
              </div>
              <span className="visual-spark spark-one">✳</span>
              <span className="visual-spark spark-two">✳</span>
            </div>
          </div>
          <div className="hero-bottom container">
            <span>SUPPLIES & SERVICES FOR WORKPLACES</span>
            <a href="#services">Scroll to explore <span>↓</span></a>
          </div>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading">
              <div>
                <div className="eyebrow eyebrow-blue"><span /> What we can help with</div>
                <h2>Everything your workday<br />needs to <em>work better.</em></h2>
              </div>
              <p>
                The right supplies make a difference. Explore our range of
                business essentials and tell us what your team needs.
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => <ServiceCard key={service.number} service={service} />)}
            </div>
          </div>
        </section>

        <section className="about section-pad" id="about">
          <div className="container about-inner">
            <div className="about-mark" aria-hidden="true">
              <span className="about-circle circle-blue" />
              <span className="about-circle circle-yellow" />
              <span className="about-star">✳</span>
              <span className="about-caption">A PARTNER<br />IN YOUR CORNER</span>
            </div>
            <div className="about-copy">
              <div className="eyebrow"><span /> A little about us</div>
              <h2>Good work starts<br />with the <em>right support.</em></h2>
              <p>
                Sterling Spectrum is a Delhi-based business supply partner for
                organizations that value a smoother workday. We bring together
                office essentials, technology, print and gifting—so you can
                spend less time sourcing and more time getting things done.
              </p>
              <p>
                Have a specific requirement or a longer product list? Share it
                with us. Our team will help you find a practical way forward.
              </p>
              <a className="button button-outline" href="#contact">
                Tell us what you need <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <div className="eyebrow"><span /> Let’s get started</div>
                <h2>What can we help<br />you <em>take care of?</em></h2>
                <p>
                  Tell us a little about what you’re looking for. We’ll be glad
                  to help you get the conversation started.
                </p>
                <div className="contact-details">
                  <a href="tel:+919211738770">
                    <span className="detail-icon">↗</span>
                    <span><small>Call us</small><strong>+91 92117 38770</strong></span>
                  </a>
                  <a href="mailto:info.sterlingspectrum@gmail.com">
                    <span className="detail-icon">@</span>
                    <span><small>Email us</small><strong>info.sterlingspectrum@gmail.com</strong></span>
                  </a>
                  <div className="contact-address">
                    <span className="detail-icon">⌖</span>
                    <span><small>Visit us</small><strong>B-18, East Arjun Nagar,<br />Shahdara, Delhi – 110032</strong></span>
                  </div>
                </div>
              </div>
              <form className="contact-form" onSubmit={handleEnquiry}>
                <div className="form-heading">
                  <span>01 — YOUR ENQUIRY</span>
                  <p>Share a few details and we’ll take it from there.</p>
                </div>
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" placeholder="How should we address you?" autoComplete="name" required />
                <label htmlFor="email">Work email</label>
                <input id="email" name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                <label htmlFor="requirement">What do you need?</label>
                <textarea id="requirement" name="requirement" rows="3" placeholder="Tell us about your products or project..." required />
                <button className="button button-yellow form-submit" type="submit">
                  Prepare your enquiry <Icon name="arrow" />
                </button>
                <small className="form-footnote">Your email app will open with your enquiry ready to send.</small>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <img src="/sterling-spectrum-logo.png" alt="" />
            <span className="brand-name"><strong>Sterling</strong><span>SPECTRUM</span></span>
          </a>
          <p>Business essentials, thoughtfully brought together.</p>
          <a className="footer-top" href="#home">Back to top ↑</a>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Sterling Spectrum</span>
          <span>B-18, East Arjun Nagar, Shahdara, Delhi – 110032</span>
        </div>
      </footer>
    </>
  );
}

export default App;
