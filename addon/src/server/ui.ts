import { EXTENSION_NAME } from '../constants';
import type { ScriptContextType } from '../types';
import { detectScriptContext } from './utils';

function getActiveUiForContext(context?: ScriptContextType) {
  let ctx = context;
  if (!context) {
    ctx = detectScriptContext();
  }
  switch (ctx) {
    case 'docs':
      return DocumentApp.getUi();
    case 'slides':
      return SlidesApp.getUi();
    case 'sheets':
      return SpreadsheetApp.getUi();
    default:
      throw new Error('Unknown script context');
  }
}

export const openSidebar = () => {
  const html =
    HtmlService.createHtmlOutputFromFile('sidebar').setTitle(EXTENSION_NAME);
  getActiveUiForContext().showSidebar(html);
};

export const openDialog = () => {
  const html = HtmlService.createHtmlOutputFromFile('dialog')
    .setWidth(1280)
    .setHeight(720);
  getActiveUiForContext().showModalDialog(html, EXTENSION_NAME);
};

export const onOpen = () => {
  const menu = getActiveUiForContext().createAddonMenu();

  menu.addItem('Sidebar', 'openSidebar');
  menu.addSeparator();
  menu.addItem('Dialog', 'openDialog');

  menu.addToUi();
};
