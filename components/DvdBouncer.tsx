import React, { useEffect, useRef } from "react";

const AnimatedLogo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  const FPS = 60;
  let xPosition = 10;
  let yPosition = 10;
  let xSpeed = 4;
  let ySpeed = 4;

  //  Control the animation loop
  useEffect(() => {
    const interval = setInterval(moveLogo, 1000 / FPS);
    window.addEventListener("resize", onWindowResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  // Move the logo around the screen
  const moveLogo = () => {
    const logo = logoRef.current;
    const section = sectionRef.current;
    if (!logo || !section) return;

    const maxX = section.clientWidth - logo.clientWidth;
    const maxY = section.clientHeight - logo.clientHeight;
    if (xPosition >= maxX || xPosition <= 0) {
      xSpeed = -xSpeed;
      logo.style.fill = randomColor();
    }
    if (yPosition >= maxY || yPosition <= 0) {
      ySpeed = -ySpeed;
      logo.style.fill = randomColor();
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    updateLogoPosition();
  };

  const updateLogoPosition = () => {
    const logo = logoRef.current;
    if (logo) {
      logo.style.left = `${xPosition}px`;
      logo.style.top = `${yPosition}px`;
    }
  };

  // Keep the logo within the window bounds
  // If the window is resized, the logo will be repositioned
  // to fit within the new window size
  const onWindowResize = () => {
    const logo = logoRef.current;
    const section = sectionRef.current;
    if (!logo || !section) return;

    const maxX = section.clientWidth - logo.clientWidth;
    const maxY = section.clientHeight - logo.clientHeight;
    if (xPosition >= maxX) {
      xPosition = maxX;
    }
    if (yPosition >= maxY) {
      yPosition = maxY;
    }
    updateLogoPosition();
  };

  const randomColor = () => {
    
    let lastColor = null;

    const colors = [
      "#777777",
      "#b7b7b7",
      "4f4f4f",
      "#ffffff",
    ];
  
    let color;
    do {
      color = colors[Math.floor(Math.random() * colors.length)];
    } while (color === lastColor);
  
    lastColor = color;
    return color;
  };

  return (
    <section ref={sectionRef} className="flex w-full h-full relative rounded-2xl">
      <svg
        ref={logoRef}
        className="w-44 absolute fill-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 302.94 269.71"
      >
        <path
          fill="black"
          d="M0 195.48L0 74.24L151.47 0L302.94 74.24L302.94 195.48L151.47 269.71L0 195.48z"
        />
        <path d="M151.47 152.86L293.2 81.99L208.16 39.47L123.12 81.99L151.47 96.16L208.16 67.82L236.51 81.99L151.47 124.51L66.43 81.99L179.82 25.3L151.47 11.12L9.74 81.99L151.47 152.86z" />
        <path d="M293.2 92.34L151.47 163.2L9.74 92.34L9.74 120.68L151.47 191.55L293.2 120.68L293.2 92.34z" />
        <path d="M264.85 201.9L293.2 187.72L293.2 131.03L151.47 201.9L9.74 131.03L9.74 187.72L38.09 201.9L38.09 173.55L151.47 230.24L264.85 173.55L264.85 201.9z" />
      </svg>
    </section>
  );
};

export default AnimatedLogo;

/*

*/
