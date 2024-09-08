import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const isExternalURL = (url: string) => {
  try {
      const newUrl = new URL(url);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
  } catch (err) {
      return false;
  }
};
export const getImageSrc = (src: string) => {
  if (!isExternalURL(src) && !src.startsWith('/')) {
      return `/${src}`;
  }
  return src;
};
