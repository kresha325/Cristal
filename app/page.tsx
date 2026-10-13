"use client";

import { useState } from "react";
import Image from "next/image";
import { menuData, MenuCategory } from "@/lib/menu-data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("milkshakes");

  const currentCategory = menuData.find((cat) => cat.id === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-64 h-32">
              <Image
                src="/logo.png"
                alt="Kristal Lounge & Bar"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Kristal Lounge & Bar
          </h1>
          <p className="text-amber-700 text-lg">
            📍 Shadërvan, Prizren
          </p>
          <p className="text-gray-600 mt-2">
            @kristal_lounge_bar
          </p>
        </div>

        {/* Category Navigation */}
        <div className="mb-8">
          <div className="flex overflow-x-auto pb-4 gap-2 md:gap-3 scrollbar-hide">
            {menuData.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-amber-100 shadow-md"
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="text-4xl mr-3">{currentCategory?.icon}</span>
            {currentCategory?.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentCategory?.items.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-amber-50 to-white p-5 rounded-2xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
                    {item.name}
                  </h3>
                  <span className="text-xl font-bold text-amber-600 ml-2 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                {item.description && (
                  <p className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full inline-block">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-gray-600">
          <p className="mb-2">✨ Shije e paster... Kristal ✨</p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/kristal_lounge_bar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-amber-600 transition-colors"
            >
              📘
            </a>
            <a
              href="https://www.instagram.com/kristal_lounge_bar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-amber-600 transition-colors"
            >
              📷
            </a>
            <a
              href="https://www.tiktok.com/@kristal_lounge_bar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-amber-600 transition-colors"
            >
              🎵
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
