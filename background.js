chrome.runtime.onInstalled.addListener(async () => {
  const { blockedSites = [] } = await chrome.storage.local.get("blockedSites");

  const rules = blockedSites.map((site, index) => ({
    id: index + 1,
    priority: 1,
    action: {
      type: "redirect",
      redirect: { extensionPath: "/focus.html" },
    },
    condition: {
      urlFilter: site,
      resourceTypes: ["main_frame"],
    },
  }));

  await chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: Array.from({ length: 100 }, (_, i) => i + 1),
    addRules: rules,
  });
});
