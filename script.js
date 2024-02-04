chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Blocking =>", details.url)
        return {cancel: true}
    },
    {urls: blocked_sites_v2},
    ["blocking"]
)