let inventory = [];
let coins = 0;
let luckUpgrade = false;
let doubleReward = false;
let baseInventorySize = 10;
let inventorySize = baseInventorySize;
let isGeneratingWord = false;
let countdownInterval;
let quests = [
    { description: "Collect 5 common fruits", type: "common", count: 5, reward: 50, completed: false, timeLimit: 60 },
    { description: "Collect 3 rare fruits", type: "rare", count: 3, reward: 100, completed: false, timeLimit: 120 },
    { description: "Collect 2 epic fruits", type: "epic", count: 2, reward: 200, completed: false, timeLimit: 180 },
    { description: "Collect 1 legendary fruit", type: "legendary", reward: 500, count: 1, completed: false, timeLimit: 300 }
];

const words = [
    { word: "apple", rarity: "common" },
    { word: "apple", rarity: "common" },
    { word: "banana", rarity: "common" },
    { word: "grape", rarity: "common" },
    { word: "mango", rarity: "common" },
    { word: "orange", rarity: "common" },
    { word: "peach", rarity: "common" },
    { word: "strawberry", rarity: "common" },
    { word: "watermelon", rarity: "common" },
    { word: "papaya", rarity: "common" },
    { word: "pineapple", rarity: "common" },
    { word: "blackcurrant", rarity: "common" },
    { word: "apricot", rarity: "common" },
    { word: "chayote", rarity: "common" },
    { word: "pitaya", rarity: "common" },
    { word: "marula", rarity: "common" },
    { word: "guanabana", rarity: "common" },
    { word: "pawpaw", rarity: "common" },
    { word: "santol", rarity: "common" },
    { word: "wax apple", rarity: "common" },
    { word: "jambul", rarity: "common" },
    { word: "pulasan", rarity: "common" },
    { word: "sugar palm", rarity: "common" },
    { word: "ciku", rarity: "common" },
    { word: "apple berry", rarity: "common" },
    { word: "mulberry", rarity: "common" },
    { word: "soursop", rarity: "common" },
    { word: "olive", rarity: "common" },
    { word: "cucumber", rarity: "common" },
    { word: "bottle gourd", rarity: "common" },
    { word: "loquat", rarity: "common" },
    { word: "gac", rarity: "common" },
    { word: "bilimbi", rarity: "common" },
    { word: "cactus pear", rarity: "common" },
    { word: "elderberry", rarity: "common" },
    { word: "fig", rarity: "common" },
    { word: "lychee", rarity: "common" },
    { word: "apple rose", rarity: "rare" },
    { word: "cherry", rarity: "rare" },
    { word: "plum", rarity: "rare" },
    { word: "kiwi", rarity: "rare" },
    { word: "blackberry", rarity: "rare" },
    { word: "blueberry", rarity: "rare" },
    { word: "raspberry", rarity: "rare" },
    { word: "cranberry", rarity: "rare" },
    { word: "goji berry", rarity: "rare" },
    { word: "pomegranate", rarity: "rare" },
    { word: "quince", rarity: "rare" },
    { word: "breadfruit", rarity: "rare" },
    { word: "salak", rarity: "rare" },
    { word: "sugar apple", rarity: "rare" },
    { word: "rose apple", rarity: "rare" },
    { word: "maypop", rarity: "rare" },
    { word: "jaboticaba", rarity: "rare" },
    { word: "acerola", rarity: "rare" },
    { word: "medlar", rarity: "rare" },
    { word: "sea grape", rarity: "rare" },
    { word: "gooseberry", rarity: "rare" },
    { word: "burdekin plum", rarity: "rare" },
    { word: "natal plum", rarity: "rare" },
    { word: "cashew apple", rarity: "rare" },
    { word: "cloudberry", rarity: "rare" },
    { word: "mulberry", rarity: "rare" },
    { word: "pineberry", rarity: "epic" },
    { word: "ursinia", rarity: "epic" },
    { word: "bolaus", rarity: "epic" },
    { word: "bufruit", rarity: "epic" },
    { word: "razzberry", rarity: "epic" },
    { word: "ravenfruit", rarity: "epic" },
    { word: "emberberry", rarity: "epic" },
    { word: "alphonso mango", rarity: "epic" },
    { word: "tapeworm berry", rarity: "epic" },
    { word: "durian", rarity: "epic" },
    { word: "longan", rarity: "epic" },
    { word: "jackfruit", rarity: "epic" },
    { word: "langsat", rarity: "epic" },
    { word: "tamarillo", rarity: "epic" },
    { word: "kiwifruit", rarity: "epic" },
    { word: "carambola", rarity: "epic" },
    { word: "breadfruit", rarity: "epic" },
    { word: "ackee", rarity: "epic" },
    { word: "cherimoya", rarity: "epic" },
    { word: "soursop", rarity: "epic" },
    { word: "feijoa", rarity: "epic" },
    { word: "custard apple", rarity: "epic" },
    { word: "litchi", rarity: "epic" },
    { word: "persimmon", rarity: "epic" },
    { word: "melon", rarity: "epic" },
    { word: "rambutan", rarity: "epic" },
    { word: "monstera", rarity: "epic" },
    { word: "black sapote", rarity: "epic" },
    { word: "buddha's hand", rarity: "epic" },
    { word: "mangosteen", rarity: "epic" },
    { word: "red currant", rarity: "epic" },
    { word: "miracle fruit", rarity: "epic" },
    { word: "kiwano", rarity: "epic" },
    { word: "gooseberry", rarity: "epic" },
    { word: "bacang", rarity: "legendary" },
    { word: "sweetsop", rarity: "legendary" },
    { word: "durian", rarity: "legendary" },
    { word: "thorn fruit", rarity: "legendary" },
    { word: "rose apple", rarity: "legendary" },
    { word: "acerola", rarity: "legendary" },
    { word: "dragon fruit", rarity: "legendary" },
    { word: "elderberry", rarity: "legendary" },
    { word: "longan", rarity: "legendary" },
    { word: "miracle fruit", rarity: "legendary" },
    { word: "jabuticaba", rarity: "legendary" },
    { word: "cherimoya", rarity: "legendary" },
    { word: "passion fruit", rarity: "legendary" },
    { word: "sapote", rarity: "legendary" },
    { word: "noni", rarity: "legendary" },
    { word: "cupuacu", rarity: "legendary" },
    { word: "honeyberry", rarity: "legendary" },
    { word: "jatoba", rarity: "legendary" },
    { word: "lucuma", rarity: "legendary" },
    { word: "mangosteen", rarity: "legendary" },
    { word: "salak", rarity: "legendary" },
    { word: "rambutan", rarity: "legendary" },
];


