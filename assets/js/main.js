const qrCodeWrapper = document.querySelector(".qr-code-wrapper");
const rootWz = document.getElementsByTagName("root-wz")[0];

function rotateElement(event, element) {
  // to get X and Y
  const x = event.clientX;
  const y = event.clientY;

  // find center of the screen
  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // define max deg rotation
  const offsetX = ((x - middleX) / middleX) * 16;
  const offsetY = ((y - middleY) / middleY) * 16;

  // optional - if you want the numbers in rounded
  const roundedX = Math.round(offsetX);
  const roundedY = Math.round(offsetY);

  // condition to add and remove dark class
  if (roundedX > 0) {
    rootWz.classList.add("dark");
  } else if (roundedX < -0) {
    rootWz.classList.remove("dark");
  }

  // setting vaue to css variable
  element.style.setProperty("--rotateX", roundedY + "deg");
  element.style.setProperty("--rotateY", -roundedX + "deg");
}

// calling the function on mousemove
document.addEventListener("mousemove", (e) => {
  rotateElement(e, qrCodeWrapper);
});

// lazy load image

const lowResImages = document.querySelectorAll(".low-res");

setTimeout(function () {
  const lazyImgObserver = new IntersectionObserver(
    (enteries, lazyImgObserver) => {
      enteries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("high-res");
          lazyImgObserver.unobserve(entry.target);
          console.log(entry.isIntersecting);
        }
      });
    }
  );
  lowResImages.forEach((lowResImage) => {
    lazyImgObserver.observe(lowResImage);
  });
}, 1000);
