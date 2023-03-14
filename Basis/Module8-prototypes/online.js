const checkOnlineStatus = async () => {
  try {
    const online = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));

      console.log(online);
    return online.status >= 200 && online.status < 300; // either true or false
  } catch (err) {
    return false; // definitely offline
  }
};

setInterval(async () => {
  const result = await checkOnlineStatus();
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = result ? "Online" : "OFFline";
}, 3000); // probably too often, try 30000 for every 30 seconds

// forgot to include async load event listener in the video! 
window.addEventListener("load", async (event) => {
  const statusDisplay = document.getElementById("status");
  statusDisplay.textContent = (await checkOnlineStatus())
    ? "Online"
    : "OFFline";
});