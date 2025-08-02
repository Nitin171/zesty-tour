function fetchRecipes() {
  fetch('http://localhost:3001/api/recipes')
    .then(res => res.json())
    .then(data => {
      const recipesDiv = document.getElementById('recipes');
      if (data.length === 0) {
        recipesDiv.innerHTML = '<p class="text-gray-500">No recipes found.</p>';
      } else {
        recipesDiv.innerHTML = data.map(recipe => `
          <div class="p-4 bg-white rounded shadow">
            <h2 class="text-xl font-semibold text-green-700">${recipe.name}</h2>
            <p class="text-gray-700">${recipe.description || ''}</p>
          </div>
        `).join('');
      }
    })
    .catch(err => {
      document.getElementById('recipes').innerHTML = '<p class="text-red-500">Failed to load recipes.</p>';
    });
}

function showMockedAlerts() {
  // Mocked data
  const safetyAlerts = [
    'Heavy rainfall warning in your area.',
    'Road closure near Main Street due to maintenance.',
    'Increased pickpocket activity reported at Central Park.'
  ];
  const crowdStatus = 'Moderate crowd at most tourist spots. Expect delays at main attractions.';
  const weatherStatus = 'Partly cloudy, 28°C. Light showers expected in the evening.';

  // Populate UI
  const safetyList = document.getElementById('safety-alerts-list');
  safetyList.innerHTML = safetyAlerts.map(a => `<li>${a}</li>`).join('');
  document.getElementById('crowd-status').textContent = crowdStatus;
  document.getElementById('weather-status').textContent = weatherStatus;
}

function showMockedHotelsRestaurants() {
  // Mocked hotel data
  const hotels = [
    { name: 'Grand Palace Hotel', price: '₹3500/night', link: '#' },
    { name: 'City View Inn', price: '₹2200/night', link: '#' },
    { name: 'Budget Stay', price: '₹1200/night', link: '#' }
  ];
  // Mocked restaurant data
  const restaurants = [
    { name: 'Spice Route', cuisine: 'Indian', rating: 4.5 },
    { name: 'Bella Italia', cuisine: 'Italian', rating: 4.3 },
    { name: 'Green Leaf', cuisine: 'Vegetarian', rating: 4.7 }
  ];
  // Populate UI
  const hotelList = document.getElementById('hotel-list');
  hotelList.innerHTML = hotels.map(h => `<li><a href='${h.link}' class='text-green-700 underline'>${h.name}</a> <span class='text-gray-600'>(${h.price})</span></li>`).join('');
  const restaurantList = document.getElementById('restaurant-list');
  restaurantList.innerHTML = restaurants.map(r => `<li><span class='font-semibold'>${r.name}</span> - ${r.cuisine} <span class='text-yellow-600'>(Rating: ${r.rating})</span></li>`).join('');
}

function showMockedWellnessSafety() {
  // Mocked emergency contacts
  const contacts = [
    { name: 'Police', number: '100' },
    { name: 'Ambulance', number: '102' },
    { name: 'Fire', number: '101' },
    { name: 'Tourist Helpline', number: '1800-111-363' }
  ];
  // Mocked health facilities
  const facilities = [
    { name: 'City Hospital', address: '123 Main St' },
    { name: 'Green Clinic', address: '45 Park Ave' },
    { name: 'Emergency Care Center', address: '78 River Rd' }
  ];
  // Populate UI
  const contactsList = document.getElementById('emergency-contacts');
  contactsList.innerHTML = contacts.map(c => `<li><span class='font-semibold'>${c.name}</span>: <a href='tel:${c.number}' class='text-red-700 underline'>${c.number}</a></li>`).join('');
  const facilitiesList = document.getElementById('health-facilities');
  facilitiesList.innerHTML = facilities.map(f => `<li><span class='font-semibold'>${f.name}</span> - ${f.address}</li>`).join('');
}

