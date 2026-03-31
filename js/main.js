// ===================== DATA =====================
const servicesData = [
    { pl: "Diagnostyka silnika", uk: "Діагностика двигуна", icon: '<i class="fa-solid fa-magnifying-glass"></i>', priceFrom: 80, priceTo: 200 },
    { pl: "Wymiana filtra powietrza i kabinowego", uk: "Заміна повітряного та салонного фільтрів", icon: '<i class="fa-solid fa-filter"></i>', priceFrom: 50, priceTo: 120 },
    { pl: "Wymiana oleju silnikowego", uk: "Заміна моторної оливи", icon: '<i class="fa-solid fa-oil-can"></i>', priceFrom: 120, priceTo: 280 },
    { pl: "Serwis klimatyzacji", uk: "Сервіс кондиціонера", icon: '<i class="fa-solid fa-snowflake"></i>', priceFrom: 150, priceTo: 400 },
    { pl: "Naprawa układu kierowniczego i zawieszenia", uk: "Ремонт рульового управління та підвіски", icon: '<i class="fa-solid fa-screwdriver-wrench"></i>', priceFrom: 200, priceTo: 800 },
    { pl: "Serwis układu hamulcowego", uk: "Сервіс гальмівної системи", icon: '<i class="fa-solid fa-circle-stop"></i>', priceFrom: 150, priceTo: 500 },
    { pl: "Diagnostyka i naprawa elektryki", uk: "Діагностика та ремонт електрики", icon: '<i class="fa-solid fa-bolt"></i>', priceFrom: 100, priceTo: 600 },
    { pl: "Wymiana elementów zawieszenia", uk: "Заміна елементів підвіски", icon: '<i class="fa-solid fa-wrench"></i>', priceFrom: 300, priceTo: 1200 },
    { pl: "Wymiana klocków i tarcz hamulcowych", uk: "Заміна гальмівних колодок і дисків", icon: '<i class="fa-duotone fa-regular fa-brake-warning"></i>', priceFrom: 200, priceTo: 600 },
    { pl: "Wymiana opon", uk: "Заміна шин", icon: '<i class="fa-solid fa-rotate"></i>', priceFrom: 100, priceTo: 250 },
    { pl: "Napełnianie i odgrzybianie klimatyzacji", uk: "Заправка та дезінфекція кондиціонера", icon: '<i class="fa-solid fa-wind"></i>', priceFrom: 120, priceTo: 200 },
    { pl: "Przegląd i serwis okresowy", uk: "Планове технічне обслуговування", icon: '<i class="fa-solid fa-clipboard-check"></i>', priceFrom: 200, priceTo: 500 },
    { pl: "Naprawy ogólne i konserwacja", uk: "Загальний ремонт та обслуговування", icon: '<i class="fa-solid fa-screwdriver"></i>', priceFrom: 100, priceTo: 1000 },
    { pl: "Rotacja opon", uk: "Ротація шин", icon: '<i class="fa-solid fa-arrows-rotate"></i>', priceFrom: 80, priceTo: 200 },
    { pl: "Kontrola stanu technicznego pojazdu", uk: "Перевірка технічного стану авто", icon: '<i class="fa-solid fa-check"></i>', priceFrom: 80, priceTo: 150 },
    { pl: "Naprawa hamulców", uk: "Ремонт гальм", icon: '<i class="fa-solid fa-circle-exclamation"></i>', priceFrom: 200, priceTo: 600 },
    { pl: "Naprawa skrzyni biegów", uk: "Ремонт коробки передач", icon: '<i class="fa-solid fa-gears"></i>', priceFrom: 400, priceTo: 2000 },
    { pl: "Montaż piór wycieraczek", uk: "Встановлення двірників", icon: '<i class="fa-solid fa-water"></i>', priceFrom: 30, priceTo: 80 },
    { pl: "Czyszczenie wnętrza odkurzaczem", uk: "Пилосос салону", icon: '<i class="fa-solid fa-broom"></i>', priceFrom: 50, priceTo: 120 },
    { pl: "Naprawa i wymiana opon", uk: "Ремонт та заміна шин", icon: '<i class="fa-solid fa-circle-notch"></i>', priceFrom: 80, priceTo: 300 },
];
const reviewsData = [
    { name: "Tomasz K.", date: "2024-11-15", stars: 5, pl: "Świetna obsługa! Diagnoza szybka i precyzyjna, cena uczciwa. Polecam każdemu w Opolu.", uk: "Чудове обслуговування! Діагностика швидка та точна, ціна чесна. Рекомендую кожному в Ополе." },
    { name: "Marta W.", date: "2024-10-08", stars: 5, pl: "Byłam sceptyczna, ale zostałam mile zaskoczona. Profesjonalizm na każdym kroku. Mechanicy tłumaczą co robią.", uk: "Була скептичною, але приємно здивована. Професіоналізм на кожному кроці. Механіки пояснюють, що роблять." },
    { name: "Andrzej P.", date: "2024-09-22", stars: 5, pl: "Trzecia wizyta i zawsze na 5+. Szybko, tanio, rzetelnie. Mój stały serwis od teraz.", uk: "Третій візит і завжди на 5+. Швидко, дешево, надійно. Мій постійний сервіс відтепер." },
    { name: "Iryna S.", date: "2024-08-30", stars: 5, pl: "Jestem z Ukrainy i bałam się bariery językowej. Tu mówią też po ukraińsku! Naprawa klimatyzacji – super.", uk: "Я з України і боялася мовного бар'єру. Тут говорять і по-українськи! Ремонт кондиціонера — супер." },
    { name: "Piotr M.", date: "2024-07-14", stars: 4, pl: "Dobra robota z zawieszeniem. Trochę czekałem na termin, ale warto było. Uczciwa wycena.", uk: "Гарна робота з підвіскою. Трохи чекав на термін, але воно того варте. Чесне кошторисування." },
    { name: "Karolina B.", date: "2024-06-05", stars: 5, pl: "Polecam z czystym sumieniem. Wymiana opon i przegląd – wszystko sprawnie, fachowo i z uśmiechem!", uk: "Рекомендую з чистою совістю. Заміна шин та огляд — все оперативно, фахово і з усмішкою!" },
];

