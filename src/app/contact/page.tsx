"use client";

import Link from "next/link";

const contactInfo = [
  { icon: "📍", label: "Our Address", value: "House-36, Flat-C2 (3rd Floor), Garib-E-Newaz Avenue, Sector-13, Uttara, Dhaka-1230. Bangladesh." },
  { icon: "📞", label: "Phone", value: "+88 02 224471488, +88 01805503650" },
  { icon: "✉️", label: "Email", value: "info@jalalabadassociation.org" },
  { icon: "🕐", label: "Working Hours", value: "Sun - Thu: 9:00 AM - 5:00 PM" },
];

export default function ContactPage() {
  return (
    <>
      <section
        className="animate-fade-in-up opacity-0 flex min-h-[40vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/breadcrumb_bg.png')",
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            We would love to hear from you. Get in touch with us today.
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary">Send Us a Message</h2>
              <p className="mb-8 text-text-light">
                Have a question or want to get involved? Fill out the form below.
              </p>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-dark">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-dark">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-dark">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-primary-light"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary">Get in Touch</h2>
              <p className="mb-8 text-text-light">
                Here is how you can reach us directly.
              </p>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="animate-fade-in-up opacity-0 flex items-start gap-4 rounded-xl bg-accent p-5" style={{ animationDelay: `${(index % 4 + 1) * 100}ms` }}>
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <p className="text-sm font-medium text-text-light">{info.label}</p>
                      <p className="text-base font-semibold text-dark">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-lg font-bold text-primary">Follow Us</h3>
                <div className="flex gap-4">
                  <Link href="https://facebook.com" target="_blank" className="animate-fade-in-up opacity-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#1877F2] text-white transition-all hover:scale-110 hover:shadow-lg" style={{ animationDelay: `${(1) * 100}ms` }}>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  </Link>
                  <Link href="https://twitter.com" target="_blank" className="animate-fade-in-up opacity-0 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-all hover:scale-110 hover:shadow-lg" style={{ animationDelay: `${(2) * 100}ms` }}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </Link>
                  <Link href="https://instagram.com" target="_blank" className="animate-fade-in-up opacity-0 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white transition-all hover:scale-110 hover:shadow-lg" style={{ animationDelay: `${(3) * 100}ms` }}>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </Link>
                  <Link href="https://linkedin.com" target="_blank" className="animate-fade-in-up opacity-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-all hover:scale-110 hover:shadow-lg" style={{ animationDelay: `${(4) * 100}ms` }}>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
