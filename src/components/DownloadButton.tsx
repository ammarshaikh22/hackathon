import React from 'react';

const DownloadButton = ({ elementId }: { elementId: string }) => {
    const handleDownload = () => {
        window.print();
    };

    return (
        <button
            onClick={handleDownload}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl"
        >
            Download
        </button>
    );
};

export default DownloadButton;
