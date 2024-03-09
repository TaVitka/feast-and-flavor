const tabsContainer = document.querySelector('.tabs');
const tabsList = tabsContainer?.querySelector('.tabs__nav');
const tabButtons = tabsList?.querySelectorAll('a');
const tabPanels = tabsContainer?.querySelectorAll('.tabs__pane > div');
tabButtons?.forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  if (index === 0) {
    tab.classList.add('selected');
    // we'll add something here
  } else {
    tabPanels[index].setAttribute('hidden', '');
  }
});

tabsList?.addEventListener('click', e => {
  const clickedTab = e.target.closest('a');
  const allTabs = tabsContainer.querySelectorAll('a');

  if (!clickedTab) return;
  e.preventDefault();

  switchTab(clickedTab);

  allTabs.forEach(tab => {
    tab.classList.remove('selected');
  });
  clickedTab.classList.add('selected');


});

function switchTab(newTab) {
  const activePanelId = newTab.getAttribute('href');
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabPanels?.forEach(panel => {
    panel.setAttribute('hidden', true);
  });

  activePanel.removeAttribute('hidden', false);
}


// switching and changing title for menu on menu page
const menuSection = document.getElementById('menu');
const menuTitle = menuSection?.querySelector('h2');
const menuNav = menuSection?.querySelector('.menu__nav');
const menuButtons = menuNav?.querySelectorAll('a');

menuButtons?.forEach(( nav,index)=> {
  if (index === 0) {
    nav.classList.add('selected');
  }

  nav.addEventListener('click', function() {
    let name = nav.innerText;
    let idThumbTitle = nav.getAttribute("href");
    let thumbTitle = document.querySelector(`${idThumbTitle}`);
    let thumbItem = thumbTitle?.nextElementSibling.querySelector('a');
    let thumbItemClass = thumbItem?.classList.item(0);
    let allThumbItems = document.querySelectorAll(`.${thumbItemClass}`);


    // changing content inside <h2>
    menuTitle.innerText = name;

    // making clicked nav link active
    menuButtons.forEach(button => {
      button.classList.remove('selected');
    });
    nav.classList.add('selected');

    // moving and making active first menu tab in right menu chapter
    allThumbItems.forEach(button => {
      button.classList.remove('selected');
    });
    thumbItem.classList.add('selected');
    switchTab(thumbItem);

  });
})