function generateMockedItinerary() {
  // Mocked itinerary data
  const itinerary = [
    { time: '08:00', activity: 'Breakfast at local cafe' },
    { time: '09:00', activity: 'Visit City Museum (best time: less crowded)' },
    { time: '11:00', activity: 'Walk in Central Park' },
    { time: '13:00', activity: 'Lunch at recommended restaurant' },
    { time: '15:00', activity: 'Guided tour of Old Town' },
    { time: '17:00', activity: 'Relax at hotel or explore local shops' },
    { time: '19:00', activity: 'Dinner and cultural show' }
  ];
  const resultDiv = document.getElementById('itinerary-result');
  resultDiv.innerHTML = `<ul class="list-disc pl-5">${itinerary.map(item => `<li><span class='font-semibold'>${item.time}</span>: ${item.activity}</li>`).join('')}</ul>`;
}

function showDownloadableItinerary() {
  // Use the same mocked itinerary as before
  const itinerary = [
    { time: '08:00', activity: 'Breakfast at local cafe' },
    { time: '09:00', activity: 'Visit City Museum (best time: less crowded)' },
    { time: '11:00', activity: 'Walk in Central Park' },
    { time: '13:00', activity: 'Lunch at recommended restaurant' },
    { time: '15:00', activity: 'Guided tour of Old Town' },
    { time: '17:00', activity: 'Relax at hotel or explore local shops' },
    { time: '19:00', activity: 'Dinner and cultural show' }
  ];
  const previewDiv = document.getElementById('download-itinerary-preview');
  previewDiv.innerHTML = `<ul class='list-disc pl-5'>${itinerary.map(item => `<li><span class='font-semibold'>${item.time}</span>: ${item.activity}</li>`).join('')}</ul>`;
  // Download logic
  const downloadBtn = document.getElementById('download-itinerary');
  if (downloadBtn) {
    downloadBtn.onclick = () => {
      const text = itinerary.map(item => `${item.time}: ${item.activity}`).join('\n');
      const blob = new Blob([text], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'itinerary.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    };
  }
}

// Multi-step navigation logic
const steps = [
  document.getElementById('step-1'),
  document.getElementById('step-2'),
  document.getElementById('step-3'),
  document.getElementById('step-4')
];
let currentStep = 0;

function showStep(idx) {
  steps.forEach((step, i) => {
    if (step) {
      if (i === idx) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    }
  });
  currentStep = idx;
}

// Next/Previous/Finish button handlers
if (document.getElementById('next-1')) {
  document.getElementById('next-1').onclick = () => showStep(1);
}
if (document.getElementById('prev-2')) {
  document.getElementById('prev-2').onclick = () => showStep(0);
}
if (document.getElementById('next-2')) {
  document.getElementById('next-2').onclick = () => showStep(2);
}
if (document.getElementById('prev-3')) {
  document.getElementById('prev-3').onclick = () => showStep(1);
}
if (document.getElementById('next-3')) {
  document.getElementById('next-3').onclick = () => showStep(3);
}
if (document.getElementById('finish')) {
  document.getElementById('finish').onclick = () => {
    // Optionally, show a message or redirect
    alert('Thank you for using Zest Tour! Your plan is ready.');
  };
}
if (document.getElementById('prev-4')) {
  document.getElementById('prev-4').onclick = () => showStep(2);
}
if (document.getElementById('download-itinerary')) {
  document.getElementById('download-itinerary').onclick = () => {
    alert('Download functionality coming soon!');
  };
}

// Budget slider logic
const budgetSlider = document.getElementById('budget-slider');
const budgetValue = document.getElementById('budget-value');
if (budgetSlider && budgetValue) {
  budgetSlider.addEventListener('input', () => {
    budgetValue.textContent = `$${budgetSlider.value}`;
  });
}

// Option selection logic
function setupButtonGroup(className, singleSelect = true, onSelect) {
  const buttons = document.querySelectorAll('.' + className);
  let selected = null;
  buttons.forEach(btn => {
    btn.onclick = () => {
      if (singleSelect) {
        buttons.forEach(b => b.classList.remove('ring-2', 'ring-blue-500'));
        btn.classList.add('ring-2', 'ring-blue-500');
        selected = btn.textContent.trim();
        if (onSelect) onSelect(selected);
      } else {
        btn.classList.toggle('ring-2');
        btn.classList.toggle('ring-blue-500');
      }
    };
  });
  return () => selected;
}

// Store selected values
const startDestination = document.querySelector('input[placeholder="Starting Destination"]');
const endDestination = document.querySelector('input[placeholder="Final Destination"]');
let selectedTourPackage = null;
let selectedAge = null;
let selectedPlace = null;
let selectedTransport = null;

setupButtonGroup('tour-package-btn', true, val => selectedTourPackage = val);
setupButtonGroup('age-btn', true, val => selectedAge = val);
setupButtonGroup('place-btn', true, val => selectedPlace = val);
setupButtonGroup('transport-btn', true, val => selectedTransport = val);

// Show first step on load
showStep(0);

function handleTourDetailsForm() {
  const form = document.getElementById('tour-details-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const start = document.getElementById('start-destination').value.trim();
    const end = document.getElementById('end-destination').value.trim();
    const pkg = document.getElementById('tour-package').value;
    const age = document.getElementById('age-group').value;
    const prefs = Array.from(document.getElementById('place-preferences').selectedOptions).map(o => o.value);
    const budget = document.getElementById('daily-budget').value;
    const bike = document.getElementById('mode-bike').checked;
    const car = document.getElementById('mode-car').checked;
    const modes = [];
    if (bike) modes.push('Bike');
    if (car) modes.push('Car/Tempo');
    fetch('http://localhost:3001/api/tour-details', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ start, end, pkg, age, prefs, budget, modes })
    })
      .then(res => res.json())
      .then(data => {
        document.getElementById('tour-details-success').classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('tour-details-success').classList.add('hidden');
        }, 2000);
        form.reset();
      })
      .catch(() => alert('Failed to save tour details.'));
  });
}

