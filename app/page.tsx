import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

function PricingSection() {
  return (
    <section id="pricing-section" className="max-container padding-container py-20">
      <h2 className="bold-40 mb-8 text-center">Pricing</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">Basic</h3>
          <p className="bold-32 mb-4 text-green-50">Free</p>
          <ul className="regular-16 mb-4 text-center">
            <li>Access to basic features</li>
            <li>Community support</li>
          </ul>
        </div>
        <div className="border-2 border-green-50 rounded-3xl p-8 bg-green-50 text-white shadow-lg w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">Pro</h3>
          <p className="bold-32 mb-4">$9.99/mo</p>
          <ul className="regular-16 mb-4 text-center">
            <li>All Basic features</li>
            <li>Offline maps</li>
            <li>Adventure scheduling</li>
            <li>Priority support</li>
          </ul>
        </div>
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">Enterprise</h3>
          <p className="bold-32 mb-4 text-green-50">Contact Us</p>
          <ul className="regular-16 mb-4 text-center">
            <li>Custom solutions</li>
            <li>Dedicated support</li>
            <li>Team management</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services-section" className="max-container padding-container py-20">
      <h2 className="bold-40 mb-8 text-center">Our Services</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">Guided Tours</h3>
          <p className="regular-16 mb-4 text-center">Join our expert-led tours to explore the best camping and hiking spots safely and enjoyably.</p>
        </div>
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">Equipment Rental</h3>
          <p className="regular-16 mb-4 text-center">Rent high-quality camping and hiking equipment for your next adventure at affordable prices.</p>
        </div>
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">Custom Itineraries</h3>
          <p className="regular-16 mb-4 text-center">Get personalized travel plans tailored to your interests, group size, and experience level.</p>
        </div>
      </div>
    </section>
  );
}

function HowHilinkWorkSection() {
  return (
    <section id="how-hilink-work-section" className="max-container padding-container py-20">
      <h2 className="bold-40 mb-8 text-center">How Hilink Works</h2>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">1. Discover</h3>
          <p className="regular-16 mb-4 text-center">Browse and explore the best camping and hiking spots curated by our community and experts.</p>
        </div>
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">2. Plan</h3>
          <p className="regular-16 mb-4 text-center">Create your adventure itinerary, book guided tours, and rent equipment all in one place.</p>
        </div>
        <div className="border rounded-3xl p-8 bg-white shadow-md w-full max-w-xs flex flex-col items-center">
          <h3 className="bold-20 mb-2">3. Adventure</h3>
          <p className="regular-16 mb-4 text-center">Enjoy your trip with offline maps, real-time support, and share your experience with the Hilink community.</p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <div id="hero-section"><Hero /></div>
      <HowHilinkWorkSection />
      <Camp />
      <div id="guide-section"><Guide /></div>
      <ServicesSection />
      <Features />
      <PricingSection />
      <div id="get-app-section"><GetApp /></div>
    </>
  )
}
