import React, { useRef, useEffect } from "react";

const Test = () => {
  const imgRef = useRef(null);
  const rectRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const rect = rectRef.current;

    const handleMouseMove = (e) => {
      const imgPos = img.getBoundingClientRect();
      const imgX = imgPos.left;
      const imgY = imgPos.top;
      const rectHalfWidth = rect.width.baseVal.value / 2;
      const rectHalfHeight = rect.height.baseVal.value / 2;

      rect.setAttribute("x", e.clientX - imgX - rectHalfWidth);
      rect.setAttribute("y", e.clientY - imgY - rectHalfHeight);
    };

    img.addEventListener("mousemove", handleMouseMove);

    return () => {
      img.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div width="100vw" height="100vh">
      <svg width="320" height="166">
        <defs>
          <mask
            id="cursorMask"
            maskUnits="objectBoundingBox"
            maskContentUnits="objectBoundingBox"
          >
            <g>
              <rect x="0" y="0" width="320" height="166" fill="#FFFFFF" />
              <rect x="0" y="0" width="100" height="100" fill="#000000" />
            </g>
          </mask>
        </defs>
        <image
          ref={imgRef}
          width="320"
          height="166"
          xlinkHref="https://upload.wikimedia.org/wikipedia/commons/d/d4/Firefox-33-xfce.png"
        />
        <rect
          ref={rectRef}
          width="100"
          height="100"
          fill="transparent"
          mask="url(#cursorMask)"
        />
      </svg>
    </div>
  );
};

export default Test;
