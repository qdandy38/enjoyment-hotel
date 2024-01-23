interface LocalStorageAccess {
  get: () => any;
  set: (token: string) => void;
  remove: () => void;
}

function defineStorage(key: string): LocalStorageAccess {
  const isLocalStorageAvailable = typeof window !== 'undefined' && window.localStorage;

  return {
    get() {
      if (isLocalStorageAvailable) {
        return localStorage.getItem(key);
      }
      return null;
    },
    set(token) {
      return localStorage.setItem(key, token);
    },
    remove() {
      return localStorage.removeItem(key);
    },
  };
}

export const localToken = defineStorage('enjoyment-hotel-token');
export const localRememberMe = defineStorage('enjoyment-hotel-remember');
