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

  .acceptance-container {
    font-family: 'Montserrat', sans-serif;
    color: var(--text-dark);
    line-height: 1.8; /* Slightly increased for the letter body */
  }

  .acceptance-input {
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
  .acceptance-input:hover, .editable-area:hover {
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

  /* --- HEADER BORDER STYLES (EXACT MATCH) --- */
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

  .green-footer-stripe {
    height: 15px;
    background-color: var(--theme-green);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .footer-text {
    font-size: 8px;
    color: var(--theme-green);
    text-align: center;
    line-height: 1.4;
  }

  /* Custom Scrollbar for Action Bar */
  .action-bar-container {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.9);
  }
`;
document.head.appendChild(styleTag);

const AcceptanceLetter = () => {
  const [formData, setFormData] = useState({
    date: 'Date: December 24th 2025',
    
    // Recipient Details
    recipientLines: `To\nDepartment of Computer Science,\nHead of Department,\nBon Secours College for Women.`,
    
    subject: 'Sub: Letter of Internship Acceptance',
    
    // Body Content
    para1: 'We are happy to permit Name (Register No: ), a student of B.Sc. Computer Science from Bon Secours College for Women, to undergo her Internship Training in the domain of Full Stack Development at our organization. The internship will commence from 24th December 2025 and conclude on 17th December 2025.',
    
    para2: 'During this period, the student will be provided with a structured working platform, technical guidance, and all necessary resources required to gain practical exposure in Full Stack Development.',
    
    // Signatory
    closing: 'Best Regards,',
    forCompany: 'For Tech Vaseegrah',
    signatoryName: 'Sreekarthikeyan M',
    signatoryTitle: 'CEO',
    
    // Footer
    footerLine1: 'Regd. Office : 11, Vijaya Street, Srinivasapuram, Thanjavur - 613009',
    footerLine2: 'Phone Number : +91 85240 89733',
    footerLine3: 'Email : techvaseegrah@gmail.com  Website : www.techvaseegrah.com'
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
      pdf.save(`Acceptance_Letter.pdf`);
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
      <div ref={letterRef} className="acceptance-container a4-size">
        <div className="page-content flex flex-col h-full relative">
          
          {/* 1. Header (Logo Only) */}
          <div className="flex items-center gap-3 mb-2">
            {logoSelection === 'tech' ? (
               <div className="flex items-center gap-2">
                 <img src="/Invoicelogo.png" alt="Logo" className="h-12 object-contain" />
                 <div 
                    contentEditable 
                    className="text-[#4a9d2d] font-bold text-xl uppercase tracking-wide editable-area outline-none"
                    onBlur={(e) => handleEdit('companyName', e.target.innerText)}
                 >
                   {formData.companyName}
                 </div>
               </div>
            ) : (
              <img src="/vaseveda.png" alt="Veda Logo" className="h-14 object-contain" />
            )}
          </div>

          {/* 2. Header Separator (Exact Style) */}
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

          {/* 4. Title (Centered, Green) */}
          <div className="text-center mb-10">
            <h1 className="text-[#4a9d2d] font-bold text-lg uppercase tracking-wide">
              ACCEPTANCE LETTER
            </h1>
          </div>

          {/* 5. Content Block */}
          <div className="flex flex-col gap-6 text-sm text-gray-800">
            
            {/* Recipient Address */}
            <div 
              contentEditable 
              className="whitespace-pre-line leading-relaxed font-medium text-gray-900 editable-area outline-none"
              onBlur={(e) => handleEdit('recipientLines', e.target.innerText)}
            >
              {formData.recipientLines}
            </div>

            {/* Subject */}
            <div 
              contentEditable 
              className="font-bold text-gray-900 editable-area outline-none mt-2"
              onBlur={(e) => handleEdit('subject', e.target.innerText)}
            >
              {formData.subject}
            </div>

            {/* Paragraphs */}
            <div className="space-y-6 text-justify leading-7">
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
            </div>

            {/* Signatory Section (Left Aligned) */}
            <div className="mt-8">
              <div 
                contentEditable 
                className="text-[#4a9d2d] font-medium editable-area outline-none"
                onBlur={(e) => handleEdit('closing', e.target.innerText)}
              >
                {formData.closing}
              </div>
              
              <div 
                contentEditable 
                className="text-[#4a9d2d] font-bold mb-2 editable-area outline-none"
                onBlur={(e) => handleEdit('forCompany', e.target.innerText)}
              >
                {formData.forCompany}
              </div>

              {/* Signature Image - Increased size for upload */}
              <div className="h-32 mb-2 flex items-center">
                 {signatures.signature ? (
                   <img src={signatures.signature} alt="Sign" className="max-h-full max-w-[350px] object-contain" />
                 ) : (
                   <span className="text-gray-300 italic text-xs border border-dashed p-2">Signature Area</span>
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

        {/* 6. Footer (Specific to Acceptance Letter Image) */}
        <div className="relative pb-5 pt-2">
           <div className="border-t border-[#4a9d2d] mx-12 mb-2"></div>
           <div className="flex flex-col items-center justify-center px-12 footer-text font-bold">
              <div className="flex gap-2">
                 <span contentEditable onBlur={(e) => handleEdit('footerLine1', e.target.innerText)} className="editable-area outline-none">
                   {formData.footerLine1}
                 </span>
                 <span contentEditable onBlur={(e) => handleEdit('footerLine2', e.target.innerText)} className="editable-area outline-none">
                   {formData.footerLine2}
                 </span>
              </div>
              <div contentEditable onBlur={(e) => handleEdit('footerLine3', e.target.innerText)} className="editable-area outline-none mt-1">
                 {formData.footerLine3}
              </div>
           </div>
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

export default AcceptanceLetter;