const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 15;
const MONSTER_ATTACK_VALUE = 10;
const HEAL_VALUE = 20;
const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

let chosenMaxLife;

try {
    chosenMaxLife = getMaxLifeValues();
} catch (error) {
    alert(error.message);
    chosenMaxLife = 100;
} finally {
    // Always executes and is not mandatory. 
    // Perform clean up code here.
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];

function getMaxLifeValues() {
    const enteredValue = prompt('Maximum life for you and the monster.', '100');
    const parsedValue = parseInt(enteredValue);
    if (isNaN(parsedValue) || parsedValue <= 0) {
        throw { message: 'Invalid user input, not a number!' };
    }
    return parsedValue;
}

// Call function from vendor.js to adjust health bars.
adjustHealthBars(chosenMaxLife);

// Write log function.
function writeToLog(event, value, monsterHealth, playerHealth) {
    let logEntry = { event: event, value: value, finalMonsterHealth: monsterHealth, finalPlayerHealth: playerHealth };

    switch (event) {
        case LOG_EVENT_PLAYER_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_PLAYER_STRONG_ATTACK:
            logEntry.target = 'MONSTER';
            break;
        case LOG_EVENT_MONSTER_ATTACK:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_PLAYER_HEAL:
            logEntry.target = 'PLAYER';
            break;
        case LOG_EVENT_GAME_OVER:
            logEntry.target = 'GAME OVER';
            break;
        default:
            logEntry = {};
    }
    battleLog.push(logEntry);
}

// Reset game function.
function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

// End round function.
function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= playerDamage;

    writeToLog(LOG_EVENT_MONSTER_ATTACK, playerDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER WON', currentMonsterHealth, currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER WON', currentMonsterHealth, currentPlayerHealth);
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert('You have a draw!');
        writeToLog(LOG_EVENT_GAME_OVER, 'A DRAW', currentMonsterHealth, currentPlayerHealth);
    }

    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0) {
        reset();
    }
}

// Attack monster function.
function attackMonster(mode) {
    // Terenary operator.
    const maxDamage = mode === MODE_ATTACK ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    const logEvent = mode === MODE_ATTACK ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(logEvent, damage, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

// Attack handler buttin function.
function attackHandler() {
    attackMonster(MODE_ATTACK);
}

// Strong attack handler button function.
function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

// Heal player function.
function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        alert("You can't heal to more than your max initial health.");
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue);
    currentPlayerHealth += healValue;
    writeToLog(LOG_EVENT_PLAYER_HEAL, healValue, currentMonsterHealth, currentPlayerHealth);
    endRound();
}

function printLogHandler() {
    // While loop.
    let j = 0;
    while (j < 3) {
        console.log(j);
        j++;
    }

    // Do while loop.
    let k = 0;
    do {
        console.log(k);
        k++;
    } while (k < 3);

    // break statement.
    let l = 0;
    do {
        console.log(l);

        if (l === 1) {
            break;
        }

        l++;
    } while (l < 3);

    // continue statement.
    let m = 0;
    do {
        m++;
        console.log(m);
        if (m === 1) {
            console.log('CONTINUE');
            continue;
        }
    } while (m < 3);

    // Labelled statement.
    let n = 0;
    outerWhile: do {
        n++;
        console.log(n);
        if (n === 1) {
            let m = 0;
            innerWhile: do {
                m++;
                console.log(m);
                if (m === 1) {
                    console.log('Exit outer while loop');
                    break outerWhile;
                }
            } while (m < 3);
        }
    } while (n < 3);

    // Generic for loop.
    for (let i = 0; i < battleLog.length; i++) {
        const log = battleLog[i];
        console.log(log);
    }

    // For of loop.
    for (const log of battleLog) {
        console.log(log.event);
    }

    // For in loop.
    for (const key in battleLog) {
        if (Object.hasOwnProperty.call(battleLog, key)) {
            const logEntry = battleLog[key];
            console.log(logEntry);
        }
    }
}

// Button event listeners.
attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);