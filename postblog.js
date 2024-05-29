document.addEventListener("DOMContentLoaded", function() {
    // Get all paragraphs with the class 'latest-post-text'
    var paragraphs = document.querySelectorAll(".latest-post-text");

    // Iterate through each paragraph
    paragraphs.forEach(function(paragraph) {
        // Add event listener for mouseenter
        paragraph.addEventListener("mouseenter", function() {
            // Change the color when hovering
            this.style.color = "blue";
            // Change cursor to pointer
            this.style.cursor = "pointer";
        });

        // Add event listener for mouseleave
        paragraph.addEventListener("mouseleave", function() {
            // Restore original color when not hovering
            this.style.color = "";
            // Restore default cursor
            this.style.cursor = "";
        });

        // Add event listener for click
        paragraph.addEventListener("click", function() {
            // Get the value of the data-link attribute
            var link = this.getAttribute("data-link");
            // If the link is not empty, redirect to it
            if (link) {
                window.location.href = link;
            }
        });
    });
});
