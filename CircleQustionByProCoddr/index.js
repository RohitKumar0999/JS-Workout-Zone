/**
 * JavaScript Practice Question: 
 *
 * Question Name: Tell whether two circles are intersection or not.
 * 
 * Description: Whenver user clicks on screen it creates a circle with random radius within range of
 * [50px-200px], it will have only border, when it clicks second time then again new circle will be created
 * with  random radius range,Also when the user Clicks third time the new circle will be created and the 
 * previous two will vanished or deleted (Means only two circles exists at single time) and we have to check 
 * that created two circles are intersecting or not.
 * 
 * Instructions:
 * - Return true or false in console or some aleart when two circles are intersecting and you can also give false
 * when not intersecting.
 * - Example usage: IsIntersecting() should return true(When intersecting.).
 */


let circleCoordinates = [];

const IsCircleIntersecting = () => {
  console.log(
    "Coordinates",
    circleCoordinates[0].y,
    circleCoordinates[1].y,
    circleCoordinates[0].x,
    circleCoordinates[1].x,
    circleCoordinates[0].radius,
    circleCoordinates[1].radius
  );
  const distance =
    Math.hypot((circleCoordinates[0].y - circleCoordinates[1].y) ,
      (circleCoordinates[0].x - circleCoordinates[1].x))

   let res =   distance<=circleCoordinates[0].radius + circleCoordinates[1].radius;


   if (distance == 0 && circleCoordinates[0].radius == circleCoordinates[1].radius) {
    // Circles are concentric, no intersection
    console.log("Cirecles are concenteric")

    return false;
}

// Check for no intersection
if (distance > (circleCoordinates[0].radius + circleCoordinates[1].radius) || distance < Math.abs(circleCoordinates[0].radius - circleCoordinates[1].radius)) {
  console.log("no intersection statement is true")
    // Circles do not intersect
    return false;
}


  if (res) {
    console.log("intersecting");
  } else {
    console.log("not intersecting");
  }
};

document.addEventListener("click", (e) => {
  console.log(e.clientX);
  console.log(e.clientY);
  let CircleArray = document.querySelectorAll(".circle");
  if (CircleArray.length === 2) {
    console.log(CircleArray);
    CircleArray.forEach((circle) => {
      document.body.removeChild(circle);
      circleCoordinates.shift();
    });
  }

  let top = e.clientY;
  let left = e.clientX;
  let radius = Math.floor(Math.random() * (200 - 50) + 50);
  circleCoordinates.push({ x: left, y: top, radius });

  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.style.top = (top - radius) + "px";
  circle.style.left =( left - radius) + "px";
  circle.style.height = 2 * radius + "px";
  circle.style.width = 2 * radius + "px";
  document.body.appendChild(circle);

  if (circleCoordinates.length === 2) {
    IsCircleIntersecting();
  }
});
