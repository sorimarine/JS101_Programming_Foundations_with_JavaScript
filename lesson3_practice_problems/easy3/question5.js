function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

function isColorValid(color) {
  return ["blue", "green"].includes(color);
}