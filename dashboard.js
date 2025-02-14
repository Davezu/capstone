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

<li class="nav-item">
                <div class="profile-box ms-2" onclick="document.getElementById('uploadPic').click()">
                    <input type="file" id="uploadPic" style="display: none;" accept="image/*">
                    <div class="profile-content">
                        <i class='bx bx-user' id="userIcon"></i>
                    </div>
                </div>
            </li>