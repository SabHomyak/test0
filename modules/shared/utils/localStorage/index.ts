function locStorage(key: string): any;
function locStorage(key: string, data: any): void;

function locStorage(key: string, data?: any): any | void {
  if (typeof window != 'undefined') {
    if (key && data) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      const jsonData = localStorage.getItem(key);
      if (jsonData) {
        return JSON.parse(jsonData);
      } else {
        return undefined;
      }
    }
  }
}

export { locStorage };
