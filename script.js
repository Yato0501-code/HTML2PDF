const doc = document.getElementById("htmlForm");
doc.addEventListener("submit", e => {
    e.preventDefault();
    const file = document.getElementById("htmlFile").files[0];

    if (file) {
        console.log("File found, moving further for generating PDF");
        const reader = new FileReader();
        reader.onload = e => {
            const content = e.target.result;
            const divForPreview = document.getElementById("divForPreview");
            divForPreview.innerHTML = content;
            divForPreview.style.display = "block";

            // Convert to PDF   
            const html2pdf = window.html2pdf();
            html2pdf.from(divForPreview).save();
        }
        reader.readAsText(file);
    }
    else {
        alert("Please upload a file");
    }
})
