document.getElementById('uploadPic').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profilePic').src = e.target.result;
            document.getElementById('profilePic').style.display = "block";
            document.getElementById('userIcon').style.display = "none";
        };
        reader.readAsDataURL(file);
    }
});
