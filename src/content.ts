const links: HTMLCollectionOf<HTMLAnchorElement> = document.getElementsByTagName("a")

// popup.jsからメッセージを受け取って、ページ内で取得したデータを送り返す
chrome.runtime.onMessage.addListener(() => {
    chrome.runtime.sendMessage({ urlList: [...links].map((a: HTMLAnchorElement) => a.href)});
});
