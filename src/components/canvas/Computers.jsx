
import React, { useRef } from 'react';

const Computers = () => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();

    // Get mouse position relative to the centre of the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation angles
    const rotateY = ((x - centerX) / centerX) * 20;
    const rotateX = -((y - centerY) / centerY) * 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <div className="flex w-full items-center justify-center px-4 lg:w-auto lg:-translate-y-12 lg:p-10">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative h-72 w-full max-w-80 cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-slate-900 shadow-xl sm:h-80 lg:h-90 lg:w-80"
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 300ms ease-out',
          willChange: 'transform',
        }}
      >
        <img
          src="../src/assets/profile.png"
          alt="My profile"
          className="h-full w-full object-cover"
          draggable="false"
        />

        {/* Optional subtle highlight */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
      </div>
    </div>
  );
};

export default Computers;
