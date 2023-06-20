interface StorageItem {
  [key: string]: any;
}

export const getStorage = <T extends StorageItem>(key: string): T[] => {
  const value = localStorage.getItem(key) || "";
  return value.length > 0 ? (JSON.parse(value) as T[]) : [];
};

export const setStorage = <T extends StorageItem>(key: string, value: T) =>
  localStorage.setItem(key, JSON.stringify(value));
