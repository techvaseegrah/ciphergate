import React, { useState, useRef } from 'react';
import { FaUpload, FaDownload, FaPen } from 'react-icons/fa';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

// Styled fonts and global styles
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
  
  :root {
    --theme-green: #4a9d2d; 
    --text-dark: #1f2937;
  }

  .relieving-container {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-dark);
    line-height: 1.6;
  }

  .relieving-input {
    background: transparent;
    border: none;
    outline: none;
    padding: 1px;
    font-family: inherit;
    color: inherit;
    width: 100%;
    resize: none;
  }
  
  /* Hover effect to show where to edit */
  .relieving-input:hover, .editable-area:hover {
    background: rgba(74, 157, 45, 0.1); 
    border-radius: 2px;
    cursor: text;
    position: relative;
  }
  
  /* A4 Paper Styles */
  .a4-size {
    width: 210mm;
    min-height: 297mm;
    background: white;
    margin: 0 auto;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .page-content {
    padding: 40px 50px; 
    flex-grow: 1;
  }

  /* --- HEADER BORDER STYLES --- */
  .header-separator-container {
    position: relative;
    width: 100%;
    margin: 10px 0 20px 0;
    height: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .header-thin-line {
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: #9ca3af;
    z-index: 1;
  }

  .header-thick-line {
    position: relative;
    width: 40%;
    height: 4px;
    background-color: var(--theme-green);
    z-index: 2;
  }
  /* --------------------------- */

  /* Header Contact Info Text */
  .header-contact-info {
    font-size: 8px;
    color: var(--theme-green);
    font-weight: 700;
    line-height: 1.5;
    text-align: right;
  }

  .green-footer-stripe {
    height: 15px;
    background-color: var(--theme-green);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  /* Custom Scrollbar for Action Bar */
  .action-bar-container {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.9);
  }
`;
document.head.appendChild(styleTag);

const RelievingLetter = () => {
  const [formData, setFormData] = useState({
    // Header Info
    headerLine1: 'Regd. Office : 11, Vijaya Street, Srinivasapuram, Thanjavur - 613009',
    headerLine2: 'Phone Number : +91 85240 89733',
    headerLine3: 'Email : techvaseegrah@gmail.com  Website : www.techvaseegrah.com',

    date: 'Date : 04-11-2025',
    
    // Recipient Details
    recipientName: 'Mr.(name)',
    employeeId: 'JB1192',
    designation: 'Full Stack Developer (Software Developer)',
    
    subject: 'Official Relieving Letter',
    
    // Body Content
    salutation: 'Dear (Name),',
    para1: 'This is to formally confirm that your resignation letter dated 04-10-2025 has been accepted by the management. You have been relieved from your duties with Tech Vaseegrah at the close of business on 04-11-2025, after completion of your notice period from 04-10-2025 to 04-11-2025.',
    para2: 'We hereby acknowledge that you have completed all required handover and clearance formalities. Your full and final settlement will be processed as per company policy.',
    para3: 'We sincerely thank you for your contributions during your tenure with us and wish you success in all your future professional endeavors.',
    
    // Signatory
    forCompany: 'For Tech Vaseegrah,',
    signatoryName: 'Sreekarrthikeyan M',
    signatoryTitle: 'Founder & CEO',
  });

  const [signatures, setSignatures] = useState({ signature: null });
  const [logoSelection, setLogoSelection] = useState('tech');
  const [isGenerating, setIsGenerating] = useState(false);
  const letterRef = useRef();

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSignatures({ signature: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const downloadPDF = () => {
    setIsGenerating(true);
    const editableAreas = document.querySelectorAll('.editable-area');
    editableAreas.forEach(inp => inp.style.backgroundColor = 'transparent');

    html2canvas(letterRef.current, { 
      scale: 2.5, 
      useCORS: true,
      scrollY: -window.scrollY 
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Relieving_Letter_${formData.recipientName.replace(/\s+/g, '_')}.pdf`);
      setIsGenerating(false);
    }).catch(err => {
      console.error("PDF Error:", err);
      setIsGenerating(false);
    });
  };

  const handleEdit = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 flex flex-col items-center font-sans">
      
      {/* Helper Text */}
      <div className="flex items-center gap-2 mb-4 text-gray-500 bg-white px-4 py-2 rounded-full shadow-sm text-sm">
        <FaPen className="text-[#4a9d2d] w-3 h-3" />
        <span>Tip: Click directly on any text inside the letter to edit it.</span>
      </div>

      {/* --- A4 DOCUMENT --- */}
      <div ref={letterRef} className="relieving-container a4-size">
        <div className="page-content flex flex-col h-full relative">
          
          {/* 1. Header Section (Logo Left, Contact Right) */}
          <div className="flex justify-between items-end mb-2">
            {/* Left: Logo */}
            <div className="flex items-center">
              {logoSelection === 'tech' ? (
                 <div className="flex items-center gap-2">
                   <img src="/Invoicelogo.png" alt="Logo" className="h-12 object-contain" />
                 </div>
              ) : (
                <img src="/vaseveda.png" alt="Veda Logo" className="h-14 object-contain" />
              )}
            </div>

            {/* Right: Contact Info (Moved from Footer) */}
            <div className="header-contact-info flex flex-col items-end">
                <div 
                   contentEditable 
                   className="editable-area outline-none whitespace-nowrap"
                   onBlur={(e) => handleEdit('headerLine1', e.target.innerText)}
                >
                  {formData.headerLine1}
                </div>
                <div 
                   contentEditable 
                   className="editable-area outline-none whitespace-nowrap"
                   onBlur={(e) => handleEdit('headerLine2', e.target.innerText)}
                >
                  {formData.headerLine2}
                </div>
                <div 
                   contentEditable 
                   className="editable-area outline-none whitespace-nowrap"
                   onBlur={(e) => handleEdit('headerLine3', e.target.innerText)}
                >
                  {formData.headerLine3}
                </div>
            </div>
          </div>

          {/* 2. Header Separator */}
          <div className="header-separator-container">
            <div className="header-thin-line"></div>
            <div className="header-thick-line"></div>
          </div>

          {/* 3. Date (Right Aligned, Green) */}
          <div className="text-right mb-8">
            <div 
              contentEditable 
              className="text-[#4a9d2d] font-bold text-sm tracking-wide editable-area outline-none inline-block"
              onBlur={(e) => handleEdit('date', e.target.innerText)}
            >
              {formData.date}
            </div>
          </div>

          {/* 4. Title (Centered, Green, Underlined) */}
          <div className="text-center mb-10">
            <h1 className="text-[#4a9d2d] font-bold text-lg underline underline-offset-4 decoration-2">
              Relieving Letter
            </h1>
          </div>

          {/* 5. Content Block */}
          <div className="flex flex-col gap-6 text-sm text-gray-800">
            
            {/* Recipient Details */}
            <div className="space-y-1">
              <div className="font-bold text-gray-900">To</div>
              <div 
                contentEditable 
                className="font-medium text-gray-900 editable-area outline-none"
                onBlur={(e) => handleEdit('recipientName', e.target.innerText)}
              >
                {formData.recipientName}
              </div>
              <div 
                contentEditable 
                className="font-medium text-gray-800 editable-area outline-none"
                onBlur={(e) => handleEdit('employeeId', e.target.innerText)}
              >
                {formData.employeeId}
              </div>
              <div 
                contentEditable 
                className="font-medium text-gray-800 editable-area outline-none"
                onBlur={(e) => handleEdit('designation', e.target.innerText)}
              >
                {formData.designation}
              </div>
            </div>

            {/* Subject */}
            <div className="mt-4">
              <span className="font-bold text-gray-900">Subject: </span>
              <span 
                contentEditable 
                className="text-gray-900 editable-area outline-none"
                onBlur={(e) => handleEdit('subject', e.target.innerText)}
              >
                {formData.subject}
              </span>
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-justify leading-7">
              <div 
                contentEditable 
                className="editable-area outline-none font-medium"
                onBlur={(e) => handleEdit('salutation', e.target.innerText)}
              >
                {formData.salutation}
              </div>

              <div 
                contentEditable 
                className="editable-area outline-none"
                onBlur={(e) => handleEdit('para1', e.target.innerText)}
              >
                {formData.para1}
              </div>

              <div 
                contentEditable 
                className="editable-area outline-none"
                onBlur={(e) => handleEdit('para2', e.target.innerText)}
              >
                {formData.para2}
              </div>

              <div 
                contentEditable 
                className="editable-area outline-none"
                onBlur={(e) => handleEdit('para3', e.target.innerText)}
              >
                {formData.para3}
              </div>
            </div>

            {/* Signatory Section (Left Aligned) */}
            <div className="mt-12">
              <div 
                contentEditable 
                className="text-gray-900 font-medium mb-8 editable-area outline-none"
                onBlur={(e) => handleEdit('forCompany', e.target.innerText)}
              >
                {formData.forCompany}
              </div>
              
              {/* Signature Image Area - Increased Height and Max Width */}
              <div className="h-28 mb-2 flex items-center">
                 {signatures.signature && (
                   <img src={signatures.signature} alt="Sign" className="max-h-full max-w-[300px] object-contain" />
                 )}
              </div>

              <div 
                contentEditable 
                className="text-[#4a9d2d] font-bold text-sm editable-area outline-none"
                onBlur={(e) => handleEdit('signatoryName', e.target.innerText)}
              >
                {formData.signatoryName}
              </div>
              <div 
                contentEditable 
                className="text-[#4a9d2d] font-bold text-sm editable-area outline-none"
                onBlur={(e) => handleEdit('signatoryTitle', e.target.innerText)}
              >
                {formData.signatoryTitle}
              </div>
            </div>

          </div>
        </div>

        {/* 6. Footer (Empty Green Stripe) */}
        <div className="relative pb-4">
           {/* The image shows no text in footer, just clean space. 
               We keep the green stripe for branding consistency */}
           <div className="green-footer-stripe"></div>
        </div>
      </div>

      {/* --- BOTTOM ACTION BAR (UNCHANGED) --- */}
      <div className="w-full max-w-[210mm] mt-8 mb-12 action-bar-container bg-white border border-gray-200 rounded-xl shadow-lg p-5 flex flex-col md:flex-row items-center justify-between gap-6 transition-all">
        
        {/* Header Options */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <span className="text-gray-500 font-bold text-[10px] tracking-widest uppercase">SELECT HEADER:</span>
          <div className="flex gap-4">
             <label className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${logoSelection === 'tech' ? 'border-[#4a9d2d] bg-green-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="radio" name="logo" checked={logoSelection === 'tech'} onChange={() => setLogoSelection('tech')} className="hidden"/>
                <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${logoSelection === 'tech' ? 'border-[#4a9d2d]' : 'border-gray-400'}`}>
                  {logoSelection === 'tech' && <div className="w-1.5 h-1.5 rounded-full bg-[#4a9d2d]"></div>}
                </div>
                <span className={`text-sm font-semibold ${logoSelection === 'tech' ? 'text-[#4a9d2d]' : 'text-gray-600'}`}>Tech Vaseegrah</span>
             </label>

             <label className={`cursor-pointer flex items-center gap-2 px-3 py-2 rounded-lg border transition-all ${logoSelection === 'veda' ? 'border-[#4a9d2d] bg-green-50' : 'border-gray-200 hover:bg-gray-50'}`}>
                <input type="radio" name="logo" checked={logoSelection === 'veda'} onChange={() => setLogoSelection('veda')} className="hidden"/>
                <div className={`w-3 h-3 rounded-full border flex items-center justify-center ${logoSelection === 'veda' ? 'border-[#4a9d2d]' : 'border-gray-400'}`}>
                  {logoSelection === 'veda' && <div className="w-1.5 h-1.5 rounded-full bg-[#4a9d2d]"></div>}
                </div>
                <span className={`text-sm font-semibold ${logoSelection === 'veda' ? 'text-[#4a9d2d]' : 'text-gray-600'}`}>Vaseegrah Veda</span>
             </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
           <label className="cursor-pointer group flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-300 rounded-lg hover:border-[#4a9d2d] hover:shadow-md transition-all">
             <FaUpload className="text-gray-500 group-hover:text-[#4a9d2d] transition-colors" />
             <span className="text-sm font-bold text-gray-700 group-hover:text-[#4a9d2d]">SIGNATURE</span>
             <input type="file" className="hidden" onChange={handleSignatureUpload} accept="image/*" />
           </label>

           <button 
             onClick={downloadPDF} 
             disabled={isGenerating}
             className="flex items-center gap-2 px-6 py-2.5 bg-[#4a9d2d] text-white rounded-lg shadow-md hover:bg-[#3d8524] hover:shadow-lg active:scale-95 transition-all disabled:opacity-70 disabled:active:scale-100"
           >
             {isGenerating ? (
               <span className="text-sm font-bold animate-pulse">GENERATING...</span>
             ) : (
               <>
                 <FaDownload />
                 <span className="text-sm font-bold">DOWNLOAD PDF</span>
               </>
             )}
           </button>
        </div>
      </div>

    </div>
  );
};

export default RelievingLetter;