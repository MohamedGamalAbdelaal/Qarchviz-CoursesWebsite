import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import gallery from "./Gallery.module.css";
import { useEffect } from "react";
import { useState } from "react";

const width = window.innerWidth;

const Gallery = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
  };

  useEffect(() => {
    function handleScreenSize() {
      const width = window.innerWidth;

      if (width <= 480) {
        setSlidesToShow(1);
      } else if (width <= 768) {
        setSlidesToShow(2);
      } else if (width <= 1048) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4); // Default for wider screens
      }
    }

    // Run once on component mount
    handleScreenSize();

    // Add event listener for screen resize
    window.addEventListener("resize", handleScreenSize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  return (
    <>
      <div className={`${gallery.gallerySection}`}>
        <div className="container-fluid">
          <p>Gallery</p>
          <Slider {...settings}>
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/4.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/5.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Arch 1.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Arch 2.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/D1.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Desert day.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Desert night.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Exterior 1.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Exterior 2.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Exterior 3.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Exterior 4.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Image 1 Final.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Image 2 Final.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Image 3 Final.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Image 4 Final.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Image 6 Final.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/R1 .jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/R2 .jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Sanaa 0.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Sanaa 1.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Sanaa 2.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Sanaa 3.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Sanaa 4.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Shell 1.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Shot 3e.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/Steel 1.jpg"
              alt=""
            />
            <img
              className={`${gallery.imageSlide}`}
              src="./6. Gallery/Gallery Images/T1 .jpg"
              alt=""
            />
          </Slider>
        </div>
      </div>
    </>
  );
};
export default Gallery;
