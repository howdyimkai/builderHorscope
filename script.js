document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('getHoroscope').addEventListener('click', function() {
    let monthSelect = document.getElementById('month');
    let selectedMonth = monthSelect.value;
    let randomNumber = Math.floor(Math.random() * 4) + 1; // Generate a number from 1 to 4

    if (selectedMonth == "January" && randomNumber == 1) {
      document.getElementById('horoscopeOutput').innerHTML = "You're a capricorn builder! Your disciplined approach will result in a career development app that helps users climb the corporate ladder.";
    } else if (selectedMonth == "January" && randomNumber == 2) {
      document.getElementById('horoscopeOutput').innerHTML = "You're a capricorn builder! You’re developing a financial planning tool that simplifies investment for beginners.";
    } else if (selectedMonth == "January" && randomNumber == 3) {
      document.getElementById('horoscopeOutput').innerHTML = "You're a capricorn builder! Your next venture will be an enterprise solution that streamlines business operations.";
    } else if (selectedMonth == "February" && randomNumber == 1) {
      document.getElementById('horoscopeOutput').innerHTML = "You're an Aquarius builder! Your innovative mind will lead to a social impact platform that supports global causes.";
    } else if (selectedMonth == "February" && randomNumber == 2) {
      document.getElementById('horoscopeOutput').innerHTML = "You're an Aquarius builder! You’re about to launch a cutting-edge AI tool that revolutionizes customer service.";
    } else if (selectedMonth == "February" && randomNumber == 3) {
      document.getElementById('horoscopeOutput').innerHTML = "You're an Aquarius builder! Your next project will be a futuristic home automation system that makes smart living accessible to all.";
    } else if (selectedMonth == "March" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Pisces builder! Your creativity will shine through an art and design platform that connects artists with enthusiasts.";
    } else if (selectedMonth == "March" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Pisces builder! You’re developing a wellness app that combines meditation, sleep tracking, and relaxation techniques.";
    } else if (selectedMonth == "March" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Pisces builder! Your next big idea will be a storytelling platform that brings together writers and readers in a unique way.";
    } else if (selectedMonth == "April" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're an Aries builder! Your bold spirit will lead you to create a disruptive new app that will change the way people interact with social media.";
    } else if (selectedMonth == "April" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're an Aries builder! You’re on the verge of launching a fitness tracker that gamifies workouts and motivates users like never before.";
    } else if (selectedMonth == "April" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're an Aries builder! Your next project will be an innovative project management tool that will become indispensable for small teams.";
    } else if (selectedMonth == "May" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Taurus builder! You’re building a luxury e-commerce platform that will redefine online shopping for high-end goods.";
    } else if (selectedMonth == "May" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "Your practical nature will guide you to create a budgeting app that helps users save money effortlessly.";
    } else if (selectedMonth == "May" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = " Expect success with your new sustainable lifestyle brand that blends style with eco-consciousness."; 
    } else if (selectedMonth == "June" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML ="You're a Gemini! Your empathetic approach will lead to a mental health app that provides daily support and resources.";
    } else if (selectedMonth == "June" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Gemini! You’re on the path to creating a family-oriented social media app that brings loved ones closer together.";
    } else if (selectedMonth == "June" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Gemini! Your nurturing nature will result in a top-rated parenting app that offers advice and community support.";
      } else if (selectedMonth == "July" && randomNumber == 1) { //  Corrected to selectedMonth
        document.getElementById('horoscopeOutput').innerHTML = "You're a Cancer! Your empathetic approach will lead to a mental health app that provides daily support and resources.";
      } else if (selectedMonth == "July" && randomNumber == 2) { //  Corrected to selectedMonth
        document.getElementById('horoscopeOutput').innerHTML = "You're a Cancer! You’re on the path to creating a family-oriented social media app that brings loved ones closer together.";
      } else if (selectedMonth == "July" && randomNumber == 3) { //  Corrected to selectedMonth
        document.getElementById('horoscopeOutput').innerHTML = "You're a Cancer! Your nurturing nature will result in a top-rated parenting app that offers advice and community support.";
    } else if (selectedMonth == "August" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Leo! Your charismatic personality will fuel a new video-sharing platform that highlights creative talents.";
    } else if (selectedMonth == "August" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Leo! You’re about to launch an influencer marketing platform that connects brands with rising stars.";
    } else if (selectedMonth == "August" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Leo! Your next venture will be a motivational app that inspires users to pursue their passions and dreams.";
    } else if (selectedMonth == "September" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Virgo! Your attention to detail will make your productivity app the go-to tool for professionals.";
    } else if (selectedMonth == "September" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Virgo! You’re developing a health and wellness tracker that provides personalized recommendations.";
    } else if (selectedMonth == "September" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Virgo! Your analytical mind will create a data-driven marketing tool that transforms how businesses engage customers.";
    } else if (selectedMonth == "October" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Libra! Your sense of balance will lead to a revolutionary remote work collaboration tool."; 
    } else if (selectedMonth == "October" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Libra! You’re about to launch an online marketplace that promotes fair trade and ethical products.";
    } else if (selectedMonth == "October" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Libra! Your next project will be a relationship-building app that helps users find and nurture meaningful connections.";
    } else if (selectedMonth == "November" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Scorpio! Your intensity will drive you to create a cutting-edge cybersecurity solution for startups.";
    } else if (selectedMonth == "November" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Scorpio! You’re developing a powerful productivity tool that uncovers hidden efficiencies.";
    } else if (selectedMonth == "November" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Scorpio! Your passion will lead to an innovative gaming platform that captivates and engages users.";
    } else if (selectedMonth == "December" && randomNumber == 1) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Sagittarius! Your intensity will drive you to create a cutting-edge cybersecurity solution for startups.";
    } else if (selectedMonth == "December" && randomNumber == 2) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Sagittarius! You’re about to launch an educational platform that makes learning new skills fun and interactive."; 
    } else if (selectedMonth == "December" && randomNumber == 3) { //  Corrected to selectedMonth
      document.getElementById('horoscopeOutput').innerHTML = "You're a Sagittarius! Your next big success will be a community-driven app that connects like-minded explorers.";
    }

  });

});