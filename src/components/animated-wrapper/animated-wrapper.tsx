import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { FC } from "react";
import { motion } from "framer-motion";

export interface AnimatedWrapperProps {
  direction: "left" | "right";
}

export const AnimatedWrapper: FC<PropsWithChildren<AnimatedWrapperProps>> = ({
  direction,
  children,
  ...props
}) => {
  return (
    <motion.div
      {...{
        initial: {
          translateX: direction === "left" ? "-100%" : "100%",
          opacity: 0,
        },
        whileInView: { translateX: "0%", opacity: 1 },
        viewport: { once: true },
        transition: { duration: 0.9, ease: "easeOut" },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
