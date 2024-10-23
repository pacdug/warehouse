function startStory() {
    const adam = new Adam();
    const eva = new Eva();

    document.getElementById("adam").style.left = "150px";
    document.getElementById("eva").style.right = "150px";

    setTimeout(() => {
        alert(adam.speak("Chào Eva!"));
        alert(eva.speak("Chào Adam!"));
        alert("Adam và Eva gặp nhau và sống hạnh phúc mãi mãi.");
        document.getElementById("adam").style.left = "50px";
        document.getElementById("eva").style.right = "50px";
    }, 3000);
}
