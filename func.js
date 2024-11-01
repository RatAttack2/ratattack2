// Questions and answers for the quiz
const questions = [
    { question: "How do you approach challenges?", answers: ["Head-on", "Strategically", "With caution", "With excitement"] },
    { question: "What's your greatest strength?", answers: ["Bravery", "Intelligence", "Strength", "Compassion"] },
    { question: "What role do you take in a team?", answers: ["Leader", "Support", "Strategist", "Protector"] },
    { question: "What is your view on justice?", answers: ["Absolute", "Relative", "Situational", "Flexible"] },
    { question: "How do you handle failure?", answers: ["Analyze and retry", "Push through", "Avoid risks", "Stay calm and adapt"] },
    { question: "Are you driven by logic or emotion?", answers: ["Logic", "Emotion", "Balance of both", "Instinct"] },
    { question: "What do you value most?", answers: ["Loyalty", "Strength", "Freedom", "Knowledge"] },
    { question: "How do you react in a crisis?", answers: ["Stay calm", "Lead", "Fight", "Help others"] },
    { question: "What is your biggest flaw?", answers: ["Stubbornness", "Overthinking", "Rashness", "Timidity"] },
    { question: "What's your ideal place?", answers: ["Battlefield", "Library", "Home", "Unknown lands"] },
    { question: "What do you prioritize?", answers: ["Victory", "Friends", "Self-growth", "Morality"] },
    { question: "How do you treat others?", answers: ["Protective", "Analytical", "Competitive", "Friendly"] },
    { question: "What do you fear the most?", answers: ["Failure", "Weakness", "Being alone", "Losing control"] },
    { question: "Are you a planner or spontaneous?", answers: ["Planner", "Spontaneous", "Flexible", "Strict"] },
    { question: "What's your preferred weapon?", answers: ["Sword", "Mind", "Strategy", "Endurance"] }
];

const characters = [
    { name: "Erwin", img: "images/erwin.jpg", desc: "A natural-born leader with a strong sense of duty and sacrifice." },
    { name: "Levi", img: "images/levi.jpg", desc: "Resilient, loyal, and strong—Levi will fight for what he believes is right." },
    { name: "Eren", img: "images/eren.jpg", desc: "Driven by passion and an unbreakable will to break free from constraints." },
    { name: "Mikasa", img: "images/mikasa.jpg", desc: "Devoted, brave, and protective of those she loves." },
    { name: "Armin", img: "images/armin.jpg", desc: "Thoughtful and empathetic, always looking for peaceful solutions." },
    { name: "Annie", img: "images/annie.jpg", desc: "Independent and resilient, she faces challenges head-on." },
    { name: "Reiner", img: "images/reiner.jpg", desc: "A conflicted but strong individual who struggles with duty and self-identity." },
    { name: "Conny", img: "images/conny.jpg", desc: "Easy-going and humorous, bringing light to even the darkest situations." },
    { name: "Sasha", img: "images/sasha.jpg", desc: "Kind-hearted and skilled, with a unique approach to life and survival." },
    { name: "Hange", img: "images/hange.jpg", desc: "Curious and eccentric, deeply devoted to learning and discovery." }
];

let scores = Array(characters.length).fill(0);

function displayQuestions() {
    const quiz = document.getElementById("quiz");
    quiz.innerHTML = "";
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${q.question}</p>`;
        q.answers.forEach((answer, aIndex) => {
            questionDiv.innerHTML += `
                <label>
                    <input type="radio" name="question${index}" value="${aIndex}">
                    ${answer}
                </label><br>`;
        });
        quiz.appendChild(questionDiv);
    });
}

function calculateResult() {
    scores.fill(0);
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer) {
            const value = parseInt(selectedAnswer.value);
            scores = scores.map((score, i) => score + (value + i) % 3); // Example scoring
        }
    });

    const maxScore = Math.max(...scores);
    const character = characters[scores.indexOf(maxScore)];
    document.getElementById("character-name").textContent = character.name;
    document.getElementById("character-img").src = character.img;
    document.getElementById("character-description").textContent = character.desc;

    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-screen").style.display = "block";
}

function restartQuiz() {
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-screen").style.display = "none";
    displayQuestions();
}

displayQuestions();
