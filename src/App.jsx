import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          // eslint-disable-next-line react/jsx-key
          data[0].map((canvasdets) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50">
            <div className="brand text-2xl font-md">thirtysixstudios</div>
            <div className="links flex gap-10">
              {["Home", "About", "Projects", "Contact"].map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-md hover:text-gray-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
          <div className="textcontainer  w-full px-[25%]">
            <div className="text w-[80%]">
              <h3 className="text-4xl leading-[1.2]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-lg w-[80%] mt-10 font-normal">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-lg mt-5">Scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
            <h1
              ref={headingref}
              className="text-[15rem] font-normal tracking-tight leading-none pl-5"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full relative h-screen flex mt-32 px-10">
        {showCanvas &&
          // eslint-disable-next-line react/jsx-key
          data[1].map((canvasdets) => <Canvas details={canvasdets} />)}

        <div>

          <h1 className="text-6xl tracking-tighter">About the brand</h1>
          <p className="text-xl leading-[1.8] w-[80%] mt-10 font-light">
            we are a team of designers, developers, and strategists who are
            passionate about creating digital experiences that are both beautiful
            and functional, we are a team of designers, developers, and
            strategists who are passionate about creating digital experiences that
            are both beautiful and functional.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed hic voluptas placeat consectetur soluta natus et fugiat necessitatibus nostrum numquam. Aliquam nisi maiores aut laborum adipisci blanditiis assumenda incidunt maxime?
          </p>
        </div>

        <img
          className="w-[80%] mt-10"
          src="https://directus.funkhaus.io/assets/b3b5697d-95a0-4af5-ba59-b1d423411b1c?withoutEnlargement=true&fit=outside&width=1400&height=1400"
          alt=""
        />
      </div>
      <div>

        <footer className="w-full min-h-[40vh] bg-black text-white mt-32 px-10 py-20">
          <div className="footer-content flex flex-col gap-20">
            <div className="footer-top flex justify-between items-start">
              <div className="footer-left">
                <h2 className="text-4xl font-light mb-8">Let's create something amazing together</h2>
                <a
                  href="mailto:hello@thirtysixstudio.com"
                  className="text-2xl hover:opacity-60 transition-opacity duration-300"
                >
                  hello@thirtysixstudio.com
                </a>
              </div>

              <div className="footer-right flex gap-20">
                <div className="footer-links">
                  <h3 className="text-lg mb-4 opacity-60">Navigation</h3>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">Home</a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">Work</a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">About</a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">Contact</a>
                    </li>
                  </ul>
                </div>

                <div className="footer-social">
                  <h3 className="text-lg mb-4 opacity-60">Social</h3>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">Instagram</a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">Twitter</a>
                    </li>
                    <li>
                      <a href="#" className="hover:opacity-60 transition-opacity duration-300">LinkedIn</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="footer-bottom flex justify-between items-center pt-10 border-t border-white/20">
              <p className="opacity-60">© 2024 Thirtysixstudio. All rights reserved.</p>
              <p className="opacity-60">Made with ♥️ in India</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;