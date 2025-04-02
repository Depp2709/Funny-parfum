function contactWhatsApp() {
    const phoneNumber = "6287737141510"; // Ganti dengan nomor WhatsApp Anda
    const message = "Halo, saya tertarik untuk membeli parfum!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
