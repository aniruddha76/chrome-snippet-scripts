chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'startSharing') {
    chrome.desktopCapture.chooseDesktopMedia(["screen", "window"], function(streamId) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: streamId,
            maxWidth: 1920,
            maxHeight: 1080
          }
        }
      }).then(function(stream) {
        // Handle the stream, e.g., display it in a video element or send it to a server.
      }).catch(function(error) {
        console.error('Error accessing screen: ' + error);
      });
    });
  }
});
