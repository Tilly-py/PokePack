import { useRef, useState } from 'react';

const OpenPackPage = ({ image, title = 'Poke Card' }) => {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glowPosition, setGlowPosition] = useState({
    x: '50%',
    y: '-20%',
  });

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const bounds = card.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const leftX = mouseX - bounds.left;
    const topY = mouseY - bounds.top;
    const centerX = leftX - bounds.width / 2;
    const centerY = topY - bounds.height / 2;
    const distance = Math.sqrt(centerX ** 2 + centerY ** 2);

    setTransform(`
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${centerY / 100},
        ${-centerX / 100},
        0,
        ${Math.log(distance) * 2}deg
      )
    `);

    setGlowPosition({
      x: `${centerX * 2 + bounds.width / 2}px`,
      y: `${centerY * 2 + bounds.height / 2}px`,
    });
  }

  function handleMouseLeave() {
    setTransform('');
    setGlowPosition({
      x: '50%',
      y: '-20%',
    });
  }

  return (
    <section className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-center">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="
          relative h-[600px] w-[430px] rounded-xl
          bg-cover bg-center shadow-lg
          transition-[transform,box-shadow] duration-300 ease-out
          hover:shadow-2xl
        "
        style={{
          backgroundImage: `url(${image})`,
          transform,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at ${glowPosition.x} ${glowPosition.y},
                rgba(255, 255, 255, 0.45),
                rgba(0, 0, 0, 0.08)
              )
            `,
          }}
        />
        <div className="relative z-10 p-4 text-right font-bold text-white drop-shadow">{title}</div>
      </div>
    </section>
  );
};

export default OpenPackPage;
