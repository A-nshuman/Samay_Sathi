document.addEventListener('DOMContentLoaded', function () {

    function updateTime() {
        const timePanel = document.getElementById('time');
        const tabTitle = document.getElementById('tabTitle')
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const mins = currentTime.getMinutes().toString().padStart(2, '0');
        const sec = currentTime.getSeconds().toString().padStart(2, '0');
        const tewlveHour = hours % 12 || 12;
        
        // Theme change
        if (hours < 12) {
            document.body.classList.add('morningTheme');
            document.body.classList.remove('nightTheme', 'afternoonTheme', 'eveningTheme');
        }
        else if (hours < 16) {
            document.body.classList.add('afternoonTheme');
            document.body.classList.remove('nightTheme', 'morningTheme', 'eveningTheme');
        }
        else if (hours < 20) {
            document.body.classList.add('eveningTheme');
            document.body.classList.remove('nightTheme', 'morningTheme', 'afternoonTheme');
        }
        else {
            document.body.classList.add('nightTheme');
            document.body.classList.remove('morningTheme', 'afternoonTheme', 'eveningTheme');
        }
        
        // Display Time
        const ampm = hours >= 12 ? 'PM' : 'AM';
        timePanel.innerHTML = `${tewlveHour}:${mins}:${sec} ${ampm}`;
        tabTitle.innerHTML = `${tewlveHour}:${mins}:${sec} ${ampm}`;
    }

    setInterval(updateTime, 1000);
    updateTime();
});