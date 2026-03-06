// مصفوفة الصور - تم إضافة الامتداد .jpeg لكل صورة
const galleryImages = [
    "../Photos/1.jpeg", "../Photos/2.jpeg", "../Photos/3.jpeg",
    "../Photos/4.jpeg", "../Photos/5.jpeg", "../Photos/6.jpeg",
    "../Photos/7.jpeg", "../Photos/8.jpeg", "../Photos/9.jpeg",
    "../Photos/10.jpeg", "../Photos/11.jpeg", "../Photos/12.jpeg",
    "../Photos/13.jpeg", "../Photos/14.jpeg", "../Photos/15.jpeg"
];

const imageGrid = document.getElementById('imageGrid');
const mainDisplayImg = document.getElementById('mainDisplayImg');

function renderGallery() {
    imageGrid.innerHTML = galleryImages.map((imgSrc, index) => `
        <div class="col-6 col-md-4 col-lg-3">
            <div class="card h-100 border-0 shadow-sm thumb-card ${index === 0 ? 'active-card' : ''}" 
                 onclick="updatePreview('${imgSrc}', this)"
                 style="cursor: pointer; transition: 0.3s;">
                <img src="${imgSrc}" class="card-img-top rounded object-fit-cover" 
                     style="height: 180px;" alt="Work ${index + 1}">
            </div>
        </div>
    `).join('');
}

function updatePreview(src, element) {
    mainDisplayImg.style.opacity = '0.5';
    
    setTimeout(() => {
        mainDisplayImg.src = src;
        mainDisplayImg.style.opacity = '1';
    }, 150);

    document.querySelectorAll('.thumb-card').forEach(card => card.classList.remove('active-card'));
    element.classList.add('active-card');
    
    // سكرول بسيط لأعلى
    window.scrollTo({ top: document.getElementById('artistic-touch-gallery').offsetTop - 20, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', renderGallery);