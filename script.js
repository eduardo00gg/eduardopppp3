const questions = [
    {
        question: "Qual jogador é conhecido como 'O Fenômeno'?",
        options: ["Ronaldo", "Ronaldinho", "Pelé", "Zico"],
        answer: 0
    },
    {
        question: "Quem tem o recorde de mais gols na história da Copa do Mundo?",
        options: ["Pele", "Marta", "Cristiano Ronaldo", "Miroslav Klose"],
        answer: 3
    },
    {
        question: "Qual jogador é conhecido por sua habilidade em driblar e jogar pelo Barcelona e pela seleção argentina?",
        options: ["Messi", "Neymar", "Rivaldo", "Di María"],
        answer: 0
    },
    {
        question: "Quem é o jogador mais caro da história do futebol?",
        options: ["Neymar", "Kylian Mbappé", "Cristiano Ronaldo", "Philippe Coutinho"],
        answer: 0
    },
    {
        question: "Qual jogador tem mais títulos da UEFA Champions League?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Paolo Maldini", "Karim Benzema"],
        answer: 0
    },
    {
        question: "Quem é o maior artilheiro da seleção brasileira de todos os tempos?",
        options: ["Ronaldo", "Pelé", "Neymar", "Romário"],
        answer: 2
    },
    {
        question: "Qual jogador ganhou o prêmio Ballon d'Or mais vezes?",
        options: ["Messi", "Cristiano Ronaldo", "Johan Cruyff", "Marco van Basten"],
        answer: 0
    },
    {
        question: "Quem foi o capitão da seleção italiana na Copa do Mundo de 2006?",
        options: ["Fabio Cannavaro", "Gianluigi Buffon", "Francesco Totti", "Alessandro Nesta"],
        answer: 0
    },
    {
        question: "Qual jogador ficou famoso por sua comemoração chamada 'Siiii'?",
        options: ["Cristiano Ronaldo", "Lionel Messi", "Ronaldinho", "Gareth Bale"],
        answer: 0
    },
    {
        question: "Quem é conhecido como o 'Rei do Futebol'?",
        options: ["Pelé", "Zico", "Garrincha", "Romário"],
        answer: 0
    },
    {
        question: "Qual jogador tem mais aparições na Premier League?",
        options: ["Gareth Barry", "Ryan Giggs", "Frank Lampard", "Steven Gerrard"],
        answer: 0
    },
    {
        question: "Quem é o maior artilheiro da história do Real Madrid?",
        options: ["Cristiano Ronaldo", "Raúl", "Alfredo Di Stéfano", "Karim Benzema"],
        answer: 0
    },
    {
        question: "Qual jogador é famoso por seus chutes livres e jogou pelo Manchester United e pela seleção da França?",
        options: ["David Beckham", "Zinedine Zidane", "Eric Cantona", "Thierry Henry"],
        answer: 0
    },
    {
        question: "Quem foi o primeiro jogador africano a ganhar o Ballon d'Or?",
        options: ["George Weah", "Samuel Eto'o", "Didier Drogba", "Yaya Touré"],
        answer: 0
    },
    {
        question: "Qual jogador é conhecido por sua longevidade na carreira e jogou por mais de 20 anos?",
        options: ["Zlatan Ibrahimović", "Gianluigi Buffon", "Ryan Giggs", "Cristiano Ronaldo"],
        answer: 1
    },
    {
        question: "Quem é o goleiro com mais títulos da Champions League?",
        options: ["Iker Casillas", "Gianluigi Buffon", "Petr Čech", "Manuel Neuer"],
        answer: 0
    },
    {
        question: "Qual jogador é famoso por seu controle de bola e jogou pelo Barcelona, Manchester City e Paris Saint-Germain?",
        options: ["Neymar", "Lionel Messi", "David Silva", "Xavi"],
        answer: 1
    },
    {
        question: "Quem foi o artilheiro da Copa do Mundo de 2018?",
        options: ["Harry Kane", "Cristiano Ronaldo", "Luka Modrić", "Kylian Mbappé"],
        answer: 0
    },
    {
        question: "Qual jogador é conhecido por sua habilidade de cabeceio e jogou pelo Manchester United?",
        options: ["Wayne Rooney", "Cristiano Ronaldo", "Eric Cantona", "Rafael"],
        answer: 1
    },
    {
        question: "Quem é o único jogador a ter vencido a Copa do Mundo como jogador e treinador?",
        options: ["Zinedine Zidane", "Mário Zagallo", "Franz Beckenbauer", "César Luis Menotti"],
        answer: 2
    },
    {
        question: "Qual jogador é famoso por suas jogadas de habilidade e atua pelo Liverpool?",
        options: ["Mohamed Salah", "Sadio Mané", "Roberto Firmino", "Luis Suárez"],
        answer: 0
    },
    {
        question: "Quem foi o jogador mais jovem a marcar em uma Copa do Mundo?",
        options: ["Pelé", "Diego Maradona", "Kylian Mbappé", "Lionel Messi"],
        answer: 0
    },
    {
        question: "Qual jogador é conhecido como 'O Mago' e tem um estilo de jogo criativo?",
        options: ["Ronaldinho", "Zinedine Zidane", "Johan Cruyff", "Garrincha"],
        answer: 0
    },
    {
        question: "Quem tem mais títulos da Copa do Mundo: Brasil, Alemanha ou Itália?",
        options: ["Brasil", "Alemanha", "Itália", "Todos têm o mesmo"],
        answer: 0
    }
];

function displayQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${question.question}</h3>
            ${question.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${i}">
                    ${option}
                </label>
            `).join('')}
        `;
        quizContainer.appendChild(questionDiv);
    });
}

document.getElementById('submit').addEventListener('click', () => {
    let score = 0;
    questions.forEach((question, index) => {
        const selected = document.querySelector(`input[name="question${index}"]:checked`);
        if (selected && parseInt(selected.value) === question.answer) {
            score++;
        }
    });
    document.getElementById('result').innerText = `Você acertou ${score} de ${questions.length} questões!`;
});

// Iniciar o quiz
displayQuiz();
