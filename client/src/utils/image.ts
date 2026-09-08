export function getImageUrl(path: string) {
    if (!path) return "";
  
    const cleanPath = path
      .replace(/\\/g, "/")
      .replace(/^\/+/, "")
      .replace(/\/+/g, "/");
  
    return `/${cleanPath}`;
  }