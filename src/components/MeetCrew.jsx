import React, { useRef, useState } from "react";

const features = [
  {
    icon: "♙",
    title: "Experienced",
    subtitle: "Team",
  },
  {
    icon: "⚙",
    title: "Custom",
    subtitle: "Builds",
  },
  {
    icon: "⌂",
    title: "Adventure",
    subtitle: "Driven",
  },
];

const MeetCrew = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-[#f8f3eb]">
      {/* ================= YELLOW BACKGROUND SHAPE ================= */}
      <div
        className="
          absolute
          right-0
          top-0
          h-[390px]
          w-[48%]
          overflow-hidden
          bg-[#ffd20a]
          rounded-bl-[220px]
          rounded-tl-[90px]
          sm:h-[450px]
          lg:h-[500px]
          lg:w-[48%]
        "
      />

      {/* ================= MOUNTAIN DECORATION ================= */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          h-[170px]
          w-[46%]
          opacity-30
        "
      >
        {/* Mountain layers */}
        <div
          className="
            absolute
            bottom-0
            left-[5%]
            h-[100px]
            w-[90px]
            rounded-t-[50px]
            bg-[#b6c98c]
          "
          style={{
            clipPath:
              "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        <div
          className="
            absolute
            bottom-0
            left-[20%]
            h-[135px]
            w-[130px]
            bg-[#a9c27c]
          "
          style={{
            clipPath:
              "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        <div
          className="
            absolute
            bottom-0
            left-[37%]
            h-[105px]
            w-[110px]
            bg-[#b6c98c]
          "
          style={{
            clipPath:
              "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />

        {/* Trees */}
        <div className="absolute bottom-0 left-[2%] text-[90px] leading-none">
          🌲
        </div>

        <div className="absolute bottom-0 left-[12%] text-[70px] leading-none">
          🌲
        </div>

        <div className="absolute bottom-0 left-[30%] text-[80px] leading-none">
          🌲
        </div>

        <div className="absolute bottom-0 left-[43%] text-[60px] leading-none">
          🌲
        </div>

        <div className="absolute bottom-0 left-[52%] text-[75px] leading-none">
          🌲
        </div>
      </div>

      {/* ================= MAIN CONTAINER ================= */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[600px]
          max-w-[1250px]
          items-center
          px-6
          py-16
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            w-full
            max-w-[490px]
            pt-8
            lg:pt-0
          "
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-2">
            <span className="h-[1px] w-[18px] bg-[#263238]" />

            <span
              className="
                text-[8px]
                font-semibold
                uppercase
                tracking-[1.4px]
                text-[#34413d]
              "
            >
              Our Story
            </span>
          </div>

          {/* Heading */}
          <h1
            className="
              max-w-[420px]
              text-[38px]
              font-black
              leading-[0.96]
              tracking-[-1.5px]
              text-[#252b38]
              sm:text-[44px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            Meet Mat & the
            <br />
            Mango Vans Crew.
          </h1>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-[410px]
              text-[11px]
              font-normal
              leading-[17px]
              text-[#656565]
              sm:text-[12px]
            "
          >
            Get to know Mat, the founder, and the talented team behind
            Mango Vans. We're a group of passionate builders, problem-solvers,
            and adventure enthusiasts dedicated to creating high-quality
            custom vans that help you experience the best of van life on your
            own terms.
          </p>

          {/* Button + Signature */}
          <div className="mt-7 flex items-center gap-8">
            {/* Watch Button */}
            <button
              onClick={handlePlay}
              className="
                flex
                h-[38px]
                items-center
                gap-2
                rounded-full
                bg-[#ffd000]
                px-5
                text-[9px]
                font-bold
                text-[#1d342c]
                shadow-[0_5px_15px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_20px_rgba(0,0,0,0.14)]
              "
            >
              <span
                className="
                  flex
                  h-[15px]
                  w-[15px]
                  items-center
                  justify-center
                  rounded-full
                  bg-[#183f32]
                  text-[7px]
                  text-white
                "
              >
                ▶
              </span>

              Watch Our Story
            </button>

            {/* Signature */}
            <div className="relative">
              <div
                className="
                  rotate-[-6deg]
                  font-serif
                  text-[9px]
                  italic
                  leading-[11px]
                  text-[#414141]
                "
              >
                Meet
                <br />
                the Mango
                <br />
                Vans Team
              </div>

              <span
                className="
                  absolute
                  -left-6
                  top-4
                  text-[24px]
                  text-[#555]
                "
              >
                ↝
              </span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div
          className="
            absolute
            right-[5%]
            top-[115px]
            hidden
            w-[49%]
            max-w-[560px]
            lg:block
          "
        >
          {/* VIDEO CARD */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[12px]
              border-[3px]
              border-white
              bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.18)]
            "
          >
            <div className="flex h-[300px]">
              {/* Green Logo Panel */}
              <div
                className="
                  flex
                  w-[38%]
                  flex-col
                  items-center
                  justify-center
                  bg-[#91c63d]
                "
              >
                <div className="mb-2 text-[55px] leading-none">
                  🥭
                </div>

                <div
                  className="
                    text-[12px]
                    font-extrabold
                    tracking-[-0.3px]
                    text-[#174832]
                  "
                >
                  MANGO
                  <span className="text-white">VANS</span>
                </div>
              </div>

              {/* Video */}
              <div className="relative w-[62%] bg-[#333]">
                <video
                  ref={videoRef}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                  src="/videos/mango-vans.mp4"
                  poster="/images/van-poster.jpg"
                  muted
                  playsInline
                />

                {/* Play Button */}
                {!playing && (
                  <button
                    onClick={handlePlay}
                    className="
                      absolute
                      left-1/2
                      top-1/2
                      flex
                      h-[48px]
                      w-[48px]
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      bg-white/90
                      text-[13px]
                      text-[#183f32]
                      shadow-lg
                      transition-all
                      duration-300
                      hover:scale-110
                    "
                  >
                    ▶
                  </button>
                )}

                {/* Video Controls */}
                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    flex
                    items-center
                    gap-3
                    bg-gradient-to-t
                    from-black/70
                    to-transparent
                    px-4
                    pb-3
                    pt-8
                  "
                >
                  <span className="text-[8px] text-white">
                    0:00
                  </span>

                  <div className="h-[2px] flex-1 rounded-full bg-white/40">
                    <div className="h-full w-[20%] rounded-full bg-white" />
                  </div>

                  <span className="text-[8px] text-white">
                    1:25
                  </span>

                  <span className="text-[10px] text-white">
                    ⛶
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= FEATURE PILLS ================= */}
          <div
            className="
              mx-auto
              mt-4
              flex
              w-[82%]
              items-center
              justify-between
              rounded-full
              bg-white
              px-5
              py-3
              shadow-[0_7px_22px_rgba(0,0,0,0.09)]
            "
          >
            {features.map((feature, index) => (
              <React.Fragment key={feature.title}>
                <div className="flex items-center gap-2">
                  <span
                    className="
                      flex
                      h-[22px]
                      w-[22px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#f4f4f0]
                      text-[9px]
                      text-[#173f31]
                    "
                  >
                    {feature.icon}
                  </span>

                  <div>
                    <p
                      className="
                        text-[7px]
                        font-extrabold
                        leading-none
                        text-[#27352f]
                      "
                    >
                      {feature.title}
                    </p>

                    <p
                      className="
                        mt-[3px]
                        text-[6px]
                        leading-none
                        text-[#999]
                      "
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>

                {index !== features.length - 1 && (
                  <div className="h-[24px] w-[1px] bg-[#e8e8e8]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* ================= MOBILE VIDEO ================= */}
        <div
          className="
            mt-12
            w-full
            lg:hidden
          "
        >
          <div
            className="
              overflow-hidden
              rounded-[14px]
              border-[3px]
              border-white
              bg-white
              shadow-[0_10px_30px_rgba(0,0,0,0.16)]
            "
          >
            <div className="relative h-[230px] bg-[#91c63d]">
              <video
                className="h-full w-full object-cover"
                src="/videos/mango-vans.mp4"
                poster="/images/van-poster.jpg"
                controls
                playsInline
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-4
                  left-4
                  rounded-full
                  bg-[#91c63d]
                  px-3
                  py-2
                  text-[8px]
                  font-bold
                  text-[#174832]
                "
              >
                MANGO VANS
              </div>
            </div>
          </div>

          {/* Mobile Features */}
          <div
            className="
              mt-4
              grid
              grid-cols-3
              gap-2
              rounded-[20px]
              bg-white
              p-3
              shadow-[0_7px_22px_rgba(0,0,0,0.09)]
            "
          >
            {features.map((feature) => (
              <div
                key={feature.title}
                className="
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >
                <span
                  className="
                    mb-2
                    flex
                    h-[28px]
                    w-[28px]
                    items-center
                    justify-center
                    rounded-full
                    bg-[#f4f4f0]
                    text-[10px]
                  "
                >
                  {feature.icon}
                </span>

                <p
                  className="
                    text-[7px]
                    font-extrabold
                    text-[#27352f]
                  "
                >
                  {feature.title}
                </p>

                <p
                  className="
                    mt-1
                    text-[6px]
                    text-[#999]
                  "
                >
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetCrew;