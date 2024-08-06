import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../ui/Button";

const images = [
  "https://images.unsplash.com/photo-1628285580621-929502824fbe?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628285581274-f5c932da5804?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628285580282-a1fabe3ddfb2?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1628285581237-9a969cc89f6d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handlePrev() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  }
  return (
    <section className="relative" id="gallery">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="h-imageBox w-full flex-shrink-0 md:h-[100dvh]"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="h-full w-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

      <Button
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 p-4 text-3xl text-stone-300"
        onClick={handlePrev}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>

      <Button
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 p-4 text-3xl text-stone-300"
        onClick={handleNext}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </section>
  );
}

export default Carousel;
