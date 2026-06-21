export function triggerTeamsDM(picEmail, docNumber, docTitle) {
    if (!picEmail) {
        alert("Email PIC korporat tidak ditemukan pada data dokumen ini.");
        return;
    }

    const message = `Selamat pagi/siang Bapak/Ibu, izin mengonfirmasi terkait dokumen RLEGS nomor ${docNumber} (${docTitle}) yang saat ini berada di antrean review Anda. Terima kasih.`;
    
    const encodedMsg = encodeURIComponent(message);
    const msTeamsDeepLink = `https://teams.microsoft.com/l/chat/0/0?users=${picEmail}&message=${encodedMsg}`;

    // Memaksa browser membuka aplikasi Microsoft Teams di laptop user
    window.open(msTeamsDeepLink, '_blank');
}