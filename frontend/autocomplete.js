// Autocomplete functionality for destination search
function initAutocomplete(inputElement, options = {}) {
  const {
    apiUrl = 'http://localhost:3001/api/destinations/search',
    minLength = 1,
    debounceMs = 300,
    onSelect = null,
    placeholderText = 'Type to search...'
  } = options;

  if (!inputElement) return;

  let timeoutId = null;
  let suggestions = [];
  let selectedIndex = -1;
  
  // Create suggestions container
  const suggestionsContainer = document.createElement('div');
  suggestionsContainer.className = 'autocomplete-suggestions absolute z-50 w-full bg-white border border-gray-300 rounded-lg shadow-lg mt-1 max-h-60 overflow-y-auto hidden';
  suggestionsContainer.id = `suggestions-${inputElement.id || Math.random().toString(36).substr(2, 9)}`;
  
  // Use the parent container as the reference point
  let parentContainer = inputElement.parentNode;
  
  // Make parent container relative if it's not already
  const originalPosition = window.getComputedStyle(parentContainer).position;
  if (originalPosition === 'static' || originalPosition === '') {
    parentContainer.style.position = 'relative';
  }
  
  // Append suggestions container to parent
  parentContainer.appendChild(suggestionsContainer);
  
  // Adjust suggestions container width to match parent container width
  function updateSuggestionsWidth() {
    const parentWidth = parentContainer.offsetWidth;
    suggestionsContainer.style.width = parentWidth + 'px';
  }
  
  // Update width on load and window resize
  updateSuggestionsWidth();
  window.addEventListener('resize', updateSuggestionsWidth);
  
  // Also update when input gets focus (in case layout changes)
  inputElement.addEventListener('focus', updateSuggestionsWidth);

  // Fetch suggestions from API
  function fetchSuggestions(query) {
    if (query.length < minLength) {
      hideSuggestions();
      return;
    }

    fetch(`${apiUrl}?q=${encodeURIComponent(query)}`)
      .then(res => res.json())
      .then(data => {
        suggestions = data;
        displaySuggestions();
      })
      .catch(err => {
        console.error('Error fetching suggestions:', err);
        suggestions = [];
        hideSuggestions();
      });
  }

  // Display suggestions
  function displaySuggestions() {
    if (suggestions.length === 0) {
      hideSuggestions();
      return;
    }

    suggestionsContainer.innerHTML = '';
    selectedIndex = -1;

    suggestions.forEach((item, index) => {
      const suggestionItem = document.createElement('div');
      suggestionItem.className = 'suggestion-item px-4 py-3 hover:bg-blue-50 cursor-pointer border-b border-gray-100 last:border-b-0';
      suggestionItem.innerHTML = `
        <div class="font-semibold text-gray-800">${highlightMatch(item.name, inputElement.value)}</div>
        ${item.description ? `<div class="text-sm text-gray-500 mt-1">${item.description}</div>` : ''}
        ${item.category ? `<div class="text-xs text-blue-600 mt-1">${item.category.split(',').slice(0, 2).join(', ')}</div>` : ''}
      `;
      
      suggestionItem.addEventListener('click', () => {
        selectSuggestion(item);
      });

      suggestionItem.addEventListener('mouseenter', () => {
        selectedIndex = index;
        updateHighlight();
      });

      suggestionsContainer.appendChild(suggestionItem);
    });

    suggestionsContainer.classList.remove('hidden');
  }

  // Highlight matching text
  function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
  }

  // Hide suggestions
  function hideSuggestions() {
    suggestionsContainer.classList.add('hidden');
    selectedIndex = -1;
  }

  // Select a suggestion
  function selectSuggestion(item) {
    inputElement.value = item.name;
    hideSuggestions();
    
    if (onSelect) {
      onSelect(item);
    }
    
    // Trigger input event for form validation
    inputElement.dispatchEvent(new Event('input', { bubbles: true }));
  }

  // Update highlight on keyboard navigation
  function updateHighlight() {
    const items = suggestionsContainer.querySelectorAll('.suggestion-item');
    items.forEach((item, index) => {
      if (index === selectedIndex) {
        item.classList.add('bg-blue-50');
      } else {
        item.classList.remove('bg-blue-50');
      }
    });
  }

  // Handle keyboard navigation
  inputElement.addEventListener('keydown', (e) => {
    if (!suggestionsContainer.classList.contains('hidden')) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, suggestions.length - 1);
        updateHighlight();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateHighlight();
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        selectSuggestion(suggestions[selectedIndex]);
      } else if (e.key === 'Escape') {
        hideSuggestions();
      }
    }
  });

  // Handle input with debounce
  inputElement.addEventListener('input', (e) => {
    clearTimeout(timeoutId);
    const query = e.target.value.trim();
    
    timeoutId = setTimeout(() => {
      fetchSuggestions(query);
    }, debounceMs);
  });

  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!parentContainer.contains(e.target)) {
      hideSuggestions();
    }
  });

  // Hide suggestions when input loses focus (with small delay to allow clicks)
  inputElement.addEventListener('blur', () => {
    setTimeout(() => {
      hideSuggestions();
    }, 200);
  });
}

