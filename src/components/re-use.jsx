export function NeonBg() {
  return (
    <>
      <div className="absolute inset-0 z-0">
        {/* Left Diagonal Gradient (Purple to Blue to Cyan) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff00cc] via-[#3333ff] to-[#00ffff] clip-diagonal-left blur-xl brightness-200 opacity-90" />

        {/* Right Diagonal Gradient (Lime to Aqua to Pink) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00] via-[#00ffcc] to-[#ff0099] clip-diagonal-right blur-xl brightness-200 opacity-90" />
      </div>

      <style jsx>{`
        .clip-diagonal-left {
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .clip-diagonal-right {
          clip-path: polygon(100% 0, 100% 100%, 0 100%);
        }
      `}</style>
    </>
  );
}
