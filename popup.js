let docShuffleFilters = document.getElementById("shuffleFilters");

docShuffleFilters.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: shuffleFilters,
  });
});

function shuffleFilters() {
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


let docShuffleSwimLanes = document.getElementById("shuffleSwimLanes");

docShuffleSwimLanes.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: shuffleSwimLanes,
  });
});

function shuffleSwimLanes() {
  let parent = document.getElementById('ghx-pool');
  if(!parent) return;
  let membersCount = parent.childElementCount;
  getRandom = () => Math.floor(Math.random() * membersCount);
  for(let iteration = 0; iteration <= membersCount; iteration++) {
    let node1 = parent.childNodes[iteration];
    let node2 = parent.childNodes[getRandom()];
    parent.insertBefore(node1, node2);
 }
}
