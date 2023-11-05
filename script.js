document.addEventListener('DOMContentLoaded', function () {

    function updateTime() {
        const timePanel = document.getElementById('time');
        const tabTitle = document.getElementById('tabTitle')
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const mins = currentTime.getMinutes().toString().padStart(2, '0');
        const sec = currentTime.getSeconds().toString().padStart(2, '0');
        const tewlveHour = hours % 12 || 12;

        var minHand = document.getElementById('minHand')
        var hourHand = document.getElementById('hourHand')
        
        // Theme change
        if (hours < 12) {
            document.body.classList.add('morningTheme');
            document.body.classList.remove('nightTheme', 'afternoonTheme', 'eveningTheme');
            minHand.style.backgroundImage = 'linear-gradient(90deg, black 50%, rgba(255, 255, 255, 0) 50%)'
            hourHand.style.backgroundImage = 'linear-gradient(90deg, black 50%, rgba(255, 255, 255, 0) 50%)'
        }
        else if (hours < 16) {
            document.body.classList.add('afternoonTheme');
            document.body.classList.remove('nightTheme', 'morningTheme', 'eveningTheme');
            minHand.style.backgroundImage = 'linear-gradient(90deg, black 50%, rgba(255, 255, 255, 0) 50%)'
            hourHand.style.backgroundImage = 'linear-gradient(90deg, black 50%, rgba(255, 255, 255, 0) 50%)'
        }
        else if (hours < 20) {
            document.body.classList.add('eveningTheme');
            document.body.classList.remove('nightTheme', 'morningTheme', 'afternoonTheme');
            minHand.style.backgroundImage = 'linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)'
            hourHand.style.backgroundImage = 'linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)'
        }
        else {
            document.body.classList.add('nightTheme');
            document.body.classList.remove('morningTheme', 'afternoonTheme', 'eveningTheme');
            minHand.style.backgroundColor = 'linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)'
            hourHand.style.backgroundImage = 'linear-gradient(90deg, white 50%, rgba(255, 255, 255, 0) 50%)'
        }
        
        // Display Time
        const ampm = hours >= 12 ? 'PM' : 'AM';
        timePanel.innerHTML = `${tewlveHour}:${mins}:${sec} ${ampm}`;
        tabTitle.innerHTML = `${tewlveHour}:${mins}:${sec} ${ampm}`;
    }

    setInterval(updateTime, 1000);
    updateTime();
});