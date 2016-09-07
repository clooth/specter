// Set all game objects anchor points to center
export const centerGameObjects = (objects) => {
  objects.forEach(object => object.anchor.setTo(0.5))
}
