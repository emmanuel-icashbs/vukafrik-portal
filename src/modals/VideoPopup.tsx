"use client";
import React from "react";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player";

interface VideoPopupProps {
  isOpen: boolean;
  onClose: () => void;
  videoLink: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({
  isOpen,
  onClose,
  videoLink,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      center
      classNames={{ modal: "video-modal" }}
    >
      <div style={{ width: "100%", height: "100%", aspectRatio: "16/9" }}>
        <ReactPlayer
          src={videoLink}
          playing
          controls
          muted
          width="100%"
          height="100%"
          onError={(e) => {
            console.error("Error playing video:", e);
          }}
        />
      </div>
    </Modal>
  );
};

export default VideoPopup;
