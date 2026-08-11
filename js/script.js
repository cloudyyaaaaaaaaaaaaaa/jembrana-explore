/* =========================================================
   JEMBRANA EXPLORE — SCRIPT
   ========================================================= */

(function () {
    'use strict';

    /* ===== DESTINATION DATA =====
       Keep this list in sync with what's on the ground —
       no fake prices, hours, addresses or facilities.
       Replace image paths in /assets/images/ with your own photos. */
    const destinations = [
        {
            id: 1,
            name: 'Pantai Medewi',
            category: 'pantai',
            location: 'Desa Medewi, Kecamatan Pekutatan, Kabupaten Jembrana',
            mapQuery: 'Pantai Medewi Jembrana Bali',
            description: 'Pantai pesisir Jembrana yang dikenal dengan karakter ombaknya dan menjadi salah satu destinasi surfing yang terkenal di Bali.',
            image: 'assets/images/pantai-medewi.jpg',
            activities: ['Surfing', 'Menikmati pantai', 'Berfoto', 'Menikmati pemandangan laut']
        },
        {
            id: 2,
            name: 'Pantai Yeh Leh',
            category: 'pantai',
            location: 'Desa Pengeragoan, Kecamatan Pekutatan, Kabupaten Jembrana',
            mapQuery: 'Pantai Yeh Leh Jembrana Bali',
            description: 'Pantai dengan karakter bebatuan dan pesona pesisir yang menjadi salah satu daya tarik wisata di bagian timur Kabupaten Jembrana.',
            image: 'assets/images/pantai-yeh-leh.jpg',
            activities: ['Berfoto', 'Menikmati pantai', 'Menikmati sunset', 'Menjelajahi area pesisir']
        },
        {
            id: 3,
            name: 'Bunut Bolong',
            category: 'alam',
            location: 'Desa Manggissari, Kecamatan Pekutatan, Kabupaten Jembrana',
            mapQuery: 'Bunut Bolong Jembrana Bali',
            description: 'Landmark alam berupa pohon bunut besar dengan lubang alami yang menjadi salah satu ciri khas kawasan wisata pegunungan Jembrana.',
            image: 'assets/images/bunut-bolong.jpg',
            activities: ['Melihat Bunut Bolong', 'Berfoto', 'Menikmati alam', 'Menjelajahi kawasan sekitar']
        },
        {
            id: 4,
            name: 'Pura Rambut Siwi',
            category: 'budaya',
            location: 'Kabupaten Jembrana, Bali',
            mapQuery: 'Pura Rambut Siwi Jembrana Bali',
            description: 'Salah satu daya tarik wisata budaya dan spiritual Jembrana yang berada di kawasan pesisir.',
            image: 'assets/images/pura-rambut-siwi.jpg',
            activities: ['Mengenal budaya', 'Mengenal sejarah', 'Mengamati arsitektur', 'Menikmati pemandangan']
        },
        {
            id: 5,
            name: 'Makepung',
            category: 'tradisi',
            location: 'Kabupaten Jembrana, Bali',
            mapQuery: 'Makepung Jembrana Bali',
            description: 'Tradisi balap kerbau khas Jembrana yang menjadi salah satu identitas budaya masyarakat Jembrana.',
            image: 'assets/images/makepung.jpg',
            activities: ['Menyaksikan perlombaan', 'Mengenal tradisi', 'Fotografi', 'Mengenal kehidupan masyarakat']
        },
        {
            id: 6,
            name: 'Teluk Gilimanuk',
            category: 'bahari',
            location: 'Gilimanuk, Kecamatan Melaya, Kabupaten Jembrana',
            mapQuery: 'Teluk Gilimanuk Jembrana Bali',
            description: 'Kawasan teluk di bagian barat Jembrana yang memiliki potensi wisata bahari dan menjadi bagian dari kawasan wisata Gilimanuk.',
            image: 'assets/images/teluk-gilimanuk.jpg',
            activities: ['Menikmati pemandangan teluk', 'Wisata bahari', 'Berfoto', 'Menjelajahi kawasan Gilimanuk']
        },
        {
            id: 7,
            name: 'Desa Wisata Blimbingsari',
            category: 'desa-wisata',
            location: 'Desa Blimbingsari, Kabupaten Jembrana, Bali',
            mapQuery: 'Desa Wisata Blimbingsari Jembrana Bali',
            description: 'Desa wisata yang menawarkan pengalaman mengenal kehidupan masyarakat dan potensi lokal Jembrana.',
            image: 'assets/images/desa-blimbingsari.jpg',
            activities: ['Mengenal kehidupan desa', 'Menjelajahi potensi lokal', 'Mengenal budaya masyarakat', 'Mengikuti aktivitas wisata']
        },
        {
            id: 8,
            name: 'Desa Wisata Ekasari',
            category: 'desa-wisata',
            location: 'Desa Ekasari, Kabupaten Jembrana, Bali',
            mapQuery: 'Desa Wisata Ekasari Jembrana Bali',
            description: 'Desa wisata yang memperkenalkan potensi lokal dan pengalaman kehidupan masyarakat di kawasan Jembrana.',
            image: 'assets/images/desa-ekasari.jpg',
            activities: ['Menjelajahi desa', 'Mengenal masyarakat', 'Menikmati alam', 'Mengenal potensi lokal']
        },
        {
            id: 9,
            name: 'Bendungan Palasari',
            category: 'alam',
            location: 'Kabupaten Jembrana, Bali',
            mapQuery: 'Bendungan Palasari Jembrana Bali',
            description: 'Kawasan bendungan yang menawarkan suasana alam dan lanskap perairan yang menjadi bagian dari potensi wisata Jembrana.',
            image: 'assets/images/bendungan-palasari.jpg',
            activities: ['Menikmati pemandangan', 'Berfoto', 'Menikmati suasana alam', 'Menjelajahi kawasan sekitar']
        },
        {
            id: 10,
            name: 'Sentra Tenun Jembrana',
            category: 'budaya',
            location: 'Kabupaten Jembrana, Bali',
            mapQuery: 'Sentra Tenun Jembrana Bali',
            description: 'Potensi kerajinan tenun yang menjadi bagian dari budaya dan ekonomi kreatif masyarakat Jembrana.',
            image: 'assets/images/tenun-jembrana.jpg',
            activities: ['Mengenal kerajinan tenun', 'Melihat produk lokal', 'Mengenal proses kerajinan', 'Mendukung produk lokal']
        },

        /* ============================================================
           DESTINASI BARU — ditambahkan berdasarkan foto yang diupload.
           Lokasi & kecamatan sudah diverifikasi lewat pencarian, bukan
           tebakan. Silakan sesuaikan deskripsi jika ada detail yang
           kurang pas dengan kondisi sebenarnya di lapangan.
           ============================================================ */
        {
            id: 11,
            name: 'Air Terjun Juwukmanis',
            category: 'alam',
            location: 'Dusun Juwuk Manis, Desa Manggissari, Kecamatan Pekutatan, Kabupaten Jembrana',
            mapQuery: 'Air Terjun Juwukmanis Jembrana Bali',
            description: 'Air terjun kembar yang tersembunyi di kawasan perbukitan Pekutatan, dikelilingi pepohonan rimbun dengan kolam alami yang jernih di bawahnya.',
            image: 'assets/images/air-terjun-juwukmanis.jpg',
            activities: ['Trekking', 'Berenang di kolam alami', 'Berfoto', 'Menikmati suasana alam']
        },
        {
            id: 12,
            name: 'Puncak Mawar',
            category: 'alam',
            location: 'Kelurahan Pendem, Kecamatan Jembrana, Kabupaten Jembrana',
            mapQuery: 'Puncak Mawar Jembrana Bali',
            description: 'Destinasi wisata di dataran tinggi perbukitan yang menawarkan gardu pandang dan pemandangan Jembrana hingga garis pantai dari ketinggian.',
            image: 'assets/images/puncak-mawar.jpg',
            activities: ['Menikmati pemandangan dari ketinggian', 'Berfoto di gardu pandang', 'Trekking ringan', 'Menikmati suasana pegunungan']
        },
        {
            id: 13,
            name: 'Bendungan Benel',
            category: 'alam',
            location: 'Dusun Mekar Sari, Desa Manistutu, Kecamatan Melaya, Kabupaten Jembrana',
            mapQuery: 'Bendungan Benel Jembrana Bali',
            description: 'Kawasan bendungan yang dikelilingi hutan dan perbukitan hijau, menjadi tempat rekreasi sekaligus sumber irigasi bagi masyarakat sekitar.',
            image: 'assets/images/bendungan-benel.jpg',
            activities: ['Menikmati pemandangan bendungan', 'Bersantai di area sekitar', 'Berfoto', 'Memancing']
        },
        {
            id: 14,
            name: 'Pura Jagatnatha Jembrana',
            category: 'budaya',
            location: 'Kelurahan Dauhwaru, Kecamatan Jembrana, Kabupaten Jembrana (pusat Kota Negara)',
            mapQuery: 'Pura Jagatnatha Jembrana Bali',
            description: 'Pura besar di pusat Kota Negara yang menjadi tempat persembahyangan umat Hindu sekaligus daya tarik wisata budaya dengan area taman dan kolam.',
            image: 'assets/images/pura-jagatnatha.jpg',
            activities: ['Mengenal budaya dan arsitektur', 'Bersembahyang', 'Berfoto', 'Menikmati taman di sekitar pura']
        },
        {
            id: 15,
            name: 'Nirwana Garden',
            category: 'alam',
            location: 'Dusun Sawe Rangsasa, Kelurahan Dauhwaru, Kecamatan Jembrana, Kabupaten Jembrana',
            mapQuery: 'Nirwana Garden Jembrana Bali',
            description: 'Taman wisata dengan lanskap perbukitan hijau dan hamparan sawah, menawarkan spot foto, taman bunga, dan suasana yang menenangkan.',
            image: 'assets/images/nirwana-garden.jpg',
            activities: ['Menikmati taman bunga', 'Berfoto di spot instagramable', 'Bersantai menikmati pemandangan', 'Kuliner lokal']
        },
        {
            id: 16,
            name: 'Rest Area Pengeragoan',
            category: 'alam',
            location: 'Jl. Raya Denpasar - Gilimanuk, Desa Pengeragoan, Kecamatan Pekutatan, Kabupaten Jembrana',
            mapQuery: 'Rest Area Pengeragoan Jembrana Bali',
            description: 'Area istirahat di jalur Denpasar-Gilimanuk dengan bangunan bergaya pendopo, tempat parkir luas, dan warung-warung kuliner lokal, cocok untuk melepas lelah saat melintasi Jembrana.',
            image: 'assets/images/rest-area-jembrana.jpg',
            activities: ['Beristirahat', 'Kuliner lokal', 'Berfoto', 'Menikmati fasilitas rest area']
        }
    ];

    /* ===== GALLERY DATA ===== */
    const galleryItems = [
        { id: 1, image: 'assets/images/pantai-medewi.jpg', category: 'nature', alt: 'Pantai Medewi' },
        { id: 2, image: 'assets/images/pantai-yeh-leh.jpg', category: 'sunset', alt: 'Pantai Yeh Leh saat sunset' },
        { id: 3, image: 'assets/images/bunut-bolong.jpg', category: 'nature', alt: 'Bunut Bolong' },
        { id: 4, image: 'assets/images/pura-rambut-siwi.jpg', category: 'culture', alt: 'Pura Rambut Siwi' },
        { id: 5, image: 'assets/images/makepung.jpg', category: 'people', alt: 'Tradisi Makepung' },
        { id: 6, image: 'assets/images/teluk-gilimanuk.jpg', category: 'nature', alt: 'Teluk Gilimanuk' },
        { id: 7, image: 'assets/images/desa-blimbingsari.jpg', category: 'culture', alt: 'Desa Blimbingsari' },
        { id: 8, image: 'assets/images/desa-ekasari.jpg', category: 'people', alt: 'Desa Ekasari' },
        { id: 9, image: 'assets/images/bendungan-palasari.jpg', category: 'nature', alt: 'Bendungan Palasari' },
        { id: 10, image: 'assets/images/tenun-jembrana.jpg', category: 'culture', alt: 'Tenun Jembrana' },

        /* ===== FOTO GALLERY BARU ===== */
        { id: 11, image: 'assets/images/air-terjun-juwukmanis.jpg', category: 'nature', alt: 'Air Terjun Juwukmanis' },
        { id: 12, image: 'assets/images/air-terjun-juwukmanis-2.jpg', category: 'nature', alt: 'Air Terjun Juwukmanis dari sudut lain' },
        { id: 13, image: 'assets/images/puncak-mawar.jpg', category: 'nature', alt: 'Puncak Mawar' },
        { id: 14, image: 'assets/images/bendungan-benel.jpg', category: 'nature', alt: 'Bendungan Benel' },
        { id: 15, image: 'assets/images/pura-jagatnatha.jpg', category: 'culture', alt: 'Pura Jagatnatha Jembrana' },
        { id: 16, image: 'assets/images/nirwana-garden.jpg', category: 'nature', alt: 'Nirwana Garden' }
    ];

    const FAVORITES_KEY = 'jembrana-favorites';
    let favoriteIds = [];

    /* ===== DOM REFERENCES ===== */
    const destinationsGrid = document.getElementById('destinationsGrid');
    const noResults = document.getElementById('noResults');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryGrid = document.getElementById('galleryGrid');
    const galleryFilterButtons = document.querySelectorAll('.gallery-filter-btn');

    const searchBtn = document.getElementById('searchBtn');
    const searchOverlay = document.getElementById('searchOverlay');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    const favoritesBtn = document.getElementById('favoritesBtn');
    const favoritesModal = document.getElementById('favoritesModal');
    const closeFavoritesModal = document.getElementById('closeFavoritesModal');
    const favoritesList = document.getElementById('favoritesList');

    const detailModal = document.getElementById('detailModal');
    const closeDetailModal = document.getElementById('closeDetailModal');
    const detailContent = document.getElementById('detailContent');

    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.getElementById('lightboxClose');

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');

    const mapDestinationList = document.getElementById('mapDestinationList');

    let lastFocusedElement = null;

    /* ===== FAVORITES (localStorage) ===== */
    function loadFavorites() {
        try {
            const saved = localStorage.getItem(FAVORITES_KEY);
            favoriteIds = saved ? JSON.parse(saved) : [];
        } catch (err) {
            favoriteIds = [];
        }
    }

    function saveFavorites() {
        try {
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(favoriteIds));
        } catch (err) {
            /* localStorage unavailable — favorites just won't persist */
        }
    }

    function isFavorite(id) {
        return favoriteIds.includes(id);
    }

    function toggleFavoriteId(id) {
        if (isFavorite(id)) {
            favoriteIds = favoriteIds.filter((favId) => favId !== id);
        } else {
            favoriteIds.push(id);
        }
        saveFavorites();
        updateFavoritesIcon();
    }

    function updateFavoritesIcon() {
        favoritesBtn.classList.toggle('has-favorites', favoriteIds.length > 0);
    }

    /* ===== HELPERS ===== */
    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    function fallbackImage(name) {
        return `https://placehold.co/600x400/062C3A/F5F1E8?text=${encodeURIComponent(name)}`;
    }

    /* Simple Google Maps search link — no API key required.
       Always built from the destination name + Jembrana Bali, never a
       hand-typed/guessed coordinate. */
    function getMapUrl(mapQuery) {
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
    }

    /* ===== MAP SECTION — DESTINATION LIST ===== */
    function renderMapDestinationList() {
        if (!mapDestinationList) return;

        const featured = ['Pantai Medewi', 'Pantai Yeh Leh', 'Bunut Bolong', 'Pura Rambut Siwi', 'Teluk Gilimanuk', 'Air Terjun Juwukmanis', 'Puncak Mawar'];
        const items = featured
            .map((name) => destinations.find((d) => d.name === name))
            .filter(Boolean);

        mapDestinationList.innerHTML = items.map((dest) => `
            <li>
                <a class="map-destination-link" href="${getMapUrl(dest.mapQuery)}" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-location-dot" aria-hidden="true"></i> ${escapeHtml(dest.name)}
                </a>
            </li>
        `).join('');
    }

    /* ===== RENDER DESTINATIONS ===== */
    function renderDestinations(filter) {
        const activeFilter = filter || 'all';
        const filtered = activeFilter === 'all'
            ? destinations
            : destinations.filter((d) => d.category === activeFilter);

        if (filtered.length === 0) {
            destinationsGrid.innerHTML = '';
            noResults.hidden = false;
            return;
        }

        noResults.hidden = true;

        destinationsGrid.innerHTML = filtered.map((dest) => `
            <article class="destination-card reveal is-visible" data-id="${dest.id}">
                <div class="destination-card-image">
                    <img src="${dest.image}" alt="${escapeHtml(dest.name)}" loading="lazy"
                         onerror="this.onerror=null;this.src='${fallbackImage(dest.name)}'">
                    <button class="favorite-btn-card ${isFavorite(dest.id) ? 'active' : ''}"
                            aria-label="${isFavorite(dest.id) ? 'Hapus dari favorit' : 'Tambah ke favorit'}"
                            aria-pressed="${isFavorite(dest.id)}"
                            data-favorite-toggle="${dest.id}">
                        <i class="${isFavorite(dest.id) ? 'fas' : 'far'} fa-heart" aria-hidden="true"></i>
                    </button>
                </div>
                <div class="destination-card-content">
                    <span class="tag">${escapeHtml(dest.category.replace('-', ' ').toUpperCase())}</span>
                    <h3>${escapeHtml(dest.name)}</h3>
                    <p class="destination-card-location"><i class="fas fa-map-pin" aria-hidden="true"></i> ${escapeHtml(dest.location)}</p>
                    <p class="destination-card-description">${escapeHtml(dest.description)}</p>
                    <div class="destination-card-footer">
                        <button class="destination-card-button" data-detail-open="${dest.id}">
                            Explore <i class="fas fa-arrow-right" aria-hidden="true"></i>
                        </button>
                        <a class="map-link-btn" href="${getMapUrl(dest.mapQuery)}" target="_blank" rel="noopener noreferrer"
                           aria-label="Lihat lokasi ${escapeHtml(dest.name)} di Google Maps" onclick="event.stopPropagation()">
                            <i class="fas fa-location-dot" aria-hidden="true"></i> View Map
                        </a>
                    </div>
                </div>
            </article>
        `).join('');
    }

    function getActiveFilter() {
        const active = document.querySelector('.filter-btn.active');
        return active ? active.getAttribute('data-filter') : 'all';
    }

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterButtons.forEach((b) => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');
            renderDestinations(btn.getAttribute('data-filter'));
        });
    });

    /* Event delegation for favorite + explore buttons inside the grid */
    destinationsGrid.addEventListener('click', (e) => {
        const favBtn = e.target.closest('[data-favorite-toggle]');
        if (favBtn) {
            const id = Number(favBtn.getAttribute('data-favorite-toggle'));
            toggleFavoriteId(id);
            renderDestinations(getActiveFilter());
            return;
        }

        const detailBtn = e.target.closest('[data-detail-open]');
        if (detailBtn) {
            const id = Number(detailBtn.getAttribute('data-detail-open'));
            openDetailModal(id);
            return;
        }

        const card = e.target.closest('.destination-card');
        if (card) {
            openDetailModal(Number(card.getAttribute('data-id')));
        }
    });

    /* ===== DETAIL MODAL ===== */
    function openDetailModal(id) {
        const dest = destinations.find((d) => d.id === id);
        if (!dest) return;

        detailContent.innerHTML = `
            <img src="${dest.image}" alt="${escapeHtml(dest.name)}" class="detail-image"
                 onerror="this.onerror=null;this.src='${fallbackImage(dest.name)}'">
            <div class="detail-body">
                <span class="tag">${escapeHtml(dest.category.replace('-', ' ').toUpperCase())}</span>
                <h2 class="detail-title">${escapeHtml(dest.name)}</h2>
                <p class="detail-description">${escapeHtml(dest.description)}</p>
                <div class="detail-section">
                    <h4>Aktivitas</h4>
                    <ul>${dest.activities.map((a) => `<li>${escapeHtml(a)}</li>`).join('')}</ul>
                </div>
                <div class="detail-section detail-location-block">
                    <h4><i class="fas fa-map-pin" aria-hidden="true"></i> Location</h4>
                    <p class="detail-location">${escapeHtml(dest.name)} &mdash; ${escapeHtml(dest.location)}</p>
                    <a class="detail-map-btn" href="${getMapUrl(dest.mapQuery)}" target="_blank" rel="noopener noreferrer">
                        <i class="fas fa-diamond-turn-right" aria-hidden="true"></i> View on Google Maps
                    </a>
                </div>
                <div class="detail-actions">
                    <button class="detail-action-btn ${isFavorite(dest.id) ? 'active' : ''}" id="detailFavoriteBtn" data-favorite-toggle="${dest.id}">
                        <i class="${isFavorite(dest.id) ? 'fas' : 'far'} fa-heart" aria-hidden="true"></i>
                        ${isFavorite(dest.id) ? 'Tersimpan' : 'Simpan'}
                    </button>
                </div>
            </div>
        `;

        openModal(detailModal);
    }

    detailContent.addEventListener('click', (e) => {
        const favBtn = e.target.closest('[data-favorite-toggle]');
        if (favBtn) {
            const id = Number(favBtn.getAttribute('data-favorite-toggle'));
            toggleFavoriteId(id);
            openDetailModal(id);
            renderDestinations(getActiveFilter());
        }
    });

    /* ===== GENERIC MODAL OPEN/CLOSE (accessible) ===== */
    function openModal(modalEl) {
        lastFocusedElement = document.activeElement;
        modalEl.hidden = false;
        document.body.style.overflow = 'hidden';
        const closeBtn = modalEl.querySelector('.close-modal');
        if (closeBtn) closeBtn.focus();
    }

    function closeModal(modalEl) {
        modalEl.hidden = true;
        document.body.style.overflow = '';
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    closeDetailModal.addEventListener('click', () => closeModal(detailModal));
    closeFavoritesModal.addEventListener('click', () => closeModal(favoritesModal));

    [detailModal, favoritesModal].forEach((modalEl) => {
        modalEl.addEventListener('click', (e) => {
            if (e.target === modalEl) closeModal(modalEl);
        });
    });

    /* ===== FAVORITES MODAL ===== */
    favoritesBtn.addEventListener('click', () => {
        const favs = destinations.filter((d) => isFavorite(d.id));

        if (favs.length === 0) {
            favoritesList.innerHTML = '<p class="favorites-empty">Belum ada destinasi favorit. Klik ikon hati pada destinasi untuk menambahkannya.</p>';
        } else {
            favoritesList.innerHTML = `
                <div class="favorites-grid">
                    ${favs.map((dest) => `
                        <article class="destination-card" data-id="${dest.id}">
                            <div class="destination-card-image">
                                <img src="${dest.image}" alt="${escapeHtml(dest.name)}"
                                     onerror="this.onerror=null;this.src='${fallbackImage(dest.name)}'">
                                <button class="favorite-btn-card active" aria-label="Hapus dari favorit" data-favorite-toggle="${dest.id}">
                                    <i class="fas fa-heart" aria-hidden="true"></i>
                                </button>
                            </div>
                            <div class="destination-card-content">
                                <span class="tag">${escapeHtml(dest.category.replace('-', ' ').toUpperCase())}</span>
                                <h3>${escapeHtml(dest.name)}</h3>
                                <button class="destination-card-button" data-detail-open="${dest.id}">
                                    Explore <i class="fas fa-arrow-right" aria-hidden="true"></i>
                                </button>
                            </div>
                        </article>
                    `).join('')}
                </div>
            `;
        }

        openModal(favoritesModal);
    });

    favoritesList.addEventListener('click', (e) => {
        const favBtn = e.target.closest('[data-favorite-toggle]');
        if (favBtn) {
            const id = Number(favBtn.getAttribute('data-favorite-toggle'));
            toggleFavoriteId(id);
            favoritesBtn.click();
            return;
        }

        const detailBtn = e.target.closest('[data-detail-open]');
        if (detailBtn) {
            const id = Number(detailBtn.getAttribute('data-detail-open'));
            closeModal(favoritesModal);
            openDetailModal(id);
        }
    });

    /* ===== SEARCH ===== */
    function openSearch() {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => searchInput.focus(), 100);
    }

    function closeSearchOverlay() {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
        searchInput.value = '';
        searchResults.innerHTML = '';
    }

    searchBtn.addEventListener('click', openSearch);
    closeSearch.addEventListener('click', closeSearchOverlay);

    searchOverlay.addEventListener('click', (e) => {
        if (e.target === searchOverlay) closeSearchOverlay();
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();

        if (query.length === 0) {
            searchResults.innerHTML = '';
            return;
        }

        const results = destinations.filter((dest) =>
            dest.name.toLowerCase().includes(query) ||
            dest.category.toLowerCase().includes(query) ||
            dest.location.toLowerCase().includes(query) ||
            dest.description.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResults.innerHTML = '<p class="search-empty">Destinasi yang kamu cari belum ditemukan.</p>';
            return;
        }

        searchResults.innerHTML = results.map((dest) => `
            <div class="search-result-item" role="button" tabindex="0" data-search-result="${dest.id}">
                <div class="search-result-name">${escapeHtml(dest.name)}</div>
                <div class="search-result-meta">${escapeHtml(dest.category.replace('-', ' '))} &middot; ${escapeHtml(dest.location)}</div>
            </div>
        `).join('');
    });

    function handleSearchSelect(id) {
        closeSearchOverlay();
        openDetailModal(id);
    }

    searchResults.addEventListener('click', (e) => {
        const item = e.target.closest('[data-search-result]');
        if (item) handleSearchSelect(Number(item.getAttribute('data-search-result')));
    });

    searchResults.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const item = e.target.closest('[data-search-result]');
        if (item) {
            e.preventDefault();
            handleSearchSelect(Number(item.getAttribute('data-search-result')));
        }
    });

    /* ===== GALLERY ===== */
    function renderGallery(filter) {
        const activeFilter = filter || 'all';
        const filtered = activeFilter === 'all'
            ? galleryItems
            : galleryItems.filter((item) => item.category === activeFilter);

        galleryGrid.innerHTML = filtered.map((item) => `
            <div class="gallery-item" data-alt="${escapeHtml(item.alt)}" role="button" tabindex="0" aria-label="Lihat ${escapeHtml(item.alt)} lebih besar">
                <img src="${item.image}" alt="${escapeHtml(item.alt)}" loading="lazy"
                     onerror="this.onerror=null;this.src='${fallbackImage(item.alt)}'">
                <div class="gallery-overlay"><i class="fas fa-expand" aria-hidden="true"></i></div>
            </div>
        `).join('');
    }

    galleryFilterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            galleryFilterButtons.forEach((b) => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.getAttribute('data-filter'));
        });
    });

    galleryGrid.addEventListener('click', (e) => {
        const item = e.target.closest('.gallery-item');
        if (item) {
            const img = item.querySelector('img');
            openLightbox(img.currentSrc || img.src, item.getAttribute('data-alt'));
        }
    });

    galleryGrid.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const item = e.target.closest('.gallery-item');
        if (item) {
            e.preventDefault();
            const img = item.querySelector('img');
            openLightbox(img.currentSrc || img.src, item.getAttribute('data-alt'));
        }
    });

    /* ===== LIGHTBOX ===== */
    function openLightbox(src, alt) {
        lightboxImage.onerror = function () {
            this.onerror = null;
            this.src = fallbackImage(alt || 'Jembrana');
        };
        lightboxImage.src = src;
        lightboxImage.alt = alt || '';
        lastFocusedElement = document.activeElement;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImage.src = '';
        document.body.style.overflow = '';
        if (lastFocusedElement) lastFocusedElement.focus();
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    /* ===== ESC KEY — CLOSES ANY OPEN OVERLAY ===== */
    document.addEventListener('keydown', (e) => {
        if (e.key !== 'Escape') return;
        if (!lightbox.hidden) return closeLightbox();
        if (!detailModal.hidden) return closeModal(detailModal);
        if (!favoritesModal.hidden) return closeModal(favoritesModal);
        if (searchOverlay.classList.contains('active')) return closeSearchOverlay();
        if (navMenu.classList.contains('active')) return closeMobileMenu();
    });

    /* ===== MOBILE NAV ===== */
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
    }

    hamburger.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        hamburger.classList.toggle('active', isActive);
        hamburger.setAttribute('aria-expanded', String(isActive));
    });

    document.querySelectorAll('.nav-link').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });

    /* ===== NAVBAR SCROLL STATE ===== */
    function updateNavbarState() {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', updateNavbarState, { passive: true });

    /* ===== SCROLL REVEAL (subtle fade-up on entry) ===== */
    function initScrollReveal() {
        const revealTargets = document.querySelectorAll(
            '.culture-card, .story-card, .guide-card, .intro-grid'
        );
        revealTargets.forEach((el) => el.classList.add('reveal'));

        if (!('IntersectionObserver' in window)) {
            revealTargets.forEach((el) => el.classList.add('is-visible'));
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealTargets.forEach((el) => observer.observe(el));
    }

    /* ===== INIT ===== */
    document.addEventListener('DOMContentLoaded', () => {
        loadFavorites();
        renderDestinations();
        renderGallery();
        renderMapDestinationList();
        updateFavoritesIcon();
        updateNavbarState();
        initScrollReveal();
    });
})();
