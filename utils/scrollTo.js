const scrollTo = (id) => {
  let element = document.getElementById(id);

  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};

export default scrollTo;
