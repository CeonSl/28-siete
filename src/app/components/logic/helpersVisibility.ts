export function getBrowserVisibilityProp() {
    if (typeof document.hidden !== "undefined") {
      return "visibilitychange";
    } 
  }
  
  export function getBrowserDocumentHiddenProp() {
    if (typeof document.hidden !== "undefined") {
      return "hidden";
    } 
  }
  
  export function getIsDocumentHidden() {
    if (typeof document === 'undefined') {
      // Return a default value or handle the absence of the document differently
      return true; // Assuming that if document is not defined, the document is hidden
  }
    return document[getBrowserDocumentHiddenProp()!];
  }