import { motion } from "framer-motion";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Corporate: React.FC = () => {
  return (
    <motion.div
      className="bg-gray-900 text-white py-6 shadow-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000} // Change slide every 5 seconds
          stopOnHover={false}
          transitionTime={1000} // Transition duration 1 second
          dynamicHeight={true}
          className="rounded-lg overflow-hidden"
        >
          <div>
            <Image
              src="/images/banner_225239853.jpg"
              alt="Company Image 1"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute bottom-0 left-0 bg-gray-900 bg-opacity-75 px-4 py-2 text-white"
            >
              Introduction text for Company Image 1
            </motion.p>
          </div>
          <div>
            <Image
              src="/images/banner_225239853.jpg"
              alt="Company Image 2"
              width={500}
              height={500}
              style={{ width: "100%", height: "auto" }}
            />
            <p className="legend">Introduction text for Company Image 2</p>
          </div>
          {/* Add more slides as needed */}
        </Carousel>
      </div>
    </motion.div>
  );
};

export default Corporate;
