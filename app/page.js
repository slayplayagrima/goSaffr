import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAF4EF] ">
      <Header />

      <section className="max-w-full bg-[var(--cambridge-blue)] mx-auto px-23 pt-23 pb-20 grid grid-cols-1 md:grid-cols-2 gap-5 items-center">

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl font-black leading-none text-[var(--text-primary-light)]">
            Your Ride, Your Rules. India's Trusted Cab Service.
          </h1>

          <p className="text-lg text-[var(--text-secondary-light)] max-w-lg pb-8">
            Book a ride with transparent pricing, safety-first features,
            and the best service in India.
          </p>

          <div className="bg-white p-6 rounded-xl shadow-soft space-y-6">
            <input
              placeholder="Where to?"
              className="w-full h-14 rounded-lg border border-gray-300 px-4 text-base focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />

            <div className="grid grid-cols-2 gap-4">
              <select
                className="w-full h-12 rounded-lg border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]">
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bengaluru</option>
              </select>

              <div className="flex items-center justify-center bg-gray-100 rounded-lg text-sm font-semibold">
                Estimated Fare:
                <span className="text-[var(--russian-green-dark)] ml-1">₹250</span>
              </div>
            </div>

            <button className="w-full h-14 rounded-lg bg-[var(--primary)] text-white font-bold text-lg hover:bg-[var(--primary-light)] transition">
              Find a Ride
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img src="/image.png" alt="Hero Image" className="w-full max-w-lg rounded-2xl shadow-soft"/>
        </div>

      </section>
      <section className="py-20 px-15 bg-[#EAF4EF] max-w-full mx-auto mt-20">
        <div className="text-center  max-w-3xl mx-auto mb-14">
          <h1 className="text-4xl font-black text-[var(--primary)]">
            Why Ride with GoSaffr?
          </h1>
          <p className="text-[var(--text-secondary-light)] mt-3">
            We are committed to providing a safe, reliable, and comfortable experience for every rider.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* 1 - Transparent Pricing */}
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <svg width="32" height="32" fill="none" stroke="var(--russian-green)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M7 7h10v10H7z" strokeLinejoin="round"/>
              <path d="M12 7v10" />
              <path d="M7 12h10" />
            </svg>

            <h3 className="font-bold text-lg mt-3">Transparent Pricing</h3>
            <p className="text-[var(--text-secondary-light)] text-sm mt-1">
              No hidden fees. Know your fare before you book.
            </p>
          </div>

          {/* 2 - Safety-First */}
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <svg width="32" height="32" fill="none" stroke="var(--russian-green)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2l7 4v6c0 5-3.5 9-7 10-3.5-1-7-5-7-10V6l7-4z"/>
            </svg>

            <h3 className="font-bold text-lg mt-3">Safety-First</h3>
            <p className="text-[var(--text-secondary-light)] text-sm mt-1">
              Verified drivers and in-app safety features to protect you.
            </p>
          </div>

          {/* 3 - Female-Friendly
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <svg width="32" height="32" fill="none" stroke="var(--russian-green)" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="7" r="5" />
              <path d="M12 12v10M9 18h6" />
            </svg>

            <h3 className="font-bold text-lg mt-3">Female-Friendly</h3>
            <p className="text-[var(--text-secondary-light)] text-sm mt-1">
              Special protocols and options to ensure a secure ride for women.
            </p>
          </div> */}

          {/* 4 - Driver Transparency */}
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <svg width="32" height="32" fill="none" stroke="var(--russian-green)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M8 8h8M8 12h5M8 16h3" />
            </svg>

            <h3 className="font-bold text-lg mt-3">Driver Transparency</h3>
            <p className="text-[var(--text-secondary-light)] text-sm mt-1">
              View driver ratings and feedback before you confirm your ride.
            </p>
          </div>

          {/* 5 - Clean Cars */}
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <svg width="32" height="32" fill="none" stroke="var(--russian-green)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 13l1-3h16l1 3M5 16h14" />
              <circle cx="7" cy="17" r="2" />
              <circle cx="17" cy="17" r="2" />
            </svg>

            <h3 className="font-bold text-lg mt-3">Clean Cars</h3>
            <p className="text-[var(--text-secondary-light)] text-sm mt-1">
              Our fleet is regularly sanitized and maintained for your comfort.
            </p>
          </div>

          {/* 6 - 24/7 Support */}
          <div className="bg-white p-6 rounded-xl shadow-soft">
            <svg width="32" height="32" fill="none" stroke="var(--russian-green)" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1010 10" />
              <path d="M12 6v6l4 2" />
            </svg>

            <h3 className="font-bold text-lg mt-3">24/7 Support</h3>
            <p className="text-[var(--text-secondary-light)] text-sm mt-1">
              Dedicated customer support is always available to assist you.
            </p>
          </div>

        </div>
      </section>


      <section className="py-25 px-6 bg-[#EAF4EF] max-w-full mx-auto mt-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-black text-[var(--primary)]">
            Trusted by Riders Across India
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 px-9 gap-8">

          {/* CARD 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-soft flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/person1.png"
                className="w-14 h-14 rounded-full object-cover"
                alt="Priya"
              />
              <div>
                <h3 className="font-bold text-lg">Priya S.</h3>
                <p className="text-yellow-500 text-sm">★★★★★</p>
              </div>
            </div>

            <p className="text-[var(--text-secondary-light)] text-sm leading-relaxed">
              "GoSaffr is my go-to for late-night travel. The safety features are top-notch and
              give me peace of mind."
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-soft flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/person2.png"
                className="w-14 h-14 rounded-full object-cover"
                alt="Rohan"
              />
              <div>
                <h3 className="font-bold text-lg">Rohan M.</h3>
                <p className="text-yellow-500 text-sm">★★★★★</p>
              </div>
            </div>

            <p className="text-[var(--text-secondary-light)] text-sm leading-relaxed">
              "Finally, a cab service with transparent pricing! I know exactly what I'm paying
              before the ride starts. Highly recommend."
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-soft flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <img
                src="/person3.png"
                className="w-14 h-14 rounded-full object-cover"
                alt="Anjali"
              />
              <div>
                <h3 className="font-bold text-lg">Anjali K.</h3>
                <p className="text-yellow-500 text-sm">★★★★★</p>
              </div>
            </div>

            <p className="text-[var(--text-secondary-light)] text-sm leading-relaxed">
              "The cars are always so clean and the drivers are professional. It's a premium
              experience without the premium price tag."
            </p>
          </div>

        </div>
</section>
<section className="py-24 px-10 max-w-full mx-auto mt-20">
  
  {/* Heading + Subheading */}
  <div className="text-center max-w-3xl mx-auto mb-16">
    <h1 className="text-4xl font-black text-[var(--primary)]">
      Meet the Team
    </h1>
    <p className="text-[var(--text-secondary-light)] mt-3">
      The driving force behind our mission to revolutionize travel in India.
    </p>
  </div>

  {/* Team Cards */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-6">

    {/* Card 1 */}
    <div className="bg-white p-8 rounded-2xl shadow-soft text-center">
      <div className="flex justify-center mb-4">
        <img 
          src="/akash.png" 
          className="w-24 h-24 rounded-full object-cover ring-4 ring-[var(--cambridge-blue)]"
          alt="Vikas" 
        />
      </div>

      <h3 className="text-xl font-black text-[var(--text-primary-light)]">
          Vikas
      </h3>
      <p className="text-[var(--russian-green-dark)] text-sm font-semibold mb-3">
        Co-Founder
      </p>

      <p className="text-[var(--text-secondary-light)] text-sm leading-relaxed">
        With a background in logistics and a passion for technology, Vikas is 
        dedicated to making GoSaffr the most efficient and reliable cab service 
        in the country.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-8 rounded-2xl shadow-soft text-center">
      <div className="flex justify-center mb-4">
        <img 
          src="/meera.png" 
          className="w-24 h-24 rounded-full object-cover ring-4 ring-[var(--sage)]"
          alt="Yogesh" 
        />
      </div>

      <h3 className="text-xl font-black text-[var(--text-primary-light)]">
        Yogesh
      </h3>
      <p className="text-[var(--russian-green-dark)] text-sm font-semibold mb-3">
        Co-Founder
      </p>

      <p className="text-[var(--text-secondary-light)] text-sm leading-relaxed">
        Yogesh leads our tech innovation, focusing on creating a seamless app 
        experience and robust safety features to protect our riders and drivers.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-8 rounded-2xl shadow-soft text-center">
      <div className="flex justify-center mb-4">
        <img 
          src="/vikram.png" 
          className="w-24 h-24 rounded-full object-cover ring-4 ring-[var(--primary)]"
          alt="Saransh" 
        />
      </div>

      <h3 className="text-xl font-black text-[var(--text-primary-light)]">
        Saransh
      </h3>
      <p className="text-[var(--russian-green-dark)] text-sm font-semibold mb-3">
        Co-Founder
      </p>

      <p className="text-[var(--text-secondary-light)] text-sm leading-relaxed">
        Saransh manages our operations, ensuring every ride is smooth and every 
        driver is empowered to provide the best possible service to our community.
      </p>
    </div>

  </div>

</section>
<Footer/>
    </main>
  );
}
