
import { motion } from "framer-motion";
import { Instagram, Snapchat, ArrowUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/entry-music.mp3");
    audio.loop = true;
    audio.volume = 0.5;
    if (!isMuted) {
      audio.play();
    }
    return () => audio.pause();
  }, [isMuted]);

  const playClickSound = () => {
    const click = new Audio("/click.mp3");
    click.volume = 0.3;
    click.play();
  };

  return (
    <div className="bg-black text-white scroll-smooth">
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="fixed top-4 right-4 z-50 bg-white text-black px-4 py-2 rounded-xl shadow-md hover:bg-gray-200"
      >
        {isMuted ? "تشغيل الصوت" : "كتم الصوت"}
      </button>

      {/* معرض الصور */}
      <section id="gallery" className="py-20 px-6 bg-gray-950 text-white text-center">
        <h2 className="text-3xl font-bold mb-10">📸 معرض الصور</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={`/gallery/img${num}.jpg`}
                alt={`صورة ${num}`}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ... باقي الأقسام ... */}

      {/* أيقونة الرجوع للأعلى */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-xl hover:bg-gray-300 transition"
      >
        <ArrowUp />
      </button>
    </div>
  );
}
{/* زر نشر شكلي */}
<div className="fixed bottom-6 left-6 z-50">
  <button
    onClick={() => {
      playClickSound();
      alert("تم إرسال طلب النشر! ✅ (رمزي فقط)");
    }}
    className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition"
  >
    🚀 نشر التعديلات
  </button>
</div>
