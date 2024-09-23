const players = [
    {
        name: "Jogador 1",
        position: "Atacante",
        club: "Time A",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Jogador 2",
        position: "Meio-campista",
        club: "Time B",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Jogador 3",
        position: "Defensor",
        club: "Time C",
        image: "https://via.placeholder.com/100"
    },
    {
        name: "Jogador 4",
        position: "Goleiro",
        club: "Time D",
        image: "https://via.placeholder.com/100"
    }
];

function displayPlayers(players) {
    const playersGrid = document.getElementById('players');
    playersGrid.innerHTML = '';

    players.forEach(player => {
        const playerDiv = document.createElement('div');
        playerDiv.classList.add('player');
        playerDiv.onclick = () => toggleDetails(playerDiv);

        playerDiv.innerHTML = `
            <img src="${player.image}" alt="${player.name}">
            <h2>${player.name}</h2>
            <p class="details">Posição: ${player.position}<br>Clube: ${player.club}</p>
        `;

        playersGrid.appendChild(playerDiv);
    });
}

function toggleDetails(element) {
    const details = element.querySelector('.details');
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const filteredPlayers = players.filter(player => player.name.toLowerCase().includes(query));
    displayPlayers(filteredPlayers);
});

// Exibir todos os jogadores inicialmente
displayPlayers(players);
