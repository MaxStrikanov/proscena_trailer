const modal = () => {
  const modal = document.getElementById("modal");
  const modal_1 = document.getElementById("modal_1");
  const modal_2 = document.getElementById("modal_2");
  const openModalBtn = document.getElementById("openModalBtn");
  const openModal = document.getElementById("modal-kp");
  const openModalBKp = document.getElementById("modal-price");

  openModalBtn.onclick = function() {
      modal.style.display = "block";
  }

  openModalBKp.onclick = function() {
    modal_1.style.display = "block";
}

  openModal.onclick = function() {
    modal_2.style.display = "block";
  }

  window.onclick = function(event) {
      if (event.target == modal ) {
          modal.style.display = "none";
      }
      if (event.target == modal_1 ) {
        modal_1.style.display = "none";
      }
      if (event.target == modal_2 ) {
        modal_2.style.display = "none";
      }
  }
}

export default modal

