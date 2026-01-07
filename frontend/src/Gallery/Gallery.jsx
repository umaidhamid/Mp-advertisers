import React from "react";
import InfiniteMenu from "../../animation/InfiniteMenu"; // ✅ keep only one import

const items = [
  {
    image: "https://picsum.photos/300/300?grayscale",
    link: "https://google.com/",
    title: "Item 1",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/400/400?grayscale",
    link: "https://google.com/",
    title: "Item 2",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/500/500?grayscale",
    link: "https://google.com/",
    title: "Item 3",
    description: "This is pretty cool, right?",
  },
  {
    image: "https://picsum.photos/600/600?grayscale",
    link: "https://google.com/",
    title: "Item 4",
    description: "This is pretty cool, right?",
  },
];

const Gallery = () => {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      {/* <h1
        className="
      pointer-events-none
      select-none
      absolute
      top-1/2
      left-1/2
      -translate-x-1/2
      -translate-y-1/2
      z-20

      text-center
      font-semibold
      tracking-tight
      text-white/90

      text-xl
      sm:text-2xl
      md:text-3xl
      lg:text-4xl
      xl:text-5xl

      leading-tight
      max-w-[90%]
      mx-auto
    "
      >
        Interact to Experience the Gallery
      </h1> */}

      <InfiniteMenu items={items} />
    </div>
  );
};

export default Gallery;
