function inIframe() {
    try {
        return window.self !== window.top;
    } catch (Exception) {
        return true;
    }
}