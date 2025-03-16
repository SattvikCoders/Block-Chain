document.addEventListener('DOMContentLoaded', function() {


    // Hamburger Menu Toggle
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    navbar.addEventListener('click', function(e) {
        if (e.target === navbar) {
            navLinks.classList.toggle('active');
        }
    });

    const growthData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'New Athletes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const contractData = {
        labels: ['Sponsorships', 'Salaries', 'Bonuses'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(255, 206, 86, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    };

    const performanceData = {
        labels: ['Speed', 'Strength', 'Endurance'],
        datasets: [{
            label: 'Performance Metrics',
            data: [80, 75, 90],
            backgroundColor: 'rgba(153, 102, 255, 0.5)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
        }]
    };

    const trainingData = {
        labels: ['Cardio', 'Weightlifting', 'Flexibility'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['rgba(255, 159, 64, 0.5)', 'rgba(100, 200, 150, 0.5)', 'rgba(200, 100, 200, 0.5)'],
            borderColor: ['rgba(255, 159, 64, 1)', 
                'rgba(100, 200, 150, 1)', 'rgba(200, 100, 200, 1)'],
            borderWidth: 1
        }]
    };

    // Create Charts
    new Chart(document.getElementById('growthBarChart'), {
        type: 'bar',
        data: growthData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(document.getElementById('contractPieChart'), {
        type: 'pie',
        data: contractData
    });

    new Chart(document.getElementById('performanceBarChart'), {
        type: 'bar',
        data: performanceData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(document.getElementById('trainingPieChart'), {
        type: 'pie',
        data: trainingData
    });

     //Dummy Athlete Profiles (Replace with real data)
     const athleteProfiles = [
        { name: "Athlete 1", sport: "Soccer", image: "assets/soccer.jpg", nftId: "NFT-123" },
        { name: "Athlete 2", sport: "Basketball", image: "assets/bascetball.jpg", nftId: "NFT-456" },
        { name: "Athlete 3", sport: "Tennis", image: "assets/tennis.jpg", nftId: "NFT-789" },
    ];
    
    const profileGrid = document.querySelector(".profile-grid");
    if (!profileGrid) {
        console.error("Profile grid element not found");
        return;
    }

    athleteProfiles.forEach(athlete => {
        const profileCard = document.createElement("div");
        profileCard.classList.add("profile-card");
        profileCard.innerHTML = `
            <img src="${athlete.image}" alt="${athlete.name}">
            <h3>${athlete.name}</h3>
            <p>Sport: ${athlete.sport}</p>
            <p>NFT ID: ${athlete.nftId}</p>
        `;
        profileGrid.appendChild(profileCard);
    });
   
});