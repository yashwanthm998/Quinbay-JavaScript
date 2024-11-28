var globalTitle = "Winter Is Coming";
function urlSlug(title) {
  return title
    .split(" ")
    .filter(substr => substr !== "")
    .join("-")
    .toLowerCase();
}
var winterComing = urlSlug(globalTitle);