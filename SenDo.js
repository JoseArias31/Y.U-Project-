function openEstimateSection() {
    var estimateWindow = window.open("", "Get an Estimate", "width=400,height=400");
    var estimateForm = "<form>" +
      "<label for='nombre'>Nombre:</label>" +
      "<input type='text' id='nombre' name='nombre'><br><br>" +
      "<label for='email'>Email:</label>" +
      "<input type='email' id='email' name='email'><br><br>" +
      "<button onclick='enviarFormulario()'>Enviar</button>" +
      "</form>";
    estimateWindow.document.body.innerHTML = estimateForm;
  }