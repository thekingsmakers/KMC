// script.js
const { jsPDF } = window.jspdf;

// Base64-encoded logo (replace with your actual Base64 string)
const logoBase64 = "data:image/jpeg;base64,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"; // Replace with your Base64 logo


function generateReport() {
    console.log("Generate Report button clicked.");

    // Get form values
    const patientName = document.getElementById('patientName').value;
    const ageGender = document.getElementById('ageGender').value;
    const contactNo = document.getElementById('contactNo').value;
    const visitDate = document.getElementById('visitDate').value;
    const referredDr = document.getElementById('referredDr').value;
    const consultedDr = document.getElementById('consultedDr').value;
    const procedure = document.getElementById('procedure').value;
    const medication = document.getElementById('medication').value;
    const diagnosticImages = document.getElementById('diagnosticImages').files;

    // Validate form inputs
    if (!patientName || !ageGender || !contactNo || !visitDate || !procedure || !medication || diagnosticImages.length === 0) {
        alert('Please fill all fields and upload diagnostic images.');
        return;
    }

    // Create a new PDF document
    const doc = new jsPDF();
    const margin = 10; // 10mm margin
    const pageWidth = doc.internal.pageSize.getWidth();

    // Load logo and add to PDF
    const logoImg = new Image();
    logoImg.src = logoBase64;

    logoImg.onload = function () {
        // Add logo
        doc.addImage(logoImg, 'PNG', margin, margin, 50, 50);

        // Add address below the logo
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        doc.text('Korean Medical Center', margin + 60, margin + 15);
        doc.text('Zone 69, Street 180, Building 8', margin + 60, margin + 20);
        doc.text('Doha Qatar', margin + 60, margin + 25);

        // Add title
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.text('KMC ENT REPORT', margin + 60, margin + 40);

        // Add horizontal line
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.line(margin, margin + 50, pageWidth - margin, margin + 50);

        // Add patient information in rows
        let yOffset = margin + 60;
        doc.setFontSize(12);
        doc.setFont('helvetica', 'normal');
        doc.text(`Patient Name: ${patientName}`, margin, yOffset);
        doc.text(`Age/Gender: ${ageGender}`, margin + 100, yOffset);
        yOffset += 10;
        doc.text(`Contact No: ${contactNo}`, margin, yOffset);
        doc.text(`Visit Date: ${visitDate}`, margin + 100, yOffset);
        yOffset += 10;
        doc.text(`Referred Dr: ${referredDr}`, margin, yOffset);
        doc.text(`Consulted Dr: ${consultedDr}`, margin + 100, yOffset);
        yOffset += 10;
        doc.text(`Procedure: ${procedure}`, margin, yOffset);
        doc.text(`Medication: ${medication}`, margin + 100, yOffset);

        // Add horizontal line
        yOffset += 10;
        doc.line(margin, yOffset, pageWidth - margin, yOffset);

        // Add images in a grid (2x2 or more)
        yOffset += 20;
        const imageSize = 50;
        const imageMargin = 10;
        const imagesPerRow = 2;
        let imagesProcessed = 0;

        // Track loaded images
        const loadImage = (file, index) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const imageDataUrl = e.target.result;
                    const row = Math.floor(index / imagesPerRow);
                    const col = index % imagesPerRow;
                    const x = margin + col * (imageSize + imageMargin);
                    const y = yOffset + row * (imageSize + imageMargin);

                    // Add image
                    const imageType = file.type.split('/')[1].toUpperCase();
                    doc.addImage(imageDataUrl, imageType, x, y, imageSize, imageSize);
                    resolve();
                };
                reader.readAsDataURL(file);
            });
        };

        // Process all images and save PDF
        Promise.all(Array.from(diagnosticImages).map((file, index) => loadImage(file, index)))
            .then(() => {
                // Add visit summary
                const totalRows = Math.ceil(diagnosticImages.length / imagesPerRow);
                const summaryY = yOffset + totalRows * (imageSize + imageMargin) + 20;
                doc.text(`Visit Summary:`, margin, summaryY);
                doc.text(`Dr Fad Bitar`, margin, summaryY + 10);
                doc.text(`ENT Consultant`, margin, summaryY + 20);
                doc.save('ENT_Report.pdf');
            });
    };

    logoImg.onerror = () => {
        alert("Error loading logo. Please check the Base64 string.");
    };
}