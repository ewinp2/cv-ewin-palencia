(() => {
  //seleccionar el boton

  const button = document.querySelector("#pdf");
  function generatePDF() {
    const resumenHtml = document.querySelector(".container");

    html2pdf()
      .set({
        margin: 0,
        filename: "ewin_resume.pdf",
        page_size: "A4",
        image: {
          type: "jpeg",
          quality: 3,
        },
        html2canvas: {
          scale: 3, // A mayor escala, mejores gráficos, pero más peso
          letterRendering: true,
        },
        jsPDF: {
          unit: "in",
          // format: "a4",
          orientation: "portrait", // landscape o portrait
        },
      })
      .from(resumenHtml)
      .save();
  }

  button.addEventListener("click", async () => {
    button.style.display = "none";
    await generatePDF();
    button.style.display = "block";
  });
})();
