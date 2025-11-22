export default function Footer() {
    return (
      <footer className="bg-[var(--cambridge-blue)] py-10 px-6 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
  
          {/* LOGO + TEXT */}
          <div>
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="GoSaffr Logo"
                className="h-12 object-contain"
              />
              <h2 className="text-xl font-bold text-[var(--primary)]">
                GoSaffr
              </h2>
            </div>
  
            <p className="text-[var(--text-secondary-light)] mt-3 text-sm leading-relaxed">
              Smart, safe and transparent rides across India.
            </p>
          </div>
  
          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold text-[var(--primary)] mb-3">Quick Links</h3>
            <ul className="space-y-2 text-[var(--text-secondary-light)] text-sm">
              <li className="hover:text-[var(--primary)] cursor-pointer">Ride</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Safety</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">About Us</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Pricing</li>
            </ul>
          </div>
  
          {/* SUPPORT */}
          <div>
            <h3 className="text-lg font-bold text-[var(--primary)] mb-3">Support</h3>
            <ul className="space-y-2 text-[var(--text-secondary-light)] text-sm">
              <li className="hover:text-[var(--primary)] cursor-pointer">Help Center</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Customer Support</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Cancellation Policy</li>
              <li className="hover:text-[var(--primary)] cursor-pointer">Terms & Privacy</li>
            </ul>
          </div>
  
          {/* SOCIALS */}
          <div>
            <h3 className="text-lg font-bold text-[var(--primary)] mb-3">Follow Us</h3>
  
            <div className="flex gap-4">
              {/* Instagram */}
              <a className="hover:opacity-70">
                <svg width="28" height="28" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="4" y="4" width="16" height="16" rx="5"></rect>
                  <circle cx="12" cy="12" r="3.5"></circle>
                  <circle cx="17" cy="7" r="1"></circle>
                </svg>
              </a>
  
              {/* Twitter */}
              <a className="hover:opacity-70">
                <svg width="28" height="28" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 5.8c-.8.4-1.7.7-2.5.8.9-.6 1.6-1.5 1.9-2.6-.9.6-1.8 1-2.8 1.2A4.5 4.5 0 0015.2 4c-2.5 0-4.5 2-4.5 4.5 0 .3 0 .7.1 1C7.2 9.3 4.1 7.7 2 5.2c-.4.7-.6 1.5-.6 2.4 0 1.5.7 2.8 1.8 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.4 4.3-.4.1-.9.2-1.4.2-.3 0-.6 0-.9-.1.6 1.8 2.3 3.1 4.3 3.2A9 9 0 012 19.6 12.7 12.7 0 008.7 21c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.5 1.6-1.3 2.2-2.1z"/>
                </svg>
              </a>
  
              {/* LinkedIn */}
              <a className="hover:opacity-70">
                <svg width="28" height="28" fill="none" stroke="var(--primary)" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h4v4H4zM4 10h4v10H4zM10 10h4v2h.1c.6-1 2-2 4-2 3 0 6 2.2 6 6v6h-4v-6c0-1.5-1-2.5-2.5-2.5S15 14.5 15 16v6h-4V10z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
  
        {/* COPYRIGHT */}
        <div className="text-center text-[var(--text-secondary-light)] text-sm mt-16">
          © {new Date().getFullYear()} GoSaffr. All rights reserved.
        </div>
      </footer>
    );
  }
  