import React, { useRef, useEffect, useState } from "react";
import "./AnimatedSVG.css";
import IconAngular from "../Icons/IconAngular";
import IconReact from "../Icons/IconReact";
import IconMicrosoftsqlserver from "../Icons/IconMicrosoftsqlserver";
import IconBxlJavascript from "../Icons/IconBxlJavascript";
import IconJava from "../Icons/IconJava";
import IconTypescript from "../Icons/IconTypescript";
import IconDotnet from "../Icons/IconDotnet";
import IconGit from "../Icons/IconGit";
const AnimatedSVG = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div className={"main"}>
      <div className={"left"}>
        <div className={`image-section ${isVisible ? "visible" : ""}`}>
          <div ref={imageRef}>
            <p className={"txt"}>
              I'm comfortable with C++ and C# from my high school and university
              days. I've worked with Angular and .NET, building a full-stack web
              app for a furniture web shop during my faculty project. Taught
              myself Java well enough to apply for a Java instructor position.
              On my internship, I picked up React through a Udemy course and
              handled tasks independently and collaboratively.
            </p>
            <br />
          </div>
        </div>
      </div>
      <div className={"right"}>
        <div className={`svg-section ${isVisible ? "visible" : ""}`}>
          <div ref={imageRef} className={"imgs"}>
            <IconAngular />
            <IconReact />
            <IconMicrosoftsqlserver />
            <IconBxlJavascript />
            <IconJava />
            <IconTypescript />
            <IconGit />
            <IconDotnet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedSVG;
