import html2pdf from 'html2pdf.js';
export const handleDownload = () => {
    if (typeof window !== 'undefined') { // Ensure this runs in a browser context
        const element = document.getElementById('cv-template');
        if (element) {
            const opt = {
                margin: 0,
                filename: 'YourCv.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            };
            html2pdf().set(opt).from(element).save();
        } else {
            console.error('Element with id "cv-template" not found');
        }
    } else {
        console.error('This function is being called in a non-browser environment');
    }
};
