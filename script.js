// ini js untuk button back to top //
let mybutton = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//bagian ini js untuk form

document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    let name = document.getElementById('nama').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('pesan').value.trim();
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(function(element) {
        element.remove();
    });

    // Validate name
    if (name === '') {
        valid = false;
        let error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'Tolong Masukan Namamu.';
        document.getElementById('nama').after(error);
    }

    // Validate email
    if (email === '') {
        valid = false;
        let error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'Tolong Masukan Alamat Email.';
        document.getElementById('email').after(error);
    } else {
        // Simple email regex validation
        let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            valid = false;
            let error = document.createElement('div');
            error.className = 'error';
            error.style.color = 'red';
            error.textContent = 'Tolong Masukan Alamat Email Yang Valid.';
            document.getElementById('email').after(error);
        }
    }

    // Validate message
    if (message === '') {
        valid = false;
        let error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = 'Kolom Feedback Tidak Dapat Kosong.';
        document.getElementById('pesan').after(error);
    }

    if (!valid) {
        event.preventDefault();
    }
});
