import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./Inaug.css";
import "./event.css";
import { EffectCoverflow, Pagination, Zoom } from "swiper/modules";
// Assume these components are defined in separate files
import Navbar from "./Nav";
import Footer from "./Footer";
import PhotoSwiper from "./EventSwiper";

const Product = () => {
  const productGallery = [
    { type: "image", src: "../img/events/products/product_2.png" },
    { type: "image", src: "../img/events/products/product_3.png" },
    { type: "image", src: "../img/events/products/product_4.png" },
    { type: "image", src: "../img/events/products/product_5.png" },
    { type: "image", src: "../img/events/products/product_6.png" },
    { type: "image", src: "../img/events/products/product_7.png" },
    { type: "image", src: "../img/events/products/product_8.png" },
    { type: "image", src: "../img/events/products/product_9.png" },
    { type: "image", src: "../img/events/products/product_10.png" },
  ];

  return (
    <>
      <main>
        <video
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          autoPlay
          loop
          muted
        >
          <source src="../img/bg_video.mp4" type="video/mp4" />
        </video>

        <header>
          <Navbar />
        </header>

        <h1 className="text-center text-white text-decoration-underline p-5">
          NSDC - PRODUCT
        </h1>

        <PhotoSwiper media={productGallery} />

        {/* <div id="tranding">
          <Swiper
            modules={[Navigation,EffectCoverflow,Pagination,Autoplay,Zoom]}
            className="tranding-slider"
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{
                delay: 13000,
                disableOnInteraction: false,
              }}
            loop={true}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,

            }}

            breakpoints={{

                320:{
                    width: 320,
                    slidesPerView: 3,
                    centeredSlides:true

                },

                640: {
                  width: 640,
                  slidesPerView: 1,
                },

                768: {
                  width: 768,
                  slidesPerView: 1,
                },

                1024: {
                    slidesPerView: 3,
                },

              }}


          >
            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img ">
                <video
                  id="vid"
                  data-fancybox="images"
                  src="../img/events/products/product_1.mp4"
                  controls
                ></video>
              </div>
            </SwiperSlide>

            <SwiperSlide className="tranding-slide">
              <div className="tranding-slide-img">
                <img
                  className=''
                  data-fancybox="images"
                   src="../img/events/products/product_2.png"
                  alt="Tranding"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide className="tranding-slide">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_3.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                     src="../img/events/products/product_4.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="tranding-slide">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_5.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="trading-slider">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_6.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="trading-slider">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_7.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="trading-slider">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_8.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>

            <SwiperSlide className="trading-slider">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_9.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
            <SwiperSlide className="trading-slider">
            <div class="swiper-slide tranding-slide">
                            <div class="tranding-slide-img ">
                                <img
                                    data-fancybox="images"
                                    src="../img/events/products/product_10.png"
                                    alt="Tranding"
                                    loading="lazy"
                                />
                            </div>
                        </div>
            </SwiperSlide>
          </Swiper>
        </div> */}

        <div className="event-container">
          <div className="event-header">
            <div className="event-timing">
              <p>
                <span>
                  📅 Date:
                  <span className="underline">15/09/2023</span>
                </span>
              </p>
              <p>
                <span>
                  ⏰ Time:
                  <span className="underline">09:30 AM - 04:30 PM</span>
                </span>
              </p>
            </div>
          </div>
          <div className="event-content">
            <div className="event-description">
              <h2>About</h2>
              <p>
                Under the Department of Artificial Intelligence and Data
                Science, the NSDC organized its inaugural event, the Product
                Showcase 'Tech X', inaugurated by Chief Guest Akshay Bharambe
                sir. This event highlighted technical products integrating
                machine learning, AI concepts, and database management systems.
                Notable exhibits included Parking Pal, an AI-powered parking
                management system, the Android ecosystem showcasing innovative
                mobile applications, Solomon CMS, a content management system
                leveraging machine learning algorithms, and Binaural Beats, an
                AI-driven music platform for cognitive enhancement. This
                showcase not only demonstrated the department's commitment to
                cutting-edge technology but also provided a platform for
                students to showcase their expertise and innovation in the field
                of AI and data science.
              </p>
            </div>
            <div className="event-highlights">
              <h2>Highlights</h2>
              <ul>
                <li>Event: Product Showcase 'Tech X' organized by NSDC</li>
                <li>Chief Guest: Akshay Bharambe sir</li>
                <li>
                  Key Highlights:
                  <ul>
                    <li>
                      Showcased innovative technical products applying AI, ML
                      and databases
                    </li>
                    <li>
                      Exhibits included Parking Pal (AI parking system), Android
                      apps, Solomon CMS, Binaural Beats music platform
                    </li>
                    <li>
                      Demonstrated department's commitment to cutting-edge
                      technology
                    </li>
                    <li>
                      Provided platform for students to showcase expertise and
                      innovation in AI and data science
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Product;
