// 1. Grab the light elements from the DOM
const redLight = document.getElementById('red');
const yellowLight = document.getElementById('yellow');
const greenLight = document.getElementById('green');

// 2. Helper function to pause execution (simulates time passing)
// This avoids messy callbacks and makes the sequence easy to read.
const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};

// 3. Helper function to turn off all lights before turning a new one on
function turnOffAllLights() {
    redLight.classList.remove('active');
    yellowLight.classList.remove('active');
    greenLight.classList.remove('active');
}

// 4. Main asynchronous function to run the traffic light cycle loop
async function runTrafficLightSimulator() {
   
    // Infinite loop to keep the traffic light running indefinitely
    while (true) {
       
        // --- STEP 1: RED LIGHT ---
        turnOffAllLights();                
        redLight.classList.add('active');   // Turn Red on
        await sleep(4000);                  // Keep Red on for 4 seconds

        // --- STEP 2: GREEN LIGHT ---
        turnOffAllLights();                
        greenLight.classList.add('active'); // Turn Green on
        await sleep(4000);                  // Keep Green on for 4 seconds

        // --- STEP 3: YELLOW LIGHT ---
        turnOffAllLights();                
        yellowLight.classList.add('active');// Turn Yellow on
        await sleep(1500);                  // Keep Yellow on for 1.5 seconds
       
        // Loop repeats, going back to RED
    }
}

// 5. Start the simulator when the script loads
runTrafficLightSimulator(); 
