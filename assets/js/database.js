// Database LocalStorage Pro Max

function getData(key){
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, value){
  localStorage.setItem(key, JSON.stringify(value));
}

// Default Data Paket
if(getData("paket").length === 0){
  setData("paket", [
    { id: 1, nama: "Basic Elegan", harga: "5000000", fitur: "Backdrop, Kursi Pengantin, Karpet, Bunga, Setup" },
    { id: 2, nama: "Luxury Premium", harga: "10000000", fitur: "Full Backdrop, Lighting, Welcome Gate, Standing Flower, Setup Crew" },
    { id: 3, nama: "Royal Wedding", harga: "20000000", fitur: "Full Venue, Fresh Flower, VIP Stage, Lighting Full, Pengawasan" }
  ]);
}

// Default Galeri
if(getData("galeri").length === 0){
  setData("galeri", [
    { id: 1, kategori: "Luxury", url: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80" },
    { id: 2, kategori: "Modern", url: "https://images.unsplash.com/photo-1523438097201-512ae7d59c35?auto=format&fit=crop&w=900&q=80" },
    { id: 3, kategori: "Adat", url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=900&q=80" }
  ]);
}

// Default Testimoni
if(getData("testimoni").length === 0){
  setData("testimoni", [
    { id: 1, nama: "Aisyah & Rizki", isi: "Pelaminannya super mewah, rapi, tamu kagum semua!" },
    { id: 2, nama: "Siti & Hendra", isi: "Pelayanan cepat, ramah, hasil dekorasi elegan." },
    { id: 3, nama: "Dewi & Arman", isi: "Konsepnya sesuai impian, terbaik Pelaminan PixelArt!" }
  ]);
}

// Default Booking
if(getData("booking").length === 0){
  setData("booking", []);
}
