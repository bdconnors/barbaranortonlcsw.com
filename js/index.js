let coverControl = null;

document.addEventListener('DOMContentLoaded',()=>{
    coverControl = new CoverControl();
    loadCopyright();
});

function loadCopyright() {

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    $('#copyrightYear').append(`<i class='fas fa-copyright'></i> ${currentYear}`);
}




