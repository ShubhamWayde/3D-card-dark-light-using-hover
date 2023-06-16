const qrCodeWrapper = document.querySelector(".qr-code-wrapper");
const rootWz = document.getElementsByTagName("root-wz")[0];

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 16;
  const offsetY = ((y - middleY) / middleY) * 16;

  const roundedX = Math.round(offsetX);
  const roundedY = Math.round(offsetY);

  if (roundedX > 0) {
    rootWz.classList.add("dark");
  } else if (roundedX < -0) {
    rootWz.classList.remove("dark");
  }

  element.style.setProperty("--rotateX", roundedY + "deg");
  element.style.setProperty("--rotateY", -roundedX + "deg");

  //   console.log("this is X: " + roundedX, "this is Y: " + roundedY);
}

document.addEventListener("mousemove", (e) => {
  rotateElement(e, qrCodeWrapper);
});

// console.log(rootWz);