const brandsData = [
    "Alfa Romeo", "Audi", "BMW", "Chevrolet", "Chrysler", "Citroen", "Dacia",
    "Ferrari", "Fiat", "Ford", "Honda", "Hyundai", "Jaguar", "Jeep", "Kia",
    "Land Rover", "Lexus", "Mazda", "Mercedes", "Mini", "Mitsubishi", "Nissan",
    "Opel", "Peugeot", "Porsche", "Renault", "Seat", "Skoda", "Subaru", "Suzuki",
    "Toyota", "Volkswagen", "Volvo", "Dodge", "Daewoo"
];

// ===================== STATE =====================
let currentLang = 'pl';
let currentPage = 'home';
let selectedDate = null;
let bookedDates = {};
let calendarDate = new Date();
let swiperPos = 0;

// Simulate booked dates
function genBookedDates() {
    const today = new Date();
    const d = {};
    for (let i = 0; i < 30; i++) {
        const rd = new Date(today);
        rd.setDate(today.getDate() + Math.floor(Math.random() * 60) + 1);
        if (rd.getDay() !== 0 && rd.getDay() !== 6) {
            const k = `${rd.getFullYear()}-${rd.getMonth()}-${rd.getDate()}`;
            d[k] = true;
        }
    }
    return d;
}
bookedDates = genBookedDates();

// ===================== LANG =====================
function setLang(lang) {
    currentLang = lang;
    document.getElementById('lang-pl').classList.toggle('active', lang === 'pl');
    document.getElementById('lang-uk').classList.toggle('active', lang === 'uk');

    document.querySelectorAll('[data-pl]').forEach(el => {
        const txt = el.getAttribute('data-' + lang);
        if (!txt) return;
        if (el.tagName === 'INPUT' || el.tagName === 'SELECT') return;
        el.innerHTML = txt;
    });

    document.querySelectorAll('option[data-pl]').forEach(opt => {
        opt.textContent = opt.getAttribute('data-' + lang) || opt.getAttribute('data-pl');
    });

    buildBookingSelect();

    const hdrBtn = document.getElementById('btn-contact-hdr');
    if (hdrBtn) hdrBtn.textContent = lang === 'pl' ? 'Kontakt' : 'Контакт';
}

