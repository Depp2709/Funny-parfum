function contactWhatsApp() {
    const phoneNumber = "1234567890"; // Ganti dengan nomor WhatsApp Anda
    const message = "Halo, saya tertarik untuk membeli parfum!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
