var arrayUrls = [];

async function downloadStories() {
    const profileImage = document.querySelector("header img");

    // Create a promise that resolves when the target element is found
    function waitForElementToBeAvailable() {
        return new Promise(resolve => {
            const observer = new MutationObserver(mutations => {
                mutations.forEach(mutation => {
                    // Check if the target element exists
                    if (document.querySelector("._ac3n img")) {
                        observer.disconnect(); // Stop observing DOM changes
                        resolve();
                    }
                });
            });

            // Start observing mutations in the DOM
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

    // Click on the profile image and wait for the target element to appear
    profileImage.click();
    await waitForElementToBeAvailable();

    // Once the target element is available, proceed with downloading stories
    const storyElements = document.querySelectorAll("._ac3n img");
    for (let i = 0; i < storyElements.length; i++) {
        var imageUrl = storyElements[i].src;
        arrayUrls.push(imageUrl);
        document.getElementsByTagName("button")[0].click();
    }
}

async function startDownload() {
    await downloadStories();
    console.log(arrayUrls);
}

startDownload();
