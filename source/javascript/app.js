import { handleNavigatedToNewPage } from './nav-highlighter.js';

function init() {
    handleNavigatedToNewPage();
}

document.addEventListener('DOMContentLoaded', init);
