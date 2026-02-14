/**
 * Asset paths configuration
 * Update these paths when you add new images to public/assets/images/
 */

const LOCAL_PLACEHOLDER = "/heroBG.jpeg";

export const ASSETS = {
  products: {
    gazebo: LOCAL_PLACEHOLDER,
    awningRetractable: LOCAL_PLACEHOLDER,
    pergolaLouvre: LOCAL_PLACEHOLDER,
    awningFixed: LOCAL_PLACEHOLDER,
  },
  projects: {
    project1: LOCAL_PLACEHOLDER,
    project2: LOCAL_PLACEHOLDER,
    project3: LOCAL_PLACEHOLDER,
    project4: LOCAL_PLACEHOLDER,
    project5: LOCAL_PLACEHOLDER,
    project6: LOCAL_PLACEHOLDER,
  },
  gallery: {
    texture1: LOCAL_PLACEHOLDER,
    texture2: LOCAL_PLACEHOLDER,
    texture3: LOCAL_PLACEHOLDER,
  },
  hero: {
    background: LOCAL_PLACEHOLDER,
  },
  about: {
    factory: LOCAL_PLACEHOLDER,
    team: LOCAL_PLACEHOLDER,
  },
} as const;

// Placeholder fallback (use until real images are added)
export const PLACEHOLDER_IMAGE = LOCAL_PLACEHOLDER;
