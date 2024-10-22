
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./CoverflowCarousel.css"; // For custom styles

// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", right: "10px" }} // Adjust position
//         onClick={onClick}
//       />
//     );
//   }

//   // Custom Prev Arrow
//   function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", left: "10px" }} // Adjust position
//         onClick={onClick}
//       />
//     );
//   }

// const CoverflowCarousel = ({media}) => {
//   const settings = {

//     className: "center",
//     centerMode: true,
//     centerPadding: "80px",
//     slidesToShow: 3, // Display 3 slides on large screens
//     infinite: true,
//     speed: 3000,
//     autoplay: true,
//     autoplaySpeed: 13000,
//     focusOnSelect: true,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1440, // Desktop
//         settings: {
//           slidesToShow: 3,
//           centerPadding: "60px",

//         },
//       },
//       {
//         breakpoint: 1024, // Laptops and tablets
//         settings: {
//           slidesToShow: 2,
//           centerPadding: "80px",
//         },
//       },
//       {
//         breakpoint: 768, // Mobile devices
//         settings: {
//           slidesToShow: 1,
//           centerPadding: "20px",
//           className:"center",
//           centerMode: true,
//           speed:500,

//         },
//       },
//     ],
//   };

//   return (
//     <Slider {...settings}>
//       {media.map((item, index) => (
//         <div key={index}
//         className="carousel-item "
//         >
//           {item.type === "image" ? (
//             <img src={item.src} alt={item.alt} />
//           ) : (
//             <video controls>
//               <source src={item.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           )}
//         </div>
//       ))}
//     </Slider>
//   );
// };

// export default CoverflowCarousel;


import React, { useState,useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CoverflowCarousel.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", right: "10px" }}
        onClick={onClick}
      />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "10px" }}
        onClick={onClick}
      />
    );
}

const CoverflowCarousel = ({ media }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }


    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);


  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "80px",
    slidesToShow: 3,
    infinite: true,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 13000,
    focusOnSelect: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440, // Desktop
        settings: {
          slidesToShow: 3,
          centerPadding: "60px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
          className: "center",
          centerMode: true,
          speed: 500,
        },
      },
    ],
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Slider {...settings}>
        {media.map((item, index) => (
          <div
            key={index}
            className="carousel-item"
            onClick={() => handleItemClick(item)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={item.alt} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </Slider>


      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content">
            {/* <span className="close" onClick={handleCloseModal}>
              &times;
            </span> */}
            {selectedItem.type === "image" ? (
              <img src={selectedItem.src} alt={selectedItem.alt} />
            ) : (
              <video controls autoPlay>
                <source src={selectedItem.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CoverflowCarousel;
