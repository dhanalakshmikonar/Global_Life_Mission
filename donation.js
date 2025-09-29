// Open modal with specified content
function openModal(type) {
  const modal = document.getElementById('popupModal');
  const modalBody = document.getElementById('modal-body');
  if (!modal || !modalBody) return; // Safety check

  if (type === 'account') {
    modalBody.innerHTML = `
      <h2 style="color: black;">Trust Account Details</h2>
      <p style="color: black;"><strong>Bank:</strong> HDFC Bank</p>
      <p style="color: black;"><strong>Account No:</strong> 50200068097832</p>
      <p style="color: black;"><strong>IFSC:</strong> HDFC0005313</p>
      <p style="color: black;"><strong>Branch:</strong> East Tambaram</p>
    `;
  } else if (type === 'scanner') {
    modalBody.innerHTML = `
      <h2>Scan & Pay</h2>
      <img src="img/scanner.jpg" alt="QR Code">
    `;
  }

  modal.style.display = 'flex'; // Show modal
}

// Close modal
function closeModal() {
  const modal = document.getElementById('popupModal');
  if (modal) modal.style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(e) {
  const modal = document.getElementById('popupModal');
  if (e.target === modal) {
    closeModal();
  }
}
