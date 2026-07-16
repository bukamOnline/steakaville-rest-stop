"use client";

import { FormEvent, useState } from "react";

const menuHighlights = [
  {
    number: "01",
    name: "Escovitch Fish",
    description: "Whole fried fish topped with tangy pickled onion, carrot, and Scotch bonnet pepper.",
    image: "/authentic/escovitch-fish.jpg",
    position: "50% 48%",
  },
  {
    number: "02",
    name: "Garlic Butter Lobster",
    description: "Split Caribbean lobster grilled and finished with garlic butter and island seasoning.",
    image: "/authentic/garlic-butter-lobster.jpg",
    position: "50% 65%",
  },
  {
    number: "03",
    name: "Steamed Lobster & Vegetables",
    description: "Caribbean lobster steamed with okra, corn, broccoli, cauliflower, and fresh island herbs.",
    image: "/authentic/steamed-lobster.jpg",
    position: "50% 52%",
  },
  {
    number: "04",
    name: "Steamed Fish & Shrimp",
    description: "Whole fish and shrimp steamed in a savoury broth with okra, corn, and mixed vegetables.",
    image: "/authentic/steamed-fish-shrimp.jpg",
    position: "50% 62%",
  },
  {
    number: "05",
    name: "Brown Stew Fish",
    description: "Fried whole fish simmered in rich brown gravy and plated with rice, plantain, and vegetables.",
    image: "/authentic/brown-stew-fish.jpg",
    position: "50% 48%",
  },
  {
    number: "06",
    name: "Seafood Soup",
    description: "A hearty island soup filled with seafood, corn, dumpling, ground provisions, and warming spice.",
    image: "/authentic/seafood-soup.jpg",
    position: "50% 58%",
  },
  {
    number: "07",
    name: "Garlic Shrimp & Vegetables",
    description: "Seasoned shrimp tossed with broccoli, okra, cauliflower, corn, peppers, and carrots.",
    image: "/authentic/garlic-shrimp-vegetables.jpg",
    position: "50% 53%",
  },
  {
    number: "08",
    name: "Curry Seafood Platter",
    description: "A generous mix of island seafood simmered in Jamaican curry gravy with vegetables and ground provisions.",
    image: "/authentic/curry-lobster-seafood.jpg",
    position: "50% 42%",
  },
  {
    number: "09",
    name: "Steakaville Seafood Platter",
    description: "A generous spread of whole fish and shrimp with escovitch vegetables, bammy, and plantain.",
    image: "/authentic/seafood-platter.jpg",
    position: "50% 56%",
  },
];

const moreFavorites = [
  "Roast Jerk Chicken",
  "Mannish Water",
  "Curry Goat",
  "Conch Soup",
  "Roast Breadfruit",
];

