"use client";

import { useEffect } from "react";

export default function ResponsibleBusinessHubPage() {
  useEffect(() => {
    window.location.href = "https://rbh.bgmea.com.bd/";
  }, []);

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
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Responsible Business Hub</h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-200">
            Redirecting to <a href="https://rbh.bgmea.com.bd/" className="underline hover:text-white">rbh.bgmea.com.bd</a>...
          </p>
        </div>
      </section>

      <section className="animate-fade-in-up opacity-0 py-20">
        <div className="container-custom text-center">
          <p className="mb-6 text-gray-600">If you are not redirected automatically, please click below:</p>
          <a
            href="https://rbh.bgmea.com.bd/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
          >
            Visit Responsible Business Hub
          </a>
        </div>
      </section>
    </>
  );
}
