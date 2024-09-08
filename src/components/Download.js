import dynamic from 'next/dynamic';
const DynamicHtml2Pdf = dynamic(() => import('html2pdf.js'), { ssr: false });
export const handleDownload = async () => {
    if (typeof window !== 'undefined') { // Ensure this runs in a browser context
        const html2pdf = await DynamicHtml2Pdf; // Ensure html2pdf is available
        const element = document.getElementById('cv-template');
        if (element) {
            const opt = {
                margin: 0,
                filename: 'YourCv.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            };

            try {
                // Configure options and generate the PDF
                html2pdf().set(opt).from(element).save();
            } catch (error) {
                console.error('Error generating PDF:', error);
            }
        } else {
            console.error('Element with id "cv-template" not found');
        }
    } else {
        console.error('This function is being called in a non-browser environment');
    }
};
