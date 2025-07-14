document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");
  const addBtn = document.querySelector(".first-block button");
  const listContainer = document.querySelector(".blocked-container");
  const clearBtn = document.querySelector(".third-part button:nth-child(1)");
  addBtn.addEventListener("click", async () => {
    const url = input.value.trim();
    const site = new URL(
      url.includes("http") ? url : "https://" + url
    ).hostname.replace("www.", "");
    if (!site) return;
    const { blockedSites = [] } = await chrome.storage.local.get(
      "blockedSites"
    );
    blockedSites.push(site);
    await chrome.storage.local.set({ blockedSites });
    input.value = "";
    renderBlockedList();
  });
  clearBtn.addEventListener("click", async () => {
    await chrome.storage.local.set({ blockedSites: [] });
    renderBlockedList();
  });

  async function renderBlockedList() {
    const { blockedSites = [] } = await chrome.storage.local.get(
      "blockedSites"
    );
    listContainer.innerHTML = "";
    blockedSites.forEach((site) => {
      const item = document.createElement("h1");
      item.textContent = site;
      listContainer.appendChild(item);
    });
  }
  renderBlockedList();
});
