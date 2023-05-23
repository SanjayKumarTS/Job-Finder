// Function to add the indicator after the target div
var USOnly = [
  "us residents only",
  "us only",
  "u.s. citizens",
  "us citizens",
  "u.s. residents",
  "u.s citizens",
  "u.s residents",
  "us citizenship is required",
  "us citizenship required",
  "u.s. citizenship is required",
  "u.s citizenship is required",
];

var cssClasses = [".us-residents-indicator", ".study-indicator"];

function addIndicatorForLinkedin() {
  console.log("Extension Worked");

  const elements = document.querySelectorAll(cssClasses.toString());
  elements.forEach((element) => {
    if (element) element.remove();
  });
  const targetDiv = document.querySelector(
    ".jobs-unified-top-card__primary-description"
  );
  if (targetDiv) {
    const jobDetailsContainers = document.querySelectorAll(
      ".jobs-search__job-details--container"
    );
    outerLoop: for (let i = 0; i < jobDetailsContainers.length; i++) {
      let containerText = jobDetailsContainers[i].innerText.toLowerCase();
      for (let j = 0; j < USOnly.length; j++) {
        if (containerText.includes(USOnly[j])) {
          const indicator = document.createElement("span");
          indicator.innerText = "Accepting US Citizens Only";
          indicator.classList.add("us-residents-indicator");

          // Check if targetDiv has a next sibling
          if (targetDiv.nextSibling) {
            targetDiv.parentNode.insertBefore(indicator, targetDiv.nextSibling);
          } else {
            targetDiv.parentNode.appendChild(indicator);
          }
          break outerLoop;
        }
      }
      if (
        (containerText.includes("bachelor") &&
          !containerText.includes("master")) ||
        (containerText.includes("bs") && !containerText.includes("ms")) ||
        (containerText.includes("b.s") && !containerText.includes("m.s")) ||
        (containerText.includes("bachelor's") &&
          !containerText.includes("master's"))
      ) {
        const indicator = document.createElement("span");
        indicator.innerText = "Accepting Bachelors Only";
        indicator.classList.add("study-indicator");
        if (targetDiv.nextSibling) {
          targetDiv.parentNode.insertBefore(indicator, targetDiv.nextSibling);
        } else {
          targetDiv.parentNode.appendChild(indicator);
        }
        break outerLoop;
      }
    }
  }
}

function addIndicatorForGlassdoor() {
  console.log("Extension Worked");

  const elements = document.querySelectorAll(cssClasses.toString());
  elements.forEach((element) => {
    if (element) element.remove();
  });
  const targetDiv = document.querySelector(".jobDescriptionContent.desc");
  if (targetDiv) {
    const jobDetailsContainers = document.querySelectorAll(
      ".JobDescriptionContainer"
    );
    outerLoop: for (let i = 0; i < jobDetailsContainers.length; i++) {
      let containerText = jobDetailsContainers[i].innerText.toLowerCase();
      for (let j = 0; j < USOnly.length; j++) {
        if (containerText.includes(USOnly[j])) {
          const indicator = document.createElement("span");
          indicator.innerText = "US Only";
          indicator.classList.add("us-residents-indicator");

          // Check if targetDiv has a next sibling
          if (targetDiv.nextSibling) {
            targetDiv.parentNode.insertBefore(indicator, targetDiv.nextSibling);
          } else {
            targetDiv.parentNode.appendChild(indicator);
          }
          break outerLoop;
        }
      }
      if (
        (containerText.includes("bachelor") &&
          !containerText.includes("master")) ||
        (containerText.includes("bs") && !containerText.includes("ms")) ||
        (containerText.includes("b.s") && !containerText.includes("m.s")) ||
        (containerText.includes("bachelor's") &&
          !containerText.includes("master's"))
      ) {
        const indicator = document.createElement("span");
        indicator.innerText = "Bachelor's Only";
        indicator.classList.add("study-indicator");
        if (targetDiv.nextSibling) {
          targetDiv.parentNode.insertBefore(indicator, targetDiv.nextSibling);
        } else {
          targetDiv.parentNode.appendChild(indicator);
        }
        break outerLoop;
      }
    }
  }
}

if (window.location.href.includes("linkedin.com")) {
  addIndicatorForLinkedin();
} else if (window.location.href.includes("glassdoor.com")) {
  addIndicatorForGlassdoor();
}