const cateringOptions = [
  {
    title: "Family Gatherings",
    text: "Generous Jamaican dishes and grill favourites for the people you love.",
  },
  {
    title: "Parties & Celebrations",
    text: "Food, bar service, and an easygoing atmosphere for a proper celebration.",
  },
  {
    title: "Business & Community",
    text: "Flexible catering for meetings, launches, church events, and community days.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const guestCount = data.get("guests")?.toString().trim() || "Not provided";
    const eventType = data.get("eventType")?.toString().trim() || "Catering event";
    const eventDate = data.get("date")?.toString().trim() || "Not provided";
    const name = data.get("name")?.toString().trim() || "Guest";
    const phone = data.get("phone")?.toString().trim() || "Not provided";
    const notes = data.get("notes")?.toString().trim() || "No additional notes";

    const subject = encodeURIComponent(`Catering inquiry: ${eventType}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEvent: ${eventType}\nDate: ${eventDate}\nGuests: ${guestCount}\n\nDetails:\n${notes}`,
    );

    setFormStatus("Your email app is opening with the request ready to send.");
    window.location.href = `mailto:kimarleyfraser@yahoo.com?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <div className="top-strip" aria-label="Restaurant contact details">
        <p>Steakaville Rest Stop · Clinic Street · Claremont, St. Ann</p>
        <span aria-hidden="true">◆</span>
        <a href="tel:+18763870564">Call +1 876 387 0564</a>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Steakaville Rest Stop home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>
            <strong>STEAKAVILLE</strong>
            <small>REST STOP</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>Our Story</a>
          <a href="#menu" onClick={closeMenu}>Flavours</a>
          <a href="#catering" onClick={closeMenu}>Catering</a>
          <a href="#visit" onClick={closeMenu}>Visit</a>
          <a className="nav-cta" href="#inquiry" onClick={closeMenu}>Plan Your Event</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Restaurant · Bar · Catering</p>
          <h1>Fire. Flavour.<br /><span>Good vibes.</span></h1>
          <p className="hero-text">
            Authentic Jamaican Food from the grill, a welcoming bar, and catering made for memorable gatherings.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#inquiry">Get a Catering Quote</a>
            <a className="button button-ghost" href="tel:+18763870564">Call Steakaville</a>
          </div>
          <div className="slogan-lockup">
            <span>Our slogan</span>
            <strong>Road To Bob Marley</strong>
          </div>
        </div>

        <div className="hero-visual">
          <img
            className="hero-food-photo"
            src="/steakaville-main.jpg"
            alt="Chef outside Steakaville Rest Stop in Claremont, Jamaica"
          />
          <div className="rasta-lines" aria-hidden="true"><i /><i /><i /></div>
          <div className="placeholder-badge">
            <small>Welcome to</small>
            <strong>Steakaville Bar &amp; Grill</strong>
          </div>
          <div className="hero-stamp" aria-hidden="true">
            <span>FROM THE</span>
            <b>GRILL</b>
            <span>CLAREMONT</span>
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <div>
          <p className="eyebrow dark">Welcome to Steakaville</p>
          <h2>A roadside stop<br />with real soul.</h2>
        </div>
        <div className="intro-copy">
          <p className="lead">
            Steakaville Rest Stop is where the grill stays hot, the drinks stay cold, and everyone is welcome.
          </p>
          <p>
            Rooted in Claremont and influenced by Jamaica&apos;s unmistakable energy, we bring together a restaurant, bar, and full catering service for good food and even better company.
          </p>
          <a className="text-link" href="#visit">Find us in St. Ann <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="menu-section" id="menu">
        <div className="section-heading light">
          <p className="eyebrow">From the kitchen & bar</p>
          <h2>Big flavour lives here.</h2>
          <p>From the sea to the soup pot, this is the Jamaican food we&apos;re proud to serve.</p>
        </div>

        <div className="menu-grid">
          {menuHighlights.map((item) => (
            <article className="menu-card" key={item.name}>
              <div className="food-photo-wrap">
                <img
                  className="food-photo"
                  src={item.image}
                  alt={`${item.name} prepared by Steakaville Rest Stop`}
                  loading="lazy"
                  style={{ objectPosition: item.position }}
                />
                <span className="menu-number" aria-hidden="true">{item.number}</span>
              </div>
              <div className="menu-card-copy">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="more-favorites" aria-label="More Jamaican favourites">
          <strong>More Jamaican favourites</strong>
          <p>{moreFavorites.join(" · ")}</p>
          <span>Menu items may vary by availability. Ask us about today&apos;s specials.</span>
        </div>

        <div className="menu-note">
          <span>Planning a special spread?</span>
          <a href="#inquiry">Let&apos;s build your catering menu →</a>
        </div>
      </section>

      <section className="catering-section" id="catering">
        <div className="catering-photo" role="img" aria-label="An authentic Steakaville seafood and vegetable spread ready for guests">
          <div className="placeholder-badge light-badge">
            <small>Authentic Jamaican catering</small>
            <strong>Made by Steakaville</strong>
          </div>
        </div>

        <div className="catering-content">
          <p className="eyebrow dark">Catering by Steakaville</p>
          <h2>We bring the vibes to you.</h2>
          <p className="lead">
            From a backyard celebration to a community event, we&apos;ll help you serve food people remember.
          </p>
          <div className="catering-list">
            {cateringOptions.map((option, index) => (
              <article key={option.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{option.title}</h3>
                  <p>{option.text}</p>
                </div>
              </article>
            ))}
          </div>
          <a className="button button-dark" href="#inquiry">Start Your Catering Request</a>
        </div>
      </section>

      <section className="quote-banner" aria-label="Steakaville slogan">
        <p>Good food. Good people. One road.</p>
        <h2>Road To Bob Marley.</h2>
      </section>

      <section className="inquiry-section" id="inquiry">
        <div className="inquiry-copy">
          <p className="eyebrow">Tell us about your event</p>
          <h2>Let&apos;s cook up something special.</h2>
          <p>
            Share a few details and your email app will open with a ready-to-send catering request.
          </p>
          <div className="contact-quick-links">
            <a href="tel:+18763870564">
              <small>Call or WhatsApp</small>
              <strong>+1 876 387 0564</strong>
            </a>
            <a href="mailto:kimarleyfraser@yahoo.com">
              <small>Email us</small>
              <strong>kimarleyfraser@yahoo.com</strong>
            </a>
          </div>
        </div>

        <form className="inquiry-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              Your name
              <input name="name" type="text" autoComplete="name" placeholder="Full name" required />
            </label>
            <label>
              Phone number
              <input name="phone" type="tel" autoComplete="tel" placeholder="Best contact number" required />
            </label>
          </div>
          <div className="form-row">
            <label>
              Event type
              <select name="eventType" defaultValue="" required>
                <option value="" disabled>Choose one</option>
                <option>Birthday or celebration</option>
                <option>Wedding</option>
                <option>Business or community event</option>
                <option>Family gathering</option>
                <option>Other event</option>
              </select>
            </label>
            <label>
              Estimated guests
              <input name="guests" type="number" min="1" placeholder="e.g. 50" required />
            </label>
          </div>
          <label>
            Event date
            <input name="date" type="date" />
          </label>
          <label>
            Tell us what you need
            <textarea name="notes" rows={4} placeholder="Location, menu ideas, bar service, and anything else we should know..." required />
          </label>
          <button className="button button-primary submit-button" type="submit">Prepare My Catering Request</button>
          <p className="form-status" role="status" aria-live="polite">{formStatus}</p>
        </form>
      </section>

      <section className="visit-section" id="visit">
        <div className="visit-details">
          <p className="eyebrow dark">Come through</p>
          <h2>Find your way to Steakaville.</h2>
          <div className="visit-grid">
            <div>
              <small>Location</small>
              <strong>Steakaville Rest Stop<br />Clinic Street<br />Claremont, St. Ann, Jamaica</strong>
            </div>
            <div>
              <small>Contact</small>
              <a href="tel:+18763870564">+1 876 387 0564</a>
              <a href="mailto:kimarleyfraser@yahoo.com">kimarleyfraser@yahoo.com</a>
            </div>
            <div>
              <small>Follow</small>
              <a href="https://www.instagram.com/876steakaville/" target="_blank" rel="noreferrer">@876steakaville</a>
            </div>
          </div>
        </div>
        <a
          className="map-placeholder"
          href="https://www.google.com/maps/search/?api=1&query=Steakaville+Rest+Stop+Clinic+Street+Claremont+St+Ann+Jamaica"
          target="_blank"
          rel="noreferrer"
          aria-label="See the Steakaville Rest Stop location and open it in Google Maps"
        >
          <span className="map-pin" aria-hidden="true">●</span>
          <small>Clinic Street</small>
          <strong>Steakaville Rest Stop</strong>
          <span>Clinic Street · Claremont, St. Ann</span>
          <em>Open in Google Maps →</em>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>
            <strong>STEAKAVILLE</strong>
            <small>REST STOP</small>
          </span>
        </a>
        <p>Restaurant · Bar · Catering</p>
        <p>© {new Date().getFullYear()} Steakaville Rest Stop. Claremont, Jamaica.</p>
      </footer>

      <a
        className="whatsapp-fab"
        href="https://wa.me/18763870564"
        target="_blank"
        rel="noreferrer"
        aria-label="Message Steakaville on WhatsApp"
      >
        <span aria-hidden="true">WA</span>
        Message us
      </a>
    </main>
  );
}
