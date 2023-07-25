import React from "react";

const Video = (props) => {
  return (
    <video
      {...props}
      width={800}
      height={"auto"}
      muted={false}
      autoPlay={false}
      controls={true}
      loop={true}
      playsInline={true}
    >
      <track default kind="captions" srcLang="en" />
    </video>
  );
};

export default Video;
