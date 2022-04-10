
const isIntersecting = (entry) => {
  return entry.isIntersecting
};

const accion = (entry) => {
  const nodo = entry.target;
  console.log('Accion');
  console.log(nodo)

  observer.unobserve(nodo);
};


const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(accion);
})

export const registerImage = (image) => {
  observer.observe(image);
}