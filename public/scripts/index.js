function documentReady(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
}

function onReady() {

  // Setup containers
  const headerContainer = newDomElem('div', 'headerContainer', 'bodySegment');
  const mainContainer = newDomElem('div', 'contentContainer', 'bodySegment');
  const footerContainer = newDomElem('div', 'footerContainer', 'bodySegment');

  // Populate containers
  // Populate headerContain
  const mainTitleContainer = newDomElem('div', 'mainTitleContainer');
  const menuContainer = newDomElem('div', 'menuContainer');

  headerContainer.appendChild(mainTitleContainer);
  headerContainer.appendChild(menuContainer);

  // Handle header content
  mainTitleContainer.appendChild(newDomElem('h1', null, null, 'Patrick is a Full Stack Software Engineer.'));

  // Handle menu content
  menuContainer.appendChild(newDomElem('div', 'homeLink', 'menuLinks', "<p>app.get('<strong>/home</strong>', homeController);</p>"));
  menuContainer.appendChild(newDomElem('div', 'aboutLink', 'menuLinks', "<p>app.get('<strong>/about</strong>', aboutController);</p>"));
  menuContainer.appendChild(newDomElem('div', 'blogLink', 'menuLinks', "<p>app.get('<strong>/blog</strong>', blogController);</p>"));

  // Handle footer content
  footerContainer.appendChild(newDomElem('div', 'footerContent', 'menuLinks', "<p><strong>#purejs #noframework</strong></p>"));

  // Append containers to DOM
  const pageHook = document.getElementById('content');
  pageHook.appendChild(headerContainer);
  pageHook.appendChild(mainContainer);
  pageHook.appendChild(footerContainer);
}

// Custom DOM element creator
function newDomElem(type, id, classes, content) {
  const newElem = document.createElement(type);
  if (id) {
    newElem.setAttribute('id', id);
  }
  if (classes) {
    newElem.setAttribute('class', classes);
  }
  if (content) {
    newElem.innerHTML = content;
  }
  return newElem;
}

// Execute load
documentReady(onReady);