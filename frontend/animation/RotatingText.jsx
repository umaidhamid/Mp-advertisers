import React from "react";
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const RotatingText = forwardRef((props, ref) => {
  const {
    texts,
    transition = { type: "spring", damping: 25, stiffness: 300 },
    initial = { y: "100%", opacity: 0 },
    animate = { y: 0, opacity: 1 },
    exit = { y: "-120%", opacity: 0 },
    animatePresenceMode = "wait",
    animatePresenceInitial = false,
    rotationInterval = 2000,
    staggerDuration = 0.03,
    staggerFrom = "first",
    loop = true,
    auto = true,
    splitBy = "characters",
    onNext,
    mainClassName,
    splitLevelClassName,
    elementLevelClassName,
    ...rest
  } = props;

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const splitIntoCharacters = (text) => {
    if (typeof Intl !== "undefined" && Intl.Segmenter) {
      const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
      return Array.from(segmenter.segment(text), (s) => s.segment);
    }
    return Array.from(text);
  };

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex];
    const words = currentText.split(" ");

    return words.map((word, i) => ({
      characters: splitBy === "characters" ? splitIntoCharacters(word) : [word],
      needsSpace: i !== words.length - 1,
    }));
  }, [texts, currentTextIndex, splitBy]);

  const next = useCallback(() => {
    setCurrentTextIndex((prev) =>
      prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1
    );
    onNext?.(currentTextIndex);
  }, [texts.length, loop, onNext, currentTextIndex]);

  useImperativeHandle(ref, () => ({ next }));

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(next, rotationInterval);
    return () => clearInterval(id);
  }, [next, rotationInterval, auto]);

  return (
    <motion.span
      className={cn("flex flex-wrap relative", mainClassName)}
      layout
      transition={transition}
      {...rest}
    >
      <span className="sr-only">{texts[currentTextIndex]}</span>

      <AnimatePresence
        mode={animatePresenceMode}
        initial={animatePresenceInitial}
      >
        <motion.span
          key={currentTextIndex}
          className="flex flex-wrap"
          aria-hidden
        >
          {elements.map((word, wIndex) => (
            <span
              key={wIndex}
              className={cn("inline-flex", splitLevelClassName)}
            >
              {word.characters.map((char, cIndex) => (
                <motion.span
                  key={cIndex}
                  initial={initial}
                  animate={animate}
                  exit={exit}
                  transition={{
                    ...transition,
                    delay: cIndex * staggerDuration,
                  }}
                  className={cn("inline-block", elementLevelClassName)}
                >
                  {char}
                </motion.span>
              ))}
              {word.needsSpace && <span>&nbsp;</span>}
            </span>
          ))}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
});

RotatingText.displayName = "RotatingText";
export default RotatingText;
