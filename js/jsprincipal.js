document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input, index) => {
      input.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
          if (index < inputs.length - 1) {
            inputs[index + 1].focus();
          }
        }
      });
    });
  });
document.addEventListener("DOMContentLoaded", function () {
  const largoInput = document.getElementById("largo");
  const anchoInput = document.getElementById("ancho");
  const editableResult = document.getElementById("editable-result");
  const finalResult = document.getElementById("final-result");
  const checkboxes = document.querySelectorAll(".checkbox");
  const calculateButton = document.getElementById("calculate-button");

  largoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      anchoInput.focus();
    }
  });

  anchoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      calcularArea();
    }
  });

  editableResult.addEventListener("input", function () {
    finalResult.value = editableResult.value;
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", function () {
      checkboxes.forEach(cb => {
        cb.checked = false;
      });
      this.checked = true;
    });
  });

  calculateButton.addEventListener("click", function () {
    const area = editableResult.value;
    let selectedCheckbox;
    checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        selectedCheckbox = checkbox;
      }
    });

    if (selectedCheckbox) {
      const checkboxId = selectedCheckbox.id;
      localStorage.setItem("area", area);
      window.location.href = `${checkboxId}.html`;
    } else {
      alert("Selecciona una casilla antes de calcular.");
    }
  });

  function calcularArea() {
    const largo = parseFloat(largoInput.value);
    const ancho = parseFloat(anchoInput.value);
    const area = largo * ancho;
    editableResult.value = area;
    finalResult.value = area;
  }
});

document.addEventListener("DOMContentLoaded", function () {
const header = document.getElementById("header");
const subsSendButton = document.querySelector(".close-cerrar-modal");

subsSendButton.addEventListener("click", function () {
  header.style.display = "block";
  // Aquí puedes agregar cualquier otra lógica que necesites
});
});