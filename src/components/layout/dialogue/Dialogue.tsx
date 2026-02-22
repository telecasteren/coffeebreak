"use client";

import React, { useRef } from "react";
import { useState } from "react";
import type { DialogueProps } from "./types";
import { BootstrapDialog } from "./BootstrapDialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { CloseIcon, IconButton } from "@/components/icons/mui-icons";
import { Controllers } from "./Controllers";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";

const Dialogue = ({
  className,
  buttonText,
  title,
  content,
  subcontent,
  media,
  urls,
}: DialogueProps) => {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [nextImage, setNextImage] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<"left" | "right" | null>(
    null,
  );
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
    setCurrentImage(0);
    setNextImage(null);
    setSlideDirection(null);
  };

  const handleClose = () => {
    setOpen(false);
    setNextImage(null);
    setSlideDirection(null);
  };

  const handlePrevImage = () => {
    if (!media) return;
    if (!nextImage) {
      const prevIndex =
        currentImage === 0 ? media.length - 1 : currentImage - 1;
      setNextImage(prevIndex);
      setSlideDirection("left");

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrentImage(prevIndex);
        setNextImage(null);
        setSlideDirection(null);
      }, 800);
    }
  };

  const handleNextImage = () => {
    if (!media) return;
    if (!nextImage) {
      const nextIndex =
        currentImage === media.length - 1 ? 0 : currentImage + 1;
      setNextImage(nextIndex);
      setSlideDirection("right");

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrentImage(nextIndex);
        setNextImage(null);
        setSlideDirection(null);
      }, 800);
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={className}
      >
        {buttonText}
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {title}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: "absolute",
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          {media && media.length > 0 && (
            <>
              <div
                className="dialogue-image-wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Image
                  className={`dialogue-image ${
                    slideDirection === "left"
                      ? "slide-out-right"
                      : slideDirection === "right"
                        ? "slide-out-left"
                        : ""
                  }`}
                  src={media[currentImage]?.src || "/noimage.png"}
                  alt={media[currentImage]?.alt || "Image description"}
                  width={700}
                  height={350}
                  style={{ zIndex: 1 }}
                />
                {nextImage !== null && (
                  <Image
                    className={`dialogue-image ${
                      slideDirection === "left"
                        ? "slide-in-left"
                        : slideDirection === "right"
                          ? "slide-in-right"
                          : ""
                    }`}
                    src={media[nextImage]?.src || "/noimage.png"}
                    alt={media[nextImage]?.alt || "Image description"}
                    width={700}
                    height={350}
                    style={{ zIndex: 2 }}
                  />
                )}
              </div>

              <div
                style={{
                  marginTop: "0.5em",
                  padding: "1em",
                  paddingTop: "0",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Controllers
                  onClick={handlePrevImage}
                  direction="prev"
                  disabled={false}
                />
                <Typography variant="caption">{`${currentImage + 1} / ${media.length}`}</Typography>
                <Controllers
                  onClick={handleNextImage}
                  direction="next"
                  disabled={false}
                />
              </div>
            </>
          )}
          <div className="dialogue-desc-content">
            <Typography>{content}</Typography>
            <Typography gutterBottom>
              <b>Stack:</b> {subcontent}
            </Typography>
          </div>
        </DialogContent>
        <DialogActions>
          <div className="dialogue-actions">
            <div className="dialogue-links">
              {urls &&
                urls.map(({ src, title }, index) => (
                  <Link
                    className="btn"
                    key={index}
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {title}
                  </Link>
                ))}
            </div>
            <Button
              autoFocus
              onClick={handleClose}
              sx={{ color: "#fff", "&:hover": { color: "#ccc" } }}
            >
              Close
            </Button>
          </div>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default Dialogue;
