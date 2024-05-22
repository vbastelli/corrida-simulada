document.addEventListener('DOMContentLoaded', () => {
    const car1 = document.getElementById('car1');
    const car2 = document.getElementById('car2');
    const result = document.getElementById('result');
    const startRaceButton = document.getElementById('startRace');
    const driver1Button = document.getElementById('driver1');
    const driver2Button = document.getElementById('driver2');

    let selectedDriver = null;
    let raceStarted = false;

    driver1Button.addEventListener('click', () => {
        if (!raceStarted) {
            selectedDriver = 1;
            result.textContent = 'Edoardo Mortara selected';
            driver1Button.disabled = true; // Disable the button
            driver2Button.disabled = true; // Disable the other button
        }
    });

    driver2Button.addEventListener('click', () => {
        if (!raceStarted) {
            selectedDriver = 2;
            result.textContent = 'Nyck de Vries selected';
            driver1Button.disabled = true; // Disable the button
            driver2Button.disabled = true; // Disable the other button
        }
    });

    startRaceButton.addEventListener('click', () => {
        if (selectedDriver === null) {
            result.textContent = 'Please select a driver first!';
            return;
        }

        if (!raceStarted) {
            raceStarted = true;
            result.textContent = '';
            car1.style.left = '10px';
            car2.style.left = '10px';

            const track = document.getElementById('track');

            const raceInterval = setInterval(() => {
                const car1Pos = car1.offsetLeft + Math.random() * 10;
                const car2Pos = car2.offsetLeft + Math.random() * 10;

                car1.style.left = `${car1Pos}px`;
                car2.style.left = `${car2Pos}px`;

                if (car1Pos >= (track.clientWidth - car1.clientWidth)) {
                    clearInterval(raceInterval);
                    result.textContent = selectedDriver === 1 ? 'You win!' : 'Edoardo Mortara wins!';
                }

                if (car2Pos >= (track.clientWidth - car2.clientWidth)) {
                    clearInterval(raceInterval);
                    result.textContent = selectedDriver === 2 ? 'You win!' : 'Nyck de Vries wins!';
                }
            }, 50);
        }
    });
});
