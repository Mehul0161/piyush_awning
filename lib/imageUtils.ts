import { PLACEHOLDER_IMAGE } from "./assets";

/**
 * Get image path with fallback to placeholder
 * Use this helper to handle missing images gracefully
 */
export function getImagePath(path: string | null | undefined): string {
  if (!path) return PLACEHOLDER_IMAGE;
  // If it's already a full URL (like placehold.co), return as-is
  if (path.startsWith("http")) return path;
  // If it's a local path, return it (Next.js will handle it)
  return path;
}

/**
 * Check if image is a placeholder
 */
export function isPlaceholderImage(path: string): boolean {
  return path.includes("placehold.co");
}
