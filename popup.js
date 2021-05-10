let shuffleFilters = document.getElementById("shuffleFilters");

shuffleFilters.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: shuffle,
  });
});

// shuffle quick filters
function shuffle() {
  let parent = document.getElementById('js-work-quickfilters');
  if(!parent) return;
  let membersCount = parent.childElementCount - 3;
  getRandom = () => Math.floor(Math.random() * membersCount) + 1;
  for(let iteration = 1; iteration <= membersCount; iteration++) {
    let node1 = parent.childNodes[iteration];
    let node2 = parent.childNodes[getRandom()];
    parent.insertBefore(node1, node2);
 }
}
