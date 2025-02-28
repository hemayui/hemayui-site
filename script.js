document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi I'm Hema";
    const typingTextElement = document.getElementById("typing-text");
    let index = 0;
    const typingSpeed = 100; // Delay between each character (in ms)

    function typeText() {
        if (index < text.length) {
            typingTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    // Start the typing effect after the page loads
    typeText();
});
