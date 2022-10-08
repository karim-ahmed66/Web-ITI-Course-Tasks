function showGreeting()
{
    let userName = document.getElementById('name').value;
    let nameWithGreeting = "Welcome," + " " + userName;
    document.getElementById("message").innerHTML = nameWithGreeting;
}