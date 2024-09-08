import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

type DownloadButtonProps = {
  elementId: string; // ID of the template element to convert to PDF
};

const DownloadButton: React.FC<DownloadButtonProps> = ({ elementId }) => {
  const handleDownload = async () => {
    const element = document.getElementById(elementId);
    
    if (element) {
      // Convert the HTML to canvas
      const canvas = await html2canvas(element);
      
      // Get the image data from the canvas
      const imgData = canvas.toDataURL('image/png');
      
      // Create a jsPDF instance
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      // Get the width and height of the canvas to fit it into the PDF
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio
      
      // Add the image to the PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Save the PDF
      pdf.save('cv.pdf');
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
    >
      Download CV
    </button>
  );
};

export default DownloadButton;
