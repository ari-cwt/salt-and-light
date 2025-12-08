"use client";

import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";

const notoSerifDisplay = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Jonathan P.",
      date: "October 2025",
      review:
        "Professional team and fast service. They helped us handle events efficiently. The commitment to delivering high-quality events is truly unmatched.",
      image: "/user-review-2.webp",
    },
    {
      name: "Ayu R.",
      date: "September 2025",
      review:
        "Partner event yang sangat responsif dan dapat diandalkan. Sangat direkomendasikan untuk penyelenggaraan acara! Mereka membuat hari istimewa kami berjalan dengan sangat lancar dan indah.",
      image: "/user-review-4.webp",
    },
    {
      name: "Michael L.",
      date: "August 2025",
      review:
        "Excellent support from start to finish. Communication is clear and pricing is fair. We are incredibly happy with the results they achieved for our product launch.",
      image: "/user-review-3.webp",
    },
    {
      name: "Jessica V.",
      date: "July 2025",
      review:
        "Salt & Light memberikan sentuhan kreatif yang luar biasa pada acara korporat kami. Semua orang menyukai dekorasinya dan eksekusinya yang sangat mulus.",
      image: "/user-review-1.webp",
    },
  ];

  return (
    <section
      // Consistent section padding and background
      className={`${roboto.className} w-full py-20 px-6 md:px-12 bg-primary text-gray-900 scroll-mt-24`}
      id="reviews"
    >
      <div className="max-w-6xl px-2 mx-auto">
        {/* Title Block - Consistent style */}
        <h2 className="text-4xl md:text-6xl font-bold mb-10 md:mb-16">
          <span className="leading-tight">
            KATA MEREKA <br /> TENTANG{" "}
          </span>
          <span
            className={`${notoSerifDisplay.className} text-6xl text-gray-700`}
          >
            Salt & Light
          </span>
        </h2>

        {/* Reviews Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r, i) => (
            // Replaced Shadcn Card with a custom styled div
            <div
              key={i}
              className={`
                hover:shadow-xl transition duration-300 rounded-lg overflow-hidden border border-gray-200 shadow-md 
                flex flex-col justify-between h-full bg-primary/50
                ${i > 1 ? "hidden md:flex" : ""} 
              `}
            >
              {/* Image section (Replaced video/iframe) */}
              <div className="aspect-video w-full relative flex-none">
                <Image
                  src={r.image}
                  alt={`${r.name}'s review highlight`}
                  width={600}
                  height={400}
                  className="object-cover w-full h-60"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>

              {/* Replaced CardHeader with div */}
              <div className="flex-none pt-4 pb-2 px-4">
                {/* Replaced CardTitle with h3 */}
                <h3 className="text-xl font-semibold">{r.name}</h3>
                <p className="text-sm text-gray-500">{r.date}</p>
              </div>

              {/* Replaced CardContent with div */}
              <div className="flex-1 flex items-end pt-0 pb-4 px-4">
                <p className="text-gray-700 leading-relaxed text-sm italic">
                  "{r.review}"
                </p>
              </div>

              {/* Footer/Rating */}
              <div className="p-4 pt-0 flex-none">
                <span className="text-lg text-yellow-500">★★★★★</span>
                <span className="text-sm text-gray-500 ml-2">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
