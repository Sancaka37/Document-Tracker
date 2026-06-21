import { INITIAL_PROJECTS } from './mockData.js';

export const CONFIG = {
    // SAKLAR ENTERPRISE: Ubah ke 'false' jika API Backend Telkom sudah siap
    USE_MOCK_SERVICE: true, 
    API_BASE_URL: "https://api.intra.telkom.co.id/r3-rlegs/v1",
};

export class DocumentAPI {
    static async getDocuments() {
        if (CONFIG.USE_MOCK_SERVICE) {
            console.warn("[TELKOM-R3-LOG]: Menggunakan MockData (Offline Mode).");
            return new Promise((resolve) => {
                setTimeout(() => resolve(INITIAL_PROJECTS), 350); 
            });
        }

        try {
            const response = await fetch(`${CONFIG.API_BASE_URL}/documents`);
            if (!response.ok) throw new Error("Jaringan Intra Telkom Error");
            return await response.json();
        } catch (error) {
            console.error("[TELKOM-R3-ERROR]: Koneksi gagal, fallback ke Mock Data ->", error);
            return INITIAL_PROJECTS;
        }
    }
}