// ===================== PAGE ROUTING =====================
function showPage(page) {
    currentPage = page;
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById('page-' + page);
    if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (page === 'home') {
        setTimeout(() => { initScrollAnimations(); }, 100);
    }
    if (page === 'booking-page') {
        buildCalendar();
    }
}

function scrollTo(id) {
    setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

function toggleMenu() {
    const m = document.getElementById('mobile-menu');
    m.classList.toggle('open');
}

// ===================== SERVICES =====================
function buildServicesGrid() {
    const grid = document.getElementById('services-grid');
    if (!grid) return;
    grid.innerHTML = '';
    servicesData.forEach((s, i) => {
        const card = document.createElement('div');
        card.className = 'service-card';
        card.style.transitionDelay = (i % 4 * 0.08) + 's';
        card.innerHTML = `
      <div class="service-card-img">
        <div class="service-card-img-icon">${s.icon}</div>
        <div class="service-card-img-overlay"></div>
      </div>
      <div class="service-card-body">
        <div class="service-card-title">${s.pl}</div>
        <div class="service-card-price">
          od ${s.priceFrom} zł <span>/ do ${s.priceTo} zł</span>
        </div>
        <div class="service-card-arrow">
          <span class="service-card-link">${currentLang === 'pl' ? 'Szczegóły' : 'Деталі'} →</span>
        </div>
      </div>
    `;
        card.onclick = () => openService(i);
        grid.appendChild(card);
    });

    setTimeout(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                    observer.unobserve(e.target);
                }
            });
        }, { threshold: 0.1 });
        grid.querySelectorAll('.service-card').forEach(c => observer.observe(c));
    }, 100);
}

function openService(idx) {
    const s = servicesData[idx];
    document.getElementById('sd-title').textContent = currentLang === 'pl' ? s.pl : s.uk;
    document.getElementById('sd-subtitle').textContent = currentLang === 'pl'
        ? 'Profesjonalna usługa mechaniczna w serwisie MELKUR w Opolu.'
        : 'Професійна механічна послуга в сервісі MELKUR в Ополе.';
    document.getElementById('sd-price').textContent = `od ${s.priceFrom} – do ${s.priceTo} zł`;

    const descs = {
        pl: [
            `<h2>O usłudze</h2><p>Usługa <strong>${s.pl}</strong> w serwisie MELKUR jest wykonywana przez wykwalifikowanych mechaników z wieloletnim doświadczeniem. Korzystamy z nowoczesnych urządzeń diagnostycznych i oryginalnych lub równorzędnych części zamiennych.</p>`,
            `<h2>Przebieg usługi</h2><p>1. Przyjęcie pojazdu i wstępna ocena stanu technicznego.<br>2. Szczegółowa diagnoza i przygotowanie kosztorysu.<br>3. Wykonanie naprawy / usługi po zatwierdzeniu przez klienta.<br>4. Kontrola jakości i test końcowy.<br>5. Wydanie pojazdu z dokumentacją.</p>`,
            `<h2>Gwarancja</h2><p>Na każdą wykonywaną usługę udzielamy gwarancji. Szczegóły gwarancji ustalane są indywidualnie przy odbiorze pojazdu.</p>`
        ],
        uk: [
            `<h2>Про послугу</h2><p>Послуга <strong>${s.uk}</strong> в сервісі MELKUR виконується кваліфікованими механіками з багаторічним досвідом. Ми використовуємо сучасне діагностичне обладнання та оригінальні або рівноцінні запасні частини.</p>`,
            `<h2>Перебіг послуги</h2><p>1. Прийом автомобіля та попередня оцінка технічного стану.<br>2. Детальна діагностика та підготовка кошторису.<br>3. Виконання ремонту / послуги після затвердження клієнтом.<br>4. Контроль якості та фінальне тестування.<br>5. Видача автомобіля з документацією.</p>`,
            `<h2>Гарантія</h2><p>На кожну виконувану послугу ми надаємо гарантію. Деталі гарантії обговорюються індивідуально при прийомі автомобіля.</p>`
        ]
    };

    document.getElementById('sd-body').innerHTML = descs[currentLang].join('');
    showPage('service-detail');
}

