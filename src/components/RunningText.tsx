export default function RunningText() {
  const text = [
    "Global Export",
    "Transport",
    "Global Import",
    "Warehouse Storage",
    "Logistics Solutions",
  ];

  return (
    <div className="w-full overflow-hidden bg-[#013188] py-4">

      <div className="marquee group flex whitespace-nowrap">

        {/* First copy */}
        <div className="marquee-track group-hover:[animation-play-state:paused]">

          {text.map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
              <span className="mx-8">*</span>
            </span>
          ))}

        </div>

        {/* Duplicate for seamless loop */}
        <div className="marquee-track group-hover:[animation-play-state:paused]">

          {text.map((item, index) => (
            <span key={index} className="marquee-item">
              {item}
              <span className="mx-8 text-gray-400">*</span>
            </span>
          ))}

        </div>

      </div>

    </div>
  );
}