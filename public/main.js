async function init() {
  let rustApp = null;

  try {
    rustApp = await import("../pkg/index.js");
  } catch (error) {
    console.error("Error importing Rust module:", error);
    return;
  }

  console.log("Rust module loaded:", rustApp);

  if (!rustApp || !rustApp.grayscale) {
    console.error("Rust module did not load properly.");
    return;
  }

  const input = document.getElementById("upload");
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    if (!fileReader.result) {
      console.error("Error: FileReader result is null!");
      return;
    }
    let base64 = fileReader.result.replace(/^data:image\/(png|jpeg|jpg);base64,/, "");
    
    try {
      let img_data_url = rustApp.grayscale(base64);
      const imgElement = document.getElementById("new-img");
      imgElement.setAttribute("src", img_data_url);
      imgElement.classList.remove("hidden");
    } catch (err) {
      console.error("Error processing image:", err);
    }
  };

  input.addEventListener("change", () => {
    if (input.files.length > 0) {
      fileReader.readAsDataURL(input.files[0]);
    }
  });
}

init();
