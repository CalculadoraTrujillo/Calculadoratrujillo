document.addEventListener("DOMContentLoaded", function () {
    const resultValue = document.getElementById("result-value");
    const area = localStorage.getItem("area");
    resultValue.textContent = `  ${parseInt(area)}m²`;
    localStorage.removeItem("area");
  });
  function formatPrice(price) {
    return price.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  function showInfo(name, measures, cajaRatio, imageNumber, price, imageUrl) {
  const selectedImageName = document.getElementById("selected-image-name");
  const imageMeasures = document.getElementById("image-measures");
  const divisionResults = document.querySelectorAll(".division-result");
  const imageNumberElements = document.querySelectorAll(".image-number");
  const finalResultElement = document.querySelector(".final-result");
  const divisionBy3Element = document.querySelector(".division-by-3");
  const divisionBy9Element = document.querySelector(".division-by-9");
  const imagePriceElement = document.querySelector(".image-price");
  const selectedImage = document.getElementById("selected-image"); // Elemento <img> de la imagen seleccionada
  const area = parseFloat(document.getElementById("result-value").textContent);

  // Establecer la fuente (src) de la imagen seleccionada
  selectedImage.src = imageUrl;

  selectedImageName.textContent = ` ${name}`;
  imageMeasures.textContent = `Rendimiento por caja: ${measures}`;
  divisionResults.forEach(result => {
    const division = area / cajaRatio;
    result.textContent = `Necesitas un total de: ${Math.round(division)} Cajas`;
  });
  imageNumberElements.forEach(numberElement => {
    numberElement.textContent = `La cantidad por caja es: ${Math.round(imageNumber)} Baldosas`;
  });
  const finalResult = Math.round((area / cajaRatio) * imageNumber);
  finalResultElement.textContent = `Un total de : ${finalResult} Baldosas`;

  const divisionBy3 = Math.round(area / 3);
  divisionBy3Element.textContent = `La cantidad aproximada de pegante para instalar tu producto es de : ${divisionBy3} Sacos de 25kg`;

  // Crear un elemento de imagen
const imageElement = document.createElement('img-cerrar');
imageElement.src = 'cerrar.png'; // Reemplaza 'ruta/de/la/imagen.jpg' con la ruta real de tu imagen.
imageElement.alt = 'Descripción de la imagen'; // Proporciona una descripción adecuada para la imagen.

  const divisionBy9 = Math.round(area / 9);
  divisionBy9Element.textContent = `La cantidad de boquilla que necesitas para instalar tu producto es de: ${divisionBy9} Bolsas de 2kg`;

  const totalPrice = price * Math.round((area / cajaRatio));
  imagePriceElement.textContent = `Precio total: $${formatPrice(totalPrice)}`;
}

  /**advertencia*/
  function closeWarning() {
    const warningContainer = document.getElementById("warning-message");
    const overlay = document.getElementById("background-overlay");
    
    warningContainer.style.display = "none";
    overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    const warningContainer = document.getElementById("warning-message");
    const overlay = document.getElementById("background-overlay");

    warningContainer.style.display = "block";
    overlay.style.display = "block";
});

/**fin de advertencia*/ 


  

