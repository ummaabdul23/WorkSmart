document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Basic validation (you can expand this with more complex logic)
    if (username && password) {
        alert(`Welcome, ${username}!`);
        // Redirect to the dashboard (you would replace this with your actual logic)
        window.location.href = "dashboard.html";
    } else {
        alert("Please fill in both fields.");
    }
});
document.getElementById("homeworkForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;

    if (title && description && dueDate) {
        alert(`Homework titled "${title}" has been created successfully!`);
        // Reset the form
        document.getElementById("homeworkForm").reset();
        // Redirect to the dashboard (you can replace this with your logic)
        window.location.href = "dashboard.html";
    } else {
        alert("Please fill in all required fields.");
    }
});
document.getElementById("submissionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const assignment = document.getElementById("assignment").value;
    const fileUpload = document.getElementById("fileUpload").files[0];

    if (assignment && fileUpload) {
        alert(`Homework for "${assignment}" has been submitted successfully!`);
        // Reset the form
        document.getElementById("submissionForm").reset();
        // Redirect to the dashboard (you can replace this with your logic)
        window.location.href = "dashboard.html";
    } else {
        alert("Please select an assignment and upload your work.");
    }
});
// Handle feedback form submission
document.getElementById("feedbackForm1").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const feedback = document.getElementById("feedback1").value;
    const grade = document.getElementById("grade1").value;

    if (feedback && grade) {
        alert(`Feedback for Homework 1 has been submitted successfully!`);
        document.getElementById("feedbackForm1").reset();
    } else {
        alert("Please provide both feedback and a grade.");
    }
});

document.getElementById("feedbackForm2").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const feedback = document.getElementById("feedback2").value;
    const grade = document.getElementById("grade2").value;

    if (feedback && grade) {
        alert(`Feedback for Homework 2 has been submitted successfully!`);
        document.getElementById("feedbackForm2").reset();
    } else {
        alert("Please provide both feedback and a grade.");
    }
});


