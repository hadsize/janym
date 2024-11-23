function unlock() {
    const password = document.getElementById("password").value;
    if (password === "31 мая") {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Неправильный пароль. Попробуй ещё раз.");
    }
}
