const tabsContainer = document.querySelector('.tabs');
const tabsList = tabsContainer?.querySelector('.tabs__nav');
const tabButtons = tabsList?.querySelectorAll('a');
const tabPanels = tabsContainer?.querySelectorAll('.tabs__pane > div');

console.log(tabButtons);
tabButtons?.forEach((tab, index) => {
  tab.setAttribute('role', 'tab');
  if (index === 0) {
    tab.classList.add('selected');
    // we'll add something here
  } else {
    tabPanels[index].setAttribute('hidden', '');
  }
});

tabsContainer?.addEventListener('click', e => {
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