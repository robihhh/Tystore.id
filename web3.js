document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (name && email) {
        alert(`Terima kasih, ${name}! Kami akan menghubungi Anda di ${email}.`);
    } else {
        alert("Mohon isi semua kolom.");
    }
});
