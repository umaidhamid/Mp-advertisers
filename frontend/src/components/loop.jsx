import { useEffect, useRef } from "react";

const LogoLoop = ({
  logos = [],
  speed = 100,
  direction = "left", // left | right | up | down
  logoHeight = 40,
  gap = 40,
  hoverSpeed = 0,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = "#fff",
  ariaLabel = "logo loop",
}) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    let animationId;
    let pos = 0;
    let currentSpeed = speed / 60;

    const animate = () => {
      if (!trackRef.current) return;

      if (direction === "left") pos -= currentSpeed;
      if (direction === "right") pos += currentSpeed;
      if (direction === "up") pos -= currentSpeed;
      if (direction === "down") pos += currentSpeed;

      trackRef.current.style.transform =
        direction === "left" || direction === "right"
          ? `translateX(${pos}px)`
          : `translateY(${pos}px)`;

      const size =
        direction === "left" || direction === "right"
          ? trackRef.current.scrollWidth / 2
          : trackRef.current.scrollHeight / 2;

      if (Math.abs(pos) >= size) pos = 0;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [speed, direction]);

  const handleMouseEnter = () => {
    if (hoverSpeed > 0) {
      trackRef.current.style.transition = "transform 0.4s ease";
    }
  };

  const handleMouseLeave = () => {
    trackRef.current.style.transition = "none";
  };

  return (
    <div
      ref={containerRef}
      aria-label={ariaLabel}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {fadeOut && (
        <>
          <div
            className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10"
            style={{
              background: `linear-gradient(to right, ${fadeOutColor}, transparent)`,
            }}
          />
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10"
            style={{
              background: `linear-gradient(to left, ${fadeOutColor}, transparent)`,
            }}
          />
        </>
      )}

      <div
        ref={trackRef}
        className={`flex ${
          direction === "up" || direction === "down" ? "flex-col" : "flex-row"
        }`}
        style={{ gap }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <a
            key={i}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center ${
              scaleOnHover ? "hover:scale-110 transition-transform" : ""
            }`}
            style={{ height: logoHeight }}
          >
            {logo.node ? (
              <div
                style={{ fontSize: logoHeight, height: logoHeight }}
                title={logo.title}
              >
                {logo.node}
              </div>
            ) : (
              <img
                src={logo.src}
                alt={logo.alt}
                style={{ height: logoHeight }}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;