// ===================== BRANDS =====================
function buildBrandsGrid() {
    const grid = document.getElementById('brands-grid');
    if (!grid) return;
    const makeItems = (arr) => arr.map(b => `
      <div class="brand-pill">
        <span class="brand-icon"><i class="fa-solid fa-car-side"></i></span>
        <span class="brand-name">${b}</span>
      </div>
    `).join('');

    const row1 = makeItems(brandsData);
    const row2 = makeItems([...brandsData].reverse());

    grid.innerHTML = `
      <div class="brands-marquee">
        <div class="marquee-row marquee-left">
          <div class="marquee-inner">${row1}${row1}</div>
        </div>
        <div class="marquee-row marquee-right">
          <div class="marquee-inner">${row2}${row2}</div>
        </div>
      </div>
    `;
}

// ===================== REVIEWS SWIPER =====================
function buildReviews() {
    const track = document.getElementById('swiper-track');
    if (!track) return;
    track.innerHTML = '';
    reviewsData.forEach(r => {
        const card = document.createElement('div');
        card.className = 'review-card';
        const initials = r.name.split(' ').map(n => n[0]).join('');
        const stars = '★'.repeat(r.stars) + '☆'.repeat(5 - r.stars);
        const txt = currentLang === 'pl' ? r.pl : r.uk;
        card.innerHTML = `
      <div class="review-header">
        <div class="review-avatar">${initials}</div>
        <div>
          <div class="review-name">${r.name}</div>
          <div class="review-date">${r.date}</div>
        </div>
      </div>
      <div class="review-stars">${stars}</div>
      <p class="review-text">${txt}</p>
    `;
        track.appendChild(card);
    });
}

function getVisibleCards() {
    const w = window.innerWidth;
    if (w < 600) return 1;
    if (w < 900) return 1;
    return 3;
}

function swiperNext() {
    const track = document.getElementById('swiper-track');
    if (!track) return;
    const cards = track.querySelectorAll('.review-card');
    const cardW = cards[0] ? cards[0].offsetWidth + 24 : 320;
    const max = Math.max(0, (reviewsData.length - getVisibleCards()) * cardW);
    swiperPos = Math.min(swiperPos + cardW, max);
    track.style.transform = `translateX(-${swiperPos}px)`;
}

function swiperPrev() {
    const track = document.getElementById('swiper-track');
    if (!track) return;
    const cards = track.querySelectorAll('.review-card');
    const cardW = cards[0] ? cards[0].offsetWidth + 24 : 320;
    swiperPos = Math.max(swiperPos - cardW, 0);
    track.style.transform = `translateX(-${swiperPos}px)`;
}

// ===================== BOOKING CALENDAR =====================
function buildBookingSelect() {
    const sel = document.getElementById('booking-service');
    if (!sel) return;
    sel.innerHTML = `<option value="">${currentLang === 'pl' ? '-- Wybierz usługę --' : '-- Оберіть послугу --'}</option>`;
    servicesData.forEach((s, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = currentLang === 'pl' ? s.pl : s.uk;
        sel.appendChild(opt);
    });
}

function onServiceChange() {
    selectedDate = null;
    const disp = document.getElementById('selected-date-display');
    if (disp) disp.textContent = '';
    buildCalendar();
}

function buildCalendar() {
    const wrap = document.getElementById('calendar-wrap');
    if (!wrap) return;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const year = calendarDate.getFullYear();
    const month = calendarDate.getMonth();

    const monthNames = {
        pl: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
        uk: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень']
    };
    const dayNames = {
        pl: ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob', 'Nd'],
        uk: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд']
    };

    let html = `
    <div class="calendar-header">
      <button class="cal-nav-btn" onclick="calPrev()">&#8249;</button>
      <div class="cal-month-title">${monthNames[currentLang][month]} ${year}</div>
      <button class="cal-nav-btn" onclick="calNext()">&#8250;</button>
    </div>
    <div class="calendar-grid">
  `;

    dayNames[currentLang].forEach(d => {
        html += `<div class="cal-day-header">${d}</div>`;
    });

    const firstDay = new Date(year, month, 1);
    let startDow = firstDay.getDay(); // 0=Sun, 1=Mon
    startDow = startDow === 0 ? 6 : startDow - 1;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDays = new Date(year, month, 0).getDate();

    for (let i = 0; i < startDow; i++) {
        html += `<div class="cal-day other-month">${prevDays - startDow + 1 + i}</div>`;
    }

    for (let d = 1; d <= daysInMonth; d++) {
        const date = new Date(year, month, d);
        const dow = date.getDay();
        const isWeekend = dow === 0 || dow === 6;
        const isPast = date < today;
        const key = `${year}-${month}-${d}`;
        const isBooked = bookedDates[key];
        const isSelected = selectedDate &&
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === d;

        let cls = 'cal-day';
        let onclick = '';
        if (isPast) cls += ' past';
        else if (isWeekend) cls += ' weekend';
        else if (isBooked) cls += ' booked';
        else {
            cls += ' available';
            onclick = `onclick="selectDate(${year},${month},${d})"`;
        }
        if (isSelected) cls += ' selected';

        html += `<div class="${cls}" ${onclick}>${d}</div>`;
    }

    const total = startDow + daysInMonth;
    const remain = total % 7 === 0 ? 0 : 7 - (total % 7);
    for (let i = 1; i <= remain; i++) {
        html += `<div class="cal-day other-month">${i}</div>`;
    }

    html += '</div>';
    wrap.innerHTML = html;
}

