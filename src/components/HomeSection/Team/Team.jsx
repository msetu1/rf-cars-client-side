import CommonText from "../../../Ui/CommonText/CommonText";
import socialIcon from "../../../assets/icons/Group 38728.png";
import img1 from "../../../assets/images/team/1.jpg";
import img2 from "../../../assets/images/team/2.jpg";
import img3 from "../../../assets/images/team/3.jpg";
import { useEffect } from "react";
import Glide from "@glidejs/glide";

const Team = () => {
  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <div className="lg:my-20">
      <CommonText
        subText={`Team`}
        header={`Meet Our Team`}
        shortDes={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  `}
      />
      <div className="max-w-7xl mx-auto mt-16">
        <div className="glide-06 relative w-full overflow-hidden rounded bg-white shadow-xl shadow-slate-200">
          {/*    <!-- Slides --> */}
          <div className="overflow-hidden" data-glide-el="track">
            <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
              <li>
                <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
                  <div>
                    <div className="flex items-center justify-center rounded-xl m-5 ">
                      <img
                        className="h-[250px] w-full rounded-xl "
                        src={img1}
                        alt=""
                      />
                    </div>
                    <h2 className=" font-bold mt-2 text-2xl my-2">
                      Cools Led Light
                    </h2>
                    <p className="text-xl font-bold text-gray-500 mb-5">
                      Engine Expert
                    </p>
                    <div className="flex items-center justify-center">
                      <img className="mb-10" src={socialIcon} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
                  <div>
                    <div className="flex items-center justify-center rounded-xl m-5 ">
                      <img
                        className="h-[250px] w-full rounded-xl "
                        src={img2}
                        alt=""
                      />
                    </div>
                    <h2 className=" font-bold mt-2 text-2xl my-2">
                      Cools Led Light
                    </h2>
                    <p className="text-xl font-bold text-gray-500 mb-5">
                      Engine Expert
                    </p>
                    <div className="flex items-center justify-center">
                      <img className="mb-10" src={socialIcon} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
                  <div>
                    <div className="flex items-center justify-center rounded-xl m-5 ">
                      <img
                        className="h-[250px] w-full rounded-xl "
                        src={img3}
                        alt=""
                      />
                    </div>
                    <h2 className=" font-bold mt-2 text-2xl my-2">
                      Cools Led Light
                    </h2>
                    <p className="text-xl font-bold text-gray-500 mb-5">
                      Engine Expert
                    </p>
                    <div className="flex items-center justify-center">
                      <img className="mb-10" src={socialIcon} alt="" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="text-center rounded-xl drop-shadow-lg border bg-base-100">
                  <div>
                    <div className="flex items-center justify-center rounded-xl m-5 ">
                      <img
                        className="h-[250px] w-full rounded-xl "
                        src={img2}
                        alt=""
                      />
                    </div>
                    <h2 className=" font-bold mt-2 text-2xl my-2">
                      Cools Led Light
                    </h2>
                    <p className="text-xl font-bold text-gray-500 mb-5">
                      Engine Expert
                    </p>
                    <div className="flex items-center justify-center">
                      <img className="mb-10" src={socialIcon} alt="" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          {/*    <!-- Controls --> */}
          <div
            className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
            data-glide-el="controls"
          >
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir="<"
              aria-label="prev slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>prev slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
            </button>
            <button
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
              data-glide-dir=">"
              aria-label="next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <title>next slide</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
          {/*    <!-- Indicators --> */}
          <div
            className="absolute bottom-0 flex w-full items-center justify-center gap-2"
            data-glide-el="controls[nav]"
          >
            <button
              className="group p-4"
              data-glide-dir="=0"
              aria-label="goto slide 1"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=1"
              aria-label="goto slide 2"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=2"
              aria-label="goto slide 3"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
            <button
              className="group p-4"
              data-glide-dir="=3"
              aria-label="goto slide 4"
            >
              <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
