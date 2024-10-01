"use client";
import React from "react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-teal-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ReceptenWeb</h1>
          <div>
            <Link href="/" className="mr-4 hover:underline">
              Home
            </Link>
            <Link href="/recipes" className="hover:underline">
              Recipes
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center flex-grow bg-yellow-100 p-8">
        <h1 className="text-4xl font-bold mb-4 text-teal-700">
          Welkom bij ReceptenWeb
        </h1>
        <p className="text-lg mb-8 text-center text-teal-600">
          Ontdek heerlijke recepten en deel je eigen creaties met de wereld.
        </p>
        <Link
          href="/recipes"
          className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700"
        >
          Bekijk Recepten
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-teal-600 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 ReceptenWeb. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
