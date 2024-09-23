const players = [
    {
        name: "Neymar Jr.",
        position: "Atacante",
        club: "Paris Saint-Germain",
        image: "https://via.placeholder.com/100/0000FF/FFFFFF?text=Neymar"
    },
    {
        name: "Cristiano Ronaldo",
        position: "Atacante",
        club: "Al Nassr",
        image: "https://via.placeholder.com/100/FF0000/FFFFFF?text=CR7"
    },
    {
        name: "Lionel Messi",
        position: "Atacante",
        club: "Inter Miami",
        image: "https://via.placeholder.com/100/008000/FFFFFF?text=Messi"
    },
    {
        name: "Kylian Mbappé",
        position: "Atacante",
        club: "Paris Saint-Germain",
        image: "https://via.placeholder.com/100/FFFF00/000000?text=Mbappé"
    }
];

function displayPlayers(playersList) {
    const playersGrid = document.getElementById('players');
    playersGrid.innerHTML = '';

    playersList.forEach(player => {
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
