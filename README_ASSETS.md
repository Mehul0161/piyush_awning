# Assets Guide

## Folder Structure

All frontend assets should be placed in `public/assets/images/`:

```
public/
  assets/
    images/
      products/        # Product images
        gazebo-classic.jpg
        awning-retractable.jpg
        pergola-louvre.jpg
        awning-fixed.jpg
      projects/        # Project showcase images
        project-1.jpg
        project-2.jpg
        project-3.jpg
        project-4.jpg
        project-5.jpg
        project-6.jpg
      gallery/         # Gallery images
        texture-1.jpg
        texture-2.jpg
        texture-3.jpg
        completed-1.jpg
        completed-2.jpg
        completed-3.jpg
      hero/            # Hero section images
        background.jpg
      about/           # About page images
        factory.jpg
        team.jpg
```

## Adding New Images

1. **Place images** in the appropriate folder under `public/assets/images/`
2. **Update paths** in `lib/assets.ts` if adding new asset categories
3. **Update data files** (`data/products.json`, `data/projects.json`, etc.) to reference the new image paths
4. **Use the helper** `getImagePath()` from `lib/imageUtils.ts` in components for automatic fallback handling

## Image Guidelines

- **Format**: JPG or PNG
- **Product images**: Recommended 1200x800px (4:3 aspect ratio)
- **Project images**: Recommended 1200x1000px (varied heights for masonry)
- **Gallery images**: Recommended 800x800px (square) or varied
- **Optimize**: Compress images before adding (use tools like TinyPNG, ImageOptim)

## Using Assets in Components

```typescript
import { getImagePath } from "@/lib/imageUtils";
import { ASSETS } from "@/lib/assets";

// Option 1: Use predefined asset paths
<Image src={ASSETS.products.gazebo} alt="Gazebo" />

// Option 2: Use with fallback helper
<Image src={getImagePath(product.thumbnail)} alt={product.name} />
```

## Placeholder Images

Until real images are added, the system will use placeholder images from placehold.co. Once you add images to the assets folder, update the data files to use the local paths.
