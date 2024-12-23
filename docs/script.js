document.onreadystatechange = () => {
  if (document.readyState !== "complete") {
    return;
  }

  const note = document.getElementById("note");

  Object.assign(note.style, {
    width: "300px",
    "margin-top": "1rem",
    "background-color": "lightblue",
    border: "3px dashed slategray",
    color: "slategray",
    "font-weight": "600",
    padding: "1rem",
  });

  note.innerText =
    "If you can read this, the script ran.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
};
