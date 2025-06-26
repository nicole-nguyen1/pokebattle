export function parseIdFromUrl(url: string) {
  return parseInt(url.split('/').filter(Boolean).pop() ?? '', 10);
}
