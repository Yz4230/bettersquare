const injectHeader = () => {
  // no content yet
};

const overrideTitleBar = () => {
  const titleBar = document.querySelector(
    "body > table > tbody > tr:nth-child(2) > td > table > tbody > tr:nth-child(2) > td"
  );
  titleBar.innerHTML = "";
  const additional = document.createElement("h1");
  additional.textContent = "Better Square";
  additional.style.textAlign = "center";
  additional.style.color = "blue";
  titleBar.appendChild(additional);
};

const injectSideMenu = () => {
  overrideTitleBar();
};

const injectMainContent = () => {
  for (const anchor of document.querySelectorAll("a")) {
    anchor.target = "_blank";
    anchor.rel = "noopener";
  }
};

if (document.querySelector('body > form[name="TopForm"]')) injectHeader();
else if (document.querySelector("body > .menu-outer")) injectSideMenu();
else if (document.querySelector("body > div")) injectMainContent();
