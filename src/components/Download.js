'use client'
import html2pdf from 'html2pdf.js';
export const handleDownload = () => {
    const element = document.getElementById('cv-template');
    const opt = {
        margin: 0,
        filename: 'YourCv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(element).save();
};

