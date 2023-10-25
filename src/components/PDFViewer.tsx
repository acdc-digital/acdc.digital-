import React from "react";

type Props = { pdf_url: string };

const PDFViewer = ({ pdf_url }: Props) => {
  return (
    <iframe
      src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(pdf_url)}`}
      className="w-full h-full"
      style={{ margin: 0 }} // Removed border style
      frameBorder="0" // Added frameBorder attribute
    ></iframe>
  );
};

export default PDFViewer;