function selectDate(y, m, d) {
    selectedDate = new Date(y, m, d);
    const months = {
        pl: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
        uk: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня']
    };
    const disp = document.getElementById('selected-date-display');
    if (!disp) return;
    disp.textContent = currentLang === 'pl'
        ? `✓ Wybrana data: ${d} ${months.pl[m]} ${y}`
        : `✓ Обрана дата: ${d} ${months.uk[m]} ${y}`;
    buildCalendar();
}

function calPrev() {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    buildCalendar();
}

function calNext() {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    buildCalendar();
}

// ===================== BOOKING SUBMIT =====================
function submitBooking() {
    const service = document.getElementById('booking-service').value;
    const name = document.getElementById('booking-name').value.trim();
    const phone = document.getElementById('booking-phone').value.trim();

    if (!service) {
        showToast('error',
            currentLang === 'pl' ? 'Wybierz usługę' : 'Оберіть послугу',
            currentLang === 'pl' ? 'Proszę wybrać usługę z listy.' : 'Будь ласка, оберіть послугу зі списку.'
        );
        return;
    }
    if (!selectedDate) {
        showToast('error',
            currentLang === 'pl' ? 'Wybierz datę' : 'Оберіть дату',
            currentLang === 'pl' ? 'Proszę wybrać dostępny termin.' : 'Будь ласка, оберіть доступний термін.'
        );
        return;
    }
    if (!name) {
        showToast('error',
            currentLang === 'pl' ? 'Podaj imię' : 'Введіть ім\'я',
            currentLang === 'pl' ? 'Pole imię i nazwisko jest wymagane.' : 'Поле ім\'я та прізвище є обов\'язковим.'
        );
        return;
    }
    if (!phone) {
        showToast('error',
            currentLang === 'pl' ? 'Podaj telefon' : 'Введіть телефон',
            currentLang === 'pl' ? 'Pole numer telefonu jest wymagane.' : 'Поле номер телефону є обов\'язковим.'
        );
        return;
    }

    const ok = Math.random() > 0.15;

    if (ok) {
        const key = `${selectedDate.getFullYear()}-${selectedDate.getMonth()}-${selectedDate.getDate()}`;
        bookedDates[key] = true;

        showToast('success',
            currentLang === 'pl' ? 'Rezerwacja potwierdzona!' : 'Бронювання підтверджено!',
            currentLang === 'pl'
                ? `Termin na ${selectedDate.toLocaleDateString('pl-PL')} został zarezerwowany.`
                : `Термін на ${selectedDate.toLocaleDateString('uk-UA')} забронований.`,
            true, selectedDate, servicesData[parseInt(service)]
        );

        document.getElementById('booking-service').value = '';
        document.getElementById('booking-name').value = '';
        document.getElementById('booking-phone').value = '';
        selectedDate = null;
        const disp = document.getElementById('selected-date-display');
        if (disp) disp.textContent = '';
        buildCalendar();
    } else {
        showToast('error',
            currentLang === 'pl' ? 'Błąd rezerwacji' : 'Помилка бронювання',
            currentLang === 'pl'
                ? 'Nie udało się zarezerwować. Spróbuj ponownie.'
                : 'Не вдалося забронювати. Спробуйте ще раз.'
        );
    }
}