const rarities = {
    "common": 0.6,
    "rare": 0.25,
    "epic": 0.1,
    "legendary": 0.05
};

let experience = 0;
let level = 1;
let experiencePerLevel = 100;
let temporaryBoosts = {
    speedBoost: 0
};
let questTimers = [];

document.getElementById('generateButton').addEventListener('click', () => {
    if (isGeneratingWord) {
        return;
    }

    isGeneratingWord = true;

    const output = document.getElementById('output');
    const rarityDisplay = document.getElementById('rarity');
    const container = document.querySelector('.container');
    const wordData = getRandomWord();

    output.textContent = wordData.word;
    output.className = `output ${wordData.rarity}`;
    rarityDisplay.textContent = `Rarity: ${wordData.rarity}`;
    rarityDisplay.className = `rarity ${wordData.rarity}`;

    // Set background color for container
    container.className = `container ${wordData.rarity}`;

    // Add the word to inventory if there's space
    if (inventory.length < inventorySize) {
        addToInventory(wordData.word, wordData.rarity);
        hideAlertMessage();
        checkQuests();
    } else {
        showAlertMessage('Inventory full!');
    }

    startCountdown();
});

document.getElementById('inventoryButton').addEventListener('click', () => {
    const inventoryDiv = document.getElementById('inventory');
    if (inventoryDiv.style.display === 'none' || inventoryDiv.style.display === '') {
        inventoryDiv.style.display = 'block';
        updateInventoryDisplay();
    } else {
        inventoryDiv.style.display = 'none';
    }
});

document.getElementById('shopButton').addEventListener('click', () => {
    const shopDiv = document.getElementById('shop');
    if (shopDiv.style.display === 'none' || shopDiv.style.display === '') {
        shopDiv.style.display = 'block';
        updateShopDisplay();
    } else {
        shopDiv.style.display = 'none';
    }
});

