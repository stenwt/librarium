import React from "react";

const Video = (props) => {
  return (
    <video {...props}>
      <track default kind="captions" srcLang="en" />
    </video>
  );
};

export default Video;
