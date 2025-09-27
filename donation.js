


function openModal(type) {
  const modal = document.getElementById('popupModal');
  const modalBody = document.getElementById('modal-body');
  
  if (type === 'account') {
    modalBody.innerHTML = `
     <h2 style="color: black;">Trust Account Details</h2>
<p style="color: black;"><strong>Bank:</strong> SBI Bank</p>
<p style="color: black;"><strong>Account No:</strong> 1234567890</p>
<p style="color: black;"><strong>IFSC:</strong> SBIN0001234</p>
<p style="color: black;"><strong>Branch:</strong> Coimbatore</p>

    `;
  } else if (type === 'scanner') {
    modalBody.innerHTML = `
      <h2>Scan & Pay</h2>
      <img src="img/scanner.jpg" alt="QR Code">
    `;
  }

  modal.style.display = 'flex';
}

function closeModal() {
  document.getElementById('popupModal').style.display = 'none';
}

window.onclick = function(e) {
  const modal = document.getElementById('popupModal');
  if (e.target === modal) {
    closeModal();
  }
}

