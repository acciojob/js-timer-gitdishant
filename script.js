function updateTimer() {
            const now = new Date();
            const day = now.getDate();
            const month = now.getMonth() + 1; // Months are zero-based
            const year = now.getFullYear();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const formattedTime = `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
            document.getElementById('timer').textContent = formattedTime;