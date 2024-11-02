document.addEventListener('DOMContentLoaded', function () {
  const lastFiveGames = [
    {
      date: '2024-10-25',
      team1: 'Kosovo',
      team2: 'Cyprus',
      score: '3-0',
      result: 'win',
      highlights:
        'An easy win for Kosovo at their home, a record of 3 wins in a row.',
      logo1: 'images/kosova.png', // Kosovo logo
      logo2: 'images/qipro1.webp', // Cyprus logo
    },
    {
      date: '2024-10-18',
      team1: 'Lithuania',
      team2: 'Kosovo',
      score: '1-2',
      result: 'win',
      highlights:
        'An easy game on paper for Kosovo, but a victory with tension.',
      logo1: 'images/lituania.png', // Lithuania logo
      logo2: 'images/kosova.png', // Kosovo logo
    },
    {
      date: '2024-10-10',
      team1: 'Cyprus',
      team2: 'Kosovo',
      score: '0-4',
      result: 'win',
      highlights: 'A devastating performance by Kosovo.',
      logo1: 'images/qipro1.webp', // Cyprus logo
      logo2: 'images/kosova.png', // Kosovo logo
    },
    {
      date: '2024-09-28',
      team1: 'Kosovo',
      team2: 'Romania',
      score: '0-3',
      result: 'loss',
      highlights: 'A heavy loss in Fadil Vokrri.',
      logo1: 'images/kosova.png', // Kosovo logo
      logo2: 'images/rumania.png', // Romania logo
    },
    {
      date: '2024-09-20',
      team1: 'Norway',
      team2: 'Kosovo',
      score: '3-0',
      result: 'loss',
      highlights: 'A win of his own from Haaland.',
      logo1: 'images/norway.svg', // Norway logo
      logo2: 'images/kosova.png', // Kosovo logo
    },
  ];

  const futureMatches = [
    {
      date: '2024-11-15',
      team1: 'Romania',
      team2: 'Kosovo',
      logo1: 'images/rumania.png', // Romania logo
      logo2: 'images/kosova.png', // Kosovo logo
    },
    {
      date: '2024-11-20',
      team1: 'Kosovo',
      team2: 'Lithuania',
      logo1: 'images/kosova.png', // Kosovo logo
      logo2: 'images/lituania.png', // Lithuania logo
    },
  ];

  const lastFiveGamesContainer = document.getElementById('last-five-games');
  const futureMatchesContainer = document.getElementById('future-matches');
  const searchBar = document.getElementById('search-bar');
  const searchButton = document.getElementById('search-button');

  function displayLastFiveGames() {
    lastFiveGamesContainer.innerHTML = '';
    lastFiveGames.forEach((match, index) => {
      const matchDiv = document.createElement('div');
      matchDiv.classList.add('match', match.result);
      matchDiv.id = `match-${index}`;
      matchDiv.innerHTML = `
            <h2>${match.team1} vs ${match.team2}</h2>
            <div class="logos">
              <img src="${match.logo1}" alt="${match.team1} Logo" class="emblem" />
              <img src="${match.logo2}" alt="${match.team2} Logo" class="emblem" />
            </div>
            <p class="details">Date: ${match.date} | Score: ${match.score}</p>
            <p class="highlights">Highlights: ${match.highlights}</p>
          `;
      lastFiveGamesContainer.appendChild(matchDiv);
    });
  }

  function displayFutureMatches() {
    futureMatchesContainer.innerHTML = '';
    futureMatches.forEach((match, index) => {
      const futureMatchDiv = document.createElement('div');
      futureMatchDiv.classList.add('future-match');
      futureMatchDiv.id = `future-match-${index}`;
      futureMatchDiv.innerHTML = `
            <h2>${match.team1} vs ${match.team2}</h2>
            <div class="logos">
              <img src="${match.logo1}" alt="${match.team1} Logo" class="emblem" />
              <img src="${match.logo2}" alt="${match.team2} Logo" class="emblem" />
            </div>
            <p class="details">Date: ${match.date}</p>
          `;
      futureMatchesContainer.appendChild(futureMatchDiv);
    });
  }

  function searchMatch() {
    const query = searchBar.value.toLowerCase().trim();
    const allMatches = document.querySelectorAll('.match, .future-match');

    // Clear previous highlights
    allMatches.forEach((match) => {
      match.classList.remove('highlighted');
    });

    // Find match that contains query in team names or date
    let matchFound = false;
    allMatches.forEach((match) => {
      const matchText = match.textContent.toLowerCase();
      if (matchText.includes(query)) {
        match.classList.add('highlighted');
        match.scrollIntoView({ behavior: 'smooth', block: 'center' });
        matchFound = true;

        // Set a timeout to remove the glow effect after 5 seconds
        setTimeout(() => {
          match.classList.remove('highlighted');
        }, 5000); // 5000 milliseconds = 5 seconds
      }
    });

    if (!matchFound) {
      alert('No match found for your search.');
    }
  }

  searchButton.addEventListener('click', searchMatch);

  displayLastFiveGames();
  displayFutureMatches();

  function startCountdown() {
    const nextMatchDate = new Date('2024-11-15T20:45:00Z'); // Use UTC time
    const countdownElement = document.getElementById('timer');

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = nextMatchDate - now;

      if (timeDifference < 0) {
        countdownElement.innerHTML = 'The match has started!';
        clearInterval(countdownInterval);
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `
            <span id="days">${days}</span> Days
            <span id="hours">${hours}</span> Hours
            <span id="minutes">${minutes}</span> Minutes
            <span id="seconds">${seconds}</span> Seconds
          `;
    };

    updateCountdown(); // Initial call to display immediately
    const countdownInterval = setInterval(updateCountdown, 1000); // Update every second
  }

  startCountdown();
});
