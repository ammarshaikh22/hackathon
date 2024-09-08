import html2pdf from 'html2pdf.js';
import dynamic from 'next/dynamic';
const DynamicHtml2Pdf = dynamic(() => import('html2pdf.js'), { ssr: false });
export const handleDownload = () => {
    DynamicHtml2Pdf();
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