// ===================== TOAST =====================
function showToast(type, title, msg, gcal = false, date = null, service = null) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let gcalHtml = '';
    if (gcal && date && service) {
        const sName = currentLang === 'pl' ? service.pl : service.uk;
        const dtStr = date.toISOString().replace(/-|:|\.\d{3}/g, '').slice(0, 8);
        const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('MELKUR - ' + sName)}&dates=${dtStr}/${dtStr}&details=${encodeURIComponent('Serwis MELKUR, Wrocławska 102, Opole. Tel: 510 575 008')}&location=${encodeURIComponent('Wrocławska 102, Opole')}`;
        const gcalTxt = currentLang === 'pl' ? '📅 Dodaj do Google Calendar' : '📅 Додати до Google Calendar';
        gcalHtml = `<a class="toast-gcal" href="${gcalUrl}" target="_blank">${gcalTxt}</a>`;
    }

    toast.innerHTML = `
    <div class="toast-icon">${type === 'success' ? '✅' : '❌'}</div>
    <div class="toast-body">
      <div class="toast-title">${title}</div>
      <div class="toast-msg">${msg}</div>
      ${gcalHtml}
    </div>
  `;

    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(40px)';
        setTimeout(() => toast.remove(), 300);
    }, 6000);
}

// ===================== SCROLL ANIMATIONS =====================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ===================== INIT =====================
window.addEventListener('DOMContentLoaded', () => {
    const fb = document.querySelector('.footer-bottom');
    if (fb) {
        fb.innerHTML = `
          <p>
            © 2026 MELKUR Serwis Samochodowy.
            <span data-pl="Wszystkie prawa zastrzeżone." data-uk="Всі права захищені.">Wszystkie prawa zastrzeżone.</span>
          </p>
          <div class="footer-legal-links">
            <a onclick="showPage('privacy')" data-pl="Polityka prywatności" data-uk="Політика конфіденційності">Polityka prywatności</a>
            <span class="footer-sep">•</span>
            <a onclick="showPage('terms')" data-pl="Warunki korzystania" data-uk="Умови використання">Warunki korzystania</a>
          </div>
        `;
    }
    if (!document.getElementById('page-privacy')) {
        const div = document.createElement('div');
        div.className = 'page';
        div.id = 'page-privacy';
        div.innerHTML = `
          <div class="legal-page">
            <div class="legal-inner">
              <h1 data-pl="Polityka prywatności" data-uk="Політика конфіденційності">Polityka prywatności</h1>
              <p data-pl="Data obowiązywania: 01.01.2025" data-uk="Дата набуття чинності: 01.01.2025">Data obowiązywania: 01.01.2025</p>
              <h2 data-pl="1. Administrator danych" data-uk="1. Адміністратор даних">1. Administrator danych</h2>
              <p data-pl="Administratorem danych jest MELKUR Serwis Samochodowy, Wrocławska 102, Opole. Kontakt: 510 575 008." data-uk="Адміністратором даних є MELKUR Serwis Samochodowy, Wrocławska 102, Ополе. Контакт: 510 575 008.">Administratorem danych jest MELKUR Serwis Samochodowy, Wrocławska 102, Opole. Kontakt: 510 575 008.</p>
              <h2 data-pl="2. Zakres i cel przetwarzania" data-uk="2. Обсяг і мета обробки">2. Zakres i cel przetwarzania</h2>
              <p data-pl="Przetwarzamy dane przekazane w formularzu rezerwacji i kontaktu wyłącznie w celu obsługi zapytania i realizacji usług." data-uk="Ми обробляємо дані, надані у формі бронювання та контакту, виключно з метою обробки запиту та надання послуг.">Przetwarzamy dane przekazane w formularzu rezerwacji i kontaktu wyłącznie w celu obsługi запytania i realizacji usług.</p>
              <h2 data-pl="3. Podstawy prawne" data-uk="3. Правові підстави">3. Podstawy prawne</h2>
              <p data-pl="Art. 6 ust. 1 lit. b i f RODO – wykonanie umowy i uzasadniony interes administratora." data-uk="Ст. 6 п. 1 літ. b та f GDPR – виконання договору та законний інтерес адміністратора.">Art. 6 ust. 1 lit. b i f RODO – wykonanie umowy i uzasadniony interes administratora.</p>
              <h2 data-pl="4. Okres przechowywania" data-uk="4. Строк зберігання">4. Okres przechowywania</h2>
              <p data-pl="Dane przechowujemy przez czas niezbędny do realizacji usługi oraz zgodnie z przepisami prawa." data-uk="Дані зберігаємо стільки, скільки необхідно для надання послуги та відповідно до законодавства.">Dane przechowujemy przez czas niezbędny do realizacji usługi oraz zgodnie z przepisami prawa.</p>
              <h2 data-pl="5. Prawa użytkownika" data-uk="5. Права користувача">5. Prawa użytkownika</h2>
              <p data-pl="Masz prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania i wniesienia skargi do PUODO." data-uk="Ви маєте право на доступ, виправлення, видалення, обмеження обробки та подання скарги до уповноваженого органу.">Masz prawo dostępu, sprostowania, usunięcia, ograniczenia przetwarzania i wniesienia skargi do PUODO.</p>
              <p><a class="btn-primary" onclick="showPage('home')" data-pl="Powrót" data-uk="Назад">Powrót</a></p>
            </div>
          </div>
        `;
        document.body.appendChild(div);
    }
    if (!document.getElementById('page-terms')) {
        const div2 = document.createElement('div');
        div2.className = 'page';
        div2.id = 'page-terms';
        div2.innerHTML = `
          <div class="legal-page">
            <div class="legal-inner">
              <h1 data-pl="Warunki korzystania" data-uk="Умови використання">Warunki korzystania</h1>
              <p data-pl="Data obowiązywania: 01.01.2025" data-uk="Дата набуття чинності: 01.01.2025">Data obowiązywania: 01.01.2025</p>
              <h2 data-pl="1. Postanowienia ogólne" data-uk="1. Загальні положення">1. Postanowienia ogólne</h2>
              <p data-pl="Korzystając ze strony wyrażasz zgodę на niniejsze warunki. Serwis służy umawianiu wizyt i przekazywaniu informacji o usługach." data-uk="Користуючись сайтом, ви погоджуєтесь із цими умовами. Сайт призначений для запису на сервіс та інформування про послуги.">Korzystając ze strony wyrażasz zgodę на niniejsze warunki. Serwis służy umawianiu wizyt i przekazywaniu informacji o usługach.</p>
              <h2 data-pl="2. Odpowiedzialność" data-uk="2. Відповідальність">2. Odpowiedzialność</h2>
              <p data-pl="Dokładamy starań, aby treści były актуальne, jednak nie gwarantujemy pełnej poprawności; szczegóły ustalane są indywidualnie." data-uk="Ми прагнемо до актуальності інформації, однак не гарантуємо повної точності; деталі узгоджуються індивідуально.">Dokładamy starań, aby treści były актуальne, jednak nie gwarantujemy pełnej poprawności; szczegóły ustalane są indywidualnie.</p>
              <h2 data-pl="3. Rezerwacje" data-uk="3. Бронювання">3. Rezerwacje</h2>
              <p data-pl="Wysłanie formularza nie stanowi natychmiastowego zawarcia umowy; termin potwierdzamy telefonicznie lub wiadomością." data-uk="Надсилання форми не є миттєвим укладенням договору; час підтверджується телефоном або повідомленням.">Wysłanie formularza nie stanowi natychmiastowego zawarcia umowy; termin potwierdzamy telefonicznie lub wiadomością.</p>
              <h2 data-pl="4. Prawa autorskie" data-uk="4. Авторське право">4. Prawa autorskie</h2>
              <p data-pl="Wszelkie materiały на stronie podlegają ochronie prawnej. Zabronione jest ich kopiowanie bez zgody." data-uk="Усі матеріали на сайті охороняються законом. Копіювання без згоди заборонено.">Wszelkie materiały на stronie podlegają ochronie prawnej. Zabronione jest ich kopiowanie bez zgody.</p>
              <p><a class="btn-primary" onclick="showPage('home')" data-pl="Powrót" data-uk="Назад">Powrót</a></p>
            </div>
          </div>
        `;
        document.body.appendChild(div2);
    }
    buildServicesGrid();
    buildBrandsGrid();
    buildReviews();
    buildBookingSelect();
    setLang(currentLang);
    setTimeout(initScrollAnimations, 200);
});

window.addEventListener('resize', () => {
    swiperPos = 0;
    const track = document.getElementById('swiper-track');
    if (track) track.style.transform = 'translateX(0)';
});
