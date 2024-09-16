// List of apps with more information
const apps = [
    {
        id: 1,
        name: "Blum",
        category: "free",
        icon: "images/app3.png",
        description: "Mine BLUM Today",
        details: "Blum is a hybrid crypto exchange designed for young and adventurous users looking to explore the web3 world, combining features from both centralized and decentralized exchanges.",
        rating: 4.8,
        downloadLink: "https://t.me/blum/app?startapp=ref_pqoM2uVzo7"
    },
    {
        id: 2,
        name: "Hamster Kombat",
        category: "free",
        icon: "images/app2.png",
        description: "Are You Ready CEO?",
        details: "wdnconcsdcn",
        rating: 4.2,
        downloadLink: "https://t.me/haMster_kombat_bot/start?startapp=kentId5997748340"
    },
    {
        id: 3,
        name: "TapSwap",
        category: "free",
        icon: "images/app1.png",
        description: "TapSwap is an interactive tap-to-earn game accessible through Telegram's mini apps for both iOS and Android devices. Launch TapSwap and start Earning.",
        details: "details",
        rating: 3.9,
        downloadLink: "https://t.me/tapswap_mirror_1_bot?start=r_5997748340"
    },
    {
        id: 4,
        name: "DineroNigeria",
        category: "trending",
        icon: "images/dinero.jpg",
        description: "Join Dinero, Earn like NEVER Before",
        details: "details",
        rating: 4.8,
        downloadLink: "https://t.me/DineroNigeriaBot?start=r04577695705"
    },
    // Add more apps as needed
];

// Function to display apps dynamically
function displayApps(filterCategory = 'all', searchQuery = '') {
    const appList = document.getElementById('app-list');
    if (!appList) return; // Exit if not on the index page

    appList.innerHTML = '';  // Clear existing content

    let filteredApps = apps;

    // Filter by category
    if (filterCategory !== 'all') {
        filteredApps = filteredApps.filter(app => app.category === filterCategory);
    }

    // Filter by search query
    if (searchQuery) {
        filteredApps = filteredApps.filter(app =>
            app.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Display apps
    filteredApps.forEach(app => {
        const appCard = document.createElement('div');
        appCard.classList.add('app-card');

        // Add download and more info links using app.downloadLink
        appCard.innerHTML = `
            <img src="${app.icon}" alt="${app.name}" class="app-icon">
            <h2>${app.name}</h2>
            <p>${app.description}</p>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">Download</a>
            <a href="app-details.html?id=${app.id}" class="more-info-btn">More Info</a>
        `;

        appList.appendChild(appCard);
    });
}

// Search functionality
const searchInput = document.getElementById('search-input');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value;
        displayApps('all', query);
    });
}

// Category buttons functionality
const categoryButtons = document.querySelectorAll('.category-btn');
categoryButtons.forEach(button => {
    button.addEventListener('click', function() {
        const category = this.dataset.category;
        const query = searchInput ? searchInput.value : '';
        displayApps(category, query);
    });
});

// Function to display the app details on the details page
function displayAppDetails() {
    const appDetailsContainer = document.getElementById('app-details');
    if (!appDetailsContainer) return; // Exit if not on the app-details page

    const queryParams = new URLSearchParams(window.location.search);
    const appId = queryParams.get('id');
    const app = apps.find(a => a.id == appId);

    if (app) {
        appDetailsContainer.innerHTML = `
            <img src="${app.icon}" alt="${app.name}">
            <h2>${app.name}</h2>
            <p>${app.details}</p>
            <a href="${app.downloadLink}" class="download-btn" target="_blank">Download</a>
        `;
    } else {
        appDetailsContainer.innerHTML = '<p>App not found.</p>';
    }
}

// Initialize the app
if (window.location.pathname.includes('app-details.html')) {
    // If on the app details page
    displayAppDetails();
} else {
    // If on the index page
    displayApps();
}
