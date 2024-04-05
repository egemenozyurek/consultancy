import Link from "next/link";
import { motion } from "framer-motion";

const HeaderBar = () => {
  return (
    <motion.header
      className="bg-gray-900 text-white py-6 shadow-lg"
      initial={{ y: -250 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          Muhendislik Danismanlik Firmasi
        </h1>
        <nav className="space-x-6">
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Anasayfa
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Kurumsal
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Belgelendirme
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Test ve Analiz
          </Link>
          <Link
            href="/"
            className="text-lg font-medium hover:text-gray-300 transition duration-300"
          >
            Iletisim
          </Link>
        </nav>
      </div>
    </motion.header>
  );
};

export default HeaderBar;
