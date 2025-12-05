import type { ScriptContextType } from '../types';

export function detectScriptContext(): ScriptContextType {
  try {
    const ui = SpreadsheetApp.getUi();
    if (ui) {
      return 'sheets';
    }
  } catch (_eSheet) {
    try {
      const docUi = DocumentApp.getUi();
      if (docUi) {
        return 'docs';
      }
    } catch (eDoc) {
      try {
        const slideUi = SlidesApp.getUi();
        if (slideUi) {
          return 'slides';
        }
      } catch (eSlide) {
        throw new Error('Unknown script context');
      }
    }
  }
  throw new Error('Unknown script context');
}
