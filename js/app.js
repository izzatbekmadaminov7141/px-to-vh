window.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".box_loader");
  setTimeout(() => {
    loader.classList.add("show");
  }, 2000);

  const input = document.querySelector("#vh");
  const input2 = document.querySelector("#vw");
  const h1_hv = document.querySelector(".h1_vh");
  const h1_hw = document.querySelector(".h1_vw");
  const btnOne = document.querySelector("#btnCopyOne");
  const btnTwo = document.querySelector("#btnCopyTwo");
  const post = document.querySelector("#post");
  input.addEventListener("input", () => {
    const inputValue = parseFloat(input.value);
    btnOne.disabled = false;
    if (!isNaN(inputValue)) {
      const vhValue = (100 * inputValue) / window.innerHeight;
      h1_hv.innerHTML = `${vhValue}vh`;
    } else {
      h1_hv.innerHTML = "Invalid value";
    }
  });

  input2.addEventListener("input", () => {
    const inputValue = parseFloat(input2.value);
    btnTwo.disabled = false;
    if (!isNaN(inputValue)) {
      const vwValue = (100 * inputValue) / window.innerWidth;
      h1_hw.innerHTML = `${vwValue}vw`;
    } else {
      h1_hw.innerHTML = "Invalid value";
    }
  });

  btnOne.addEventListener("click", (event) => {
    event.preventDefault();
    navigator.clipboard
      .writeText(h1_hv.textContent)
      .then(() => {
        post.textContent = "Copied";
        post.classList.add("show");
        setTimeout(() => {
          post.classList.remove("show");
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
        post.textContent = "Error";
        post.style.color = "red";
        post.classList.add("show");
      });
  });

  btnTwo.addEventListener("click", (event) => {
    event.preventDefault();
    navigator.clipboard
      .writeText(h1_hw.textContent)
      .then(() => {
        post.textContent = "Copied";
        post.classList.add("show");
        setTimeout(() => {
          post.classList.remove("show");
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy text:", error);
        post.textContent = "Error";
        post.style.color = "red";
        post.classList.add("show");
      });
  });
  //  PWA page
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then((res) => console.log("service worker registered"))
        .catch((err) => console.log("service worker not registered", err));
    });
  }
});
