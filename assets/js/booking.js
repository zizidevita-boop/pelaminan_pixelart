document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");

  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const hp = document.getElementById("hp").value;
      const tanggal = document.getElementById("tanggal").value;
      const lokasi = document.getElementById("lokasi").value;
      const paket = document.getElementById("paket").value;
      const catatan = document.getElementById("catatan").value;

      let booking = JSON.parse(localStorage.getItem("booking")) || [];

      const newBooking = {
        id: Date.now(),
        nama,
        hp,
        tanggal,
        lokasi,
        paket,
        catatan,
        status: "Pending"
      };

      booking.push(newBooking);
      localStorage.setItem("booking", JSON.stringify(booking));

      alert("Booking berhasil dikirim! Admin akan menghubungi kamu.");

      // Kirim ke WhatsApp juga
      const nomorWA = "6285382460264";
      const pesan =
        `Halo Pelaminan PixelArt!%0A%0A` +
        `Saya ingin booking pelaminan:%0A` +
        `Nama: ${nama}%0A` +
        `No HP: ${hp}%0A` +
        `Tanggal: ${tanggal}%0A` +
        `Lokasi: ${lokasi}%0A` +
        `Paket: ${paket}%0A` +
        `Catatan: ${catatan}%0A%0A` +
        `Mohon konfirmasi ya 🙏`;

      window.open(`https://wa.me/${nomorWA}?text=${pesan}`, "_blank");

      form.reset();
    });
  }
});
