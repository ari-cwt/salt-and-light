import Image from "next/image";
import { Roboto, Noto_Serif_Display } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});
const notoSerifDisplay = Noto_Serif_Display({
  // Variable renamed for clarity
  subsets: ["latin"],
  weight: ["400"],
});

export default function AboutSection() {
  return (
    <section
      id="about"
      className={`${roboto.className} w-full py-20 px-6 md:px-12 bg-primary/50 text-gray-900 scroll-mt-32`}
    >
      <div className="max-w-6xl px-2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start md:min-h-[640px]">
        {/* Left column - Kiri */}
        <div className="flex flex-col justify-between self-end h-full">
          <div className="self-start">
            <h2 className="text-4xl md:text-6xl lg:text-6xl mb-6 font-bold">
              TENTANG <br />{" "}
              <span
                className={`${notoSerifDisplay.className} text-6xl md:text-5xl lg:text-7xl`}
              >
                Salt & Light
              </span>
            </h2>
          </div>
          <hr className="border-t border-black my-12 w-1/2" />

          <p className="leading-relaxed text-gray-800 mb-4">
            Selama lebih dari delapan tahun, Salt & Light telah menjadi bagian
            dari momen-momen penting yang tak terhitung jumlahnya — mulai dari
            pertemuan pribadi yang tulus hingga acara korporat dan aktivasi
            merek yang inspiratif di Jakarta. Kami percaya setiap acara memiliki
            kekuatan untuk menggerakkan orang, menghubungkan hati, dan
            meninggalkan kesan positif yang abadi. Keyakinan inilah yang
            mendorong kami untuk bekerja dengan ketulusan, kreativitas, dan
            tujuan dalam setiap acara yang kami rancang.
          </p>
          <p className="leading-relaxed text-gray-800">
            Sesuai dengan nama kami, Salt & Light hadir untuk membawa 'Rasa' dan
            'Cahaya' ke mana pun kami pergi — seperti garam yang memberi cita
            rasa bahkan dalam jumlah kecil, dan cahaya yang bersinar di ruang
            yang paling gelap. Kami melihat setiap proyek sebagai kesempatan
            untuk menciptakan makna, memicu inspirasi, dan membuat sesuatu yang
            indah yang memberikan dampak di luar hari pelaksanaan acara itu
            sendiri.
          </p>
        </div>

        {/* Right column - Kanan */}
        <div className="self-end">
          <Image
            src="/about.webp"
            alt="Tim Event Organizer Salt and Light sedang merencanakan acara di Jakarta"
            width={600}
            height={400}
            className="mb-6 object-cover w-full h-100" // <-- force height
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <p className="leading-relaxed text-gray-800">
            Dengan tim yang terdiri dari para kreator, perencana, dan pemimpi
            yang bersemangat, kami tidak hanya sekadar mengatur dan mendekorasi
            acara — kami menciptakan pengalaman yang menyentuh hati. Dari desain
            dan eksekusi hingga setiap detail kecil, kami bekerja sepenuh hati
            untuk mengubah ide menjadi momen yang menginspirasi, mengangkat
            semangat, dan meninggalkan jejak cahaya bagi setiap orang yang
            mengalaminya.
          </p>
        </div>
      </div>
    </section>
  );
}