function setupGuideCall() {
  const btn = document.getElementById('start-guide-call');
  const status = document.getElementById('guide-call-status');
  if (!btn || !status) return;
  btn.addEventListener('click', () => {
    status.classList.remove('hidden');
    btn.disabled = true;
    btn.textContent = 'Connecting...';
    setTimeout(() => {
      status.textContent = 'You are now connected to a local guide! (Demo)';
      btn.textContent = 'Start Video Call';
      btn.disabled = false;
    }, 2500);
  });
}

function setupTabs() {
  // This function sets up tab functionality if needed
  // For now, it's a placeholder since the current pages don't use tabs
  console.log('Tabs setup complete');
}

function setupARPreview() {
  const btn = document.getElementById('view-ar-preview');
  const status = document.getElementById('ar-preview-status');
  if (!btn || !status) return;
  btn.addEventListener('click', () => {
    status.textContent = 'Loading AR preview...';
    status.classList.remove('hidden');
    btn.disabled = true;
    btn.textContent = 'Loading...';
    setTimeout(() => {
      status.textContent = 'AR preview loaded! (Demo: Imagine a 3D view of your destination here)';
      btn.textContent = 'View AR Preview';
      btn.disabled = false;
    }, 2000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setupTabs();
  handleTourDetailsForm();
  fetchRecipes();

  const form = document.getElementById('add-recipe-form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('recipe-name').value.trim();
    const description = document.getElementById('recipe-description').value.trim();
    if (!name) return;
    fetch('http://localhost:3001/api/recipes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    })
      .then(res => res.json())
      .then(data => {
        form.reset();
        fetchRecipes();
      })
      .catch(() => alert('Failed to add recipe.'));
  });

  const genBtn = document.getElementById('generate-itinerary');
  if (genBtn) {
    genBtn.addEventListener('click', generateMockedItinerary);
  }
  setupGuideCall();
  setupARPreview();
}); 