document.getElementById('questButton').addEventListener('click', () => {
    const questsDiv = document.getElementById('quests');
    if (questsDiv.style.display === 'none' || questsDiv.style.display === '') {
        questsDiv.style.display = 'block';
        updateQuestsDisplay();
    } else {
        questsDiv.style.display = 'none';
    }
});

document.getElementById('socialsButton').addEventListener('click', () => {
    const oursocialsDiv = document.getElementById('oursocials');
    if (oursocialsDiv.style.display === 'none' || oursocialsDiv.style.display === '') {
        oursocialsDiv.style.display = 'block';
        updateOurSocialsDisplay();
    } else {
        oursocialsDiv.style.display = 'none';
    }
});

function getRandomWord() {
    let currentRarities = { ...rarities };

    if (luckUpgrade) {
        currentRarities = {
            "common": 0.4,
            "rare": 0.35,
            "epic": 0.2,
            "legendary": 0.05
        };
    }

    const wordList = Object.entries(currentRarities)
        .flatMap(([rarity, chance]) =>
            words.filter(word => word.rarity === rarity).map(word => ({ ...word, chance }))
        );

    const totalWeight = wordList.reduce((total, word) => total + word.chance, 0);

    let randomIndex = Math.random() * totalWeight;

    for (let i = 0; i < wordList.length; i++) {
        randomIndex -= wordList[i].chance;
        if (randomIndex <= 0) {
            return wordList[i];
        }
    }
}

function addToInventory(word, rarity) {
    // Avoid adding duplicates
    if (!inventory.some(item => item.word === word)) {
        inventory.push({ word, rarity });
    }

    // Update the inventory display
    updateInventoryDisplay();
}

function updateInventoryDisplay() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = `<h3>Inventory (Size: ${inventory.length}/${inventorySize}):</h3>`;
    inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = `inventory-item ${item.rarity}`;
        itemDiv.innerHTML = `${item.word} (<span class="${item.rarity}">Rarity: ${item.rarity}</span>) <button onclick="sellFruit('${item.word}')">Sell</button>`;
        inventoryDiv.appendChild(itemDiv);
    });
}

function sellFruit(word) {
    const fruitIndex = inventory.findIndex(item => item.word === word);
    if (fruitIndex !== -1) {
        const fruit = inventory[fruitIndex];
        let coinValue = 10;
        let experienceValue = 5;
        switch (fruit.rarity) {
            case 'rare':
                coinValue = 20;
                experienceValue = 10;
                break;
            case 'epic':
                coinValue = 50;
                experienceValue = 30;
                break;
            case 'legendary':
                coinValue = 100;
                experienceValue = 50;
                break;
        }
        if (doubleReward) {
            coinValue *= 2;
        }
        coins += coinValue;
        gainExperience(experienceValue);
        document.getElementById('coinCount').textContent = coins;

        // Remove the fruit from the inventory
        inventory.splice(fruitIndex, 1);
        updateInventoryDisplay();
    }
}

function gainExperience(amount) {
    experience += amount;
    if (experience >= level * experiencePerLevel) {
        level++;
        experience = 0;
        coins += level * 10; // Reward player with coins on level up
        alert(`Congratulations! You've reached level ${level}.`);
    }
    document.getElementById('experienceCount').textContent = `Experience: ${experience}/${level * experiencePerLevel}`;
    document.getElementById('levelCount').textContent = level;
}

function updateShopDisplay() {
    const shopDiv = document.getElementById('shop');
    shopDiv.innerHTML = `
        <h3>Shop:</h3>
        <button onclick="buyLuckUpgrade()">Buy Luck Upgrade (100 coins)</button>
        <button onclick="buyDoubleReward()">Buy Double Reward (200 coins)</button>
        <button onclick="buyInventoryUpgrade()">Buy Inventory Upgrade (150 coins)</button>
        <button onclick="buyTemporaryBoost('speedBoost', 5)">Buy Speed Boost (50 coins, lasts 5 generations)</button>
    `;
}

function updateOurSocialsDisplay() {
    const oursocialsDiv = document.getElementById('oursocials');
    oursocialsDiv.innerHTML = `
        <h3>Our Socials:</h3>
        <input type="button" onclick="window.location.href='https://www.tiktok.com/@fugding.cookie.cl';" value="TikTok" />
        <input type="button" onclick="window.location.href='https://untitledgames-corp.itch.io/';" value="Itch" />
        <input type="button" onclick="window.location.href='https://github.com/UntitledGamesCorp';" value="GitHub" />
        <input type="button" onclick="window.location.href='https://untitledgamescorp.xyz';" value="Our Website" />
    `;
}


function buyLuckUpgrade() {
    if (coins >= 100 && !luckUpgrade) {
        coins -= 100;
        luckUpgrade = true;
        document.getElementById('coinCount').textContent = coins;
        updateShopDisplay();
    }
}

function buyDoubleReward() {
    if (coins >= 200 && !doubleReward) {
        coins -= 200;
        doubleReward = true;
        document.getElementById('coinCount').textContent = coins;
        updateShopDisplay();
    }
}

function buyInventoryUpgrade() {
    if (coins >= 150) {
        coins -= 150;
        inventorySize += 5; // Increase inventory size by 5 with each purchase
        document.getElementById('coinCount').textContent = coins;
        updateShopDisplay();
        updateInventoryDisplay();
    }
}

function buyTemporaryBoost(boostType, duration) {
    if (coins >= 50) {
        coins -= 50;
        temporaryBoosts[boostType] = duration;
        updateShopDisplay();
        document.getElementById('coinCount').textContent = coins;
    }
}

function updateQuestsDisplay() {
    const questsDiv = document.getElementById('quests');
    questsDiv.innerHTML = '<h3>Quests:</h3>';
    quests.forEach((quest, index) => {
        if (!quest.completed) {
            const questDiv = document.createElement('div');
            questDiv.className = 'quest';
            questDiv.innerHTML = `${quest.description} - <button onclick="completeQuest(${index})">Check</button>`;
            questsDiv.appendChild(questDiv);
            startQuestTimer(index);
        }
    });
}

function startQuestTimer(index) {
    const quest = quests[index];
    let remainingTime = quest.timeLimit;
    questTimers[index] = setInterval(() => {
        remainingTime--;
        if (remainingTime <= 0) {
            clearInterval(questTimers[index]);
            showAlertMessage(`Time's up! You failed the quest: ${quest.description}`);
        }
    }, 1000);
}

function completeQuest(index) {
    const quest = quests[index];
    const fruitsOfType = inventory.filter(item => item.rarity === quest.type);
    if (fruitsOfType.length >= quest.count) {
        quest.completed = true;
        coins += quest.reward;
        document.getElementById('coinCount').textContent = coins;
        updateQuestsDisplay();
        clearInterval(questTimers[index]);
    } else {
        showAlertMessage(`You need more ${quest.type} fruits to complete this quest.`);
    }
}

function checkQuests() {
    quests.forEach((quest, index) => {
        if (!quest.completed) {
            const fruitsOfType = inventory.filter(item => item.rarity === quest.type);
            if (fruitsOfType.length >= quest.count) {
                completeQuest(index);
            }
        }
    });
}

function showAlertMessage(message) {
    const alertMessageDiv = document.getElementById('alertMessage');
    alertMessageDiv.innerText = message;
    alertMessageDiv.style.display = 'block';
}

function hideAlertMessage() {
    const alertMessageDiv = document.getElementById('alertMessage');
    alertMessageDiv.style.display = 'none';
}

function startCountdown() {
    let remainingTime = temporaryBoosts.speedBoost > 0 ? 1 : 1.5;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${remainingTime.toFixed(1)}s`;
    countdownElement.style.display = 'block';

    countdownInterval = setInterval(() => {
        remainingTime -= 0.1;
        countdownElement.textContent = `${remainingTime.toFixed(1)}s`;

        if (remainingTime <= 0) {
            clearInterval(countdownInterval);
            countdownElement.style.display = 'none';
            isGeneratingWord = false;
            if (temporaryBoosts.speedBoost > 0) temporaryBoosts.speedBoost--;
        }
    }, 100);
}
