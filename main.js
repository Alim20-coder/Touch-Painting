
// hero section start  
const textElement = document.getElementById("typing-text");
const phrases = [
  "إبداع في الدهانات..",
  "دقة في التشطيب..",
  "لمسة فنية لجدرانك..",
];
let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    // حالة المسح
    textElement.textContent = currentPhrase.substring(0, characterIndex - 1);
    characterIndex--;
  } else {
    // حالة الكتابة
    textElement.textContent = currentPhrase.substring(0, characterIndex + 1);
    characterIndex++;
  } // تحديد سرعة الكتابة والمسح

  let typeSpeed = isDeleting ? 50 : 150; // إذا اكتملت الجملة

  if (!isDeleting && characterIndex === currentPhrase.length) {
    typeSpeed = 2000; // انتظر ثانيتين قبل المسح
    isDeleting = true;
  } else if (isDeleting && characterIndex === 0) {
    // إذا انتهى المسح
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // انتقل للجملة التالية
    textElement.className = "color-" + phraseIndex; // بيغير الكلاس مع كل جملة
    typeSpeed = 500;
  }

  setTimeout(type, typeSpeed);
}

// ابدأ التأثير عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", type);
// hero section end



// second section start 
// تأثير الظهور التدريجي عند السكرول (Scroll Animation)
document.addEventListener("DOMContentLoaded", function() {
    
    // تحديد العناصر التي سنراقبها
    const reveals = document.querySelectorAll('.reveal-left, .reveal-right');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // إذا أصبح العنصر ظاهراً في الشاشة
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                // توقف عن مراقبة العنصر بعد ظهوره لمرة واحدة
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // نسبة ظهور العنصر (15%) لتفعيل التأثير
    });

    // بدء مراقبة كل عنصر
    reveals.forEach(element => {
        observer.observe(element);
    });
});
// second section end
// section three start 
// مصفوفة البيانات
const worksData = [
    { title: "دهانات داخلية", desc: "أحدث صيحات الألوان والدهانات العصرية التي تناسب ذوقك وتمنح منزلك لمسة فخامة.",photos:"./Assets/Photos/1.jpeg" },
    { title: "ترميم واجهات", desc: "نقدم خدمات ترميم شاملة للواجهات المتضررة باستخدام مواد عالية الجودة لضمان المتانة.",photos:"./Assets/Photos/2.jpeg" },
    { title: "ديكورات جبس", desc: "تصميم وتنفيذ أرقى ديكورات الجبس بورد والأسقف المعلقة بلمسات فنية محترفة." ,photos:"./Assets/Photos/3.jpeg"},
    { title: "عزل ومعالجة", desc: "حلول جذرية لمشاكل الرطوبة والتشققات مع عزل حراري ومائي متطور للجدران.",photos:"./Assets/Photos/4.jpeg" },
    { title: "ترميم وتجديد", desc: "إعادة إحياء المباني القديمة وتحويلها إلى تحف معمارية مع الحفاظ على أصالتها." ,photos:"./Assets/Photos/5.jpeg"},
    { title: "دهانات خارجية", desc: "دهانات مقاومة للعوامل الجوية تضمن بقاء منزلك مشرقاً وجذاباً لسنوات طويلة.",photos:"./Assets/Photos/6.jpeg" }
];

const worksContainer = document.getElementById('worksContainer');

function renderWorks() {
    // استخدام map لتوليد الكاردات بكلاسات بوتستراب
worksContainer.innerHTML = worksData.map(work => `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card h-100 border-0 shadow-lg position-relative overflow-hidden" 
             onmouseenter="this.style.transform='translateY(-15px)'; this.style.backgroundColor='#f5f0e1';" 
             onmouseleave="this.style.transform='translateY(0)'; this.style.backgroundColor='#ffffff';"
             style="transition: all 0.4s ease; cursor: pointer;">
             
            <div class="ratio ratio-4x3 border-bottom">
                <img src="${work.photos}" 
                     class="card-img-top object-fit-cover w-100 h-100" 
                     alt="${work.title}"
                     onerror="this.src='https://via.placeholder.com/400x300?text=No+Image'">
            </div>

            <div class="card-body p-4 text-center">
                <h5 class="card-title fw-bold mb-3" style="color: #4b3621;">${work.title}</h5>
                <p class="card-text text-muted mb-4 small">${work.desc}</p>
                <div class="pt-3 border-top">
                    <small class="text-uppercase fw-bold" style="color: #5D4037; letter-spacing: 1px;">دهانات وترميم</small>
                </div>
            </div>
        </div>
    </div>
`).join('');
}

// إضافة تأثير الهوفر لعنوان السكشن (بيج) عن طريق JS كبديل للـ CSS
const title = document.getElementById('sectionTitle');
title.onmouseenter = () => {
    title.style.backgroundColor = '#f5f0e1';
    title.style.color = '#4b3621';
};
title.onmouseleave = () => {
    title.style.backgroundColor = 'transparent';
    title.style.color = '#FFCC80';
};

// تشغيل الوظيفة
document.addEventListener('DOMContentLoaded', renderWorks);
// section three end 






























