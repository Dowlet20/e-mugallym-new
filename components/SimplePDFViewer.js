"use client"; // Required for Next.js client-side rendering
import { useState } from 'react';

const SimplePDFViewer = ({ fileUrl }) => {
  const formattedUrl = fileUrl;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>PDF Opener</h1>
      <button
        onClick={() => window.open(formattedUrl, '_blank', 'noopener,noreferrer')}
        style={{
          padding: '10px 20px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Open PDF in New Tab
      </button>
    </div>
  );
};

export default SimplePDFViewer;