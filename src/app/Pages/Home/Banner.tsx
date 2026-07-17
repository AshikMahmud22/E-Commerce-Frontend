"use client";

import Image from "next/image";
import Button from "@/app/components/ui/Button";
import BannerImage from "../../assets/Banner.png";

export default function Banner() {
  return (
    <section className="relative flex md:h-150 h-60 w-full items-end justify-center overflow-hidden">
      <Image
        src={BannerImage}
        alt="FIFA Heroes Iconic Jersey Banner"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto md:mb-10 mb-5 flex max-w-4xl flex-col items-center px-6 text-center">
        <div className="flex flex-col items-center gap-3 ">
          <Button href="/shop" size="sm" className="bg-transparent border hover:bg-white/10 ">
            Shop Now
          </Button>

          <p className="text-sm font-medium text-white drop-shadow-md">
            Free shipping on all orders over $100
          </p>
        </div>
      </div>
    </section>
  );
}