"use client";

import Marquee from "react-fast-marquee";

const ANNOUNCEMENTS = [
  "🚚 Free Shipping on orders over $100",
  "🔥 Summer Sale • Up to 50% OFF",
  "🎉 New Arrivals Available Now",
];

export default function PreHeader() {
  return (
    <Marquee
      speed={40}
      pauseOnHover
      autoFill
      gradient={false}
    >
      {ANNOUNCEMENTS.map((item, index) => (
        <span
          key={index}
          className="mx-8 text-sm tracking-wide"
        >
          {item}
        </span>
      ))}
    </Marquee>
  );
}