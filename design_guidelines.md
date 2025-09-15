# Shoti Web App Design Guidelines

## Design Approach: Reference-Based (TikTok/Short-Form Video Platform)
Drawing inspiration from TikTok, Instagram Reels, and YouTube Shorts for familiar user patterns while maintaining originality.

## Core Design Elements

### Color Palette
**Dark Mode Primary** (matching TikTok aesthetic):
- Background: 0 0% 6% (near black)
- Surface: 0 0% 12% (dark gray cards)
- Primary: 355 100% 55% (vibrant red-pink for brand/CTA)
- Text Primary: 0 0% 95% (near white)
- Text Secondary: 0 0% 70% (muted gray)

**Light Mode Alternative**:
- Background: 0 0% 98% (off-white)
- Surface: 0 0% 100% (pure white)
- Text Primary: 0 0% 10% (near black)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Display Font**: Poppins (Google Fonts, for headings)
- Video titles: 18px, medium weight
- Metadata: 14px, regular weight
- Developer profile: 16px, medium weight

### Layout System
**Tailwind Spacing Units**: Consistent use of 2, 4, 6, 8, 12, 16, 24
- Component padding: p-4, p-6
- Margins: m-2, m-4, m-8
- Heights: h-8, h-12, h-16

### Component Library

**Video Player Section**:
- Vertical video aspect ratio (9:16) as primary display
- Video controls overlay with play/pause centered
- Cover image as placeholder before play
- Duration badge (top-right corner, rounded)

**Video Metadata Card**:
- Creator avatar (rounded-full, w-12 h-12)
- Username and nickname stacked layout
- Region badge with flag emoji
- Total videos count display
- Engagement-style layout similar to TikTok comments section

**Developer Profile Section**:
- Clean card layout with rounded corners
- Profile image placeholder for Jaymar
- "Newbie Developer" badge with subtle styling
- Skills/tech stack tags
- Contact/social links with icons

**Navigation/Header**:
- Minimal header with app branding
- "Shoti" logo/text with stylized font
- Optional refresh/load new video button

**Loading States**:
- Skeleton loaders for video cards
- Shimmer effects for smooth loading experience
- Spinner for API calls

### Animations
**Minimal Implementation**:
- Subtle fade-in for new videos loading
- Smooth transitions for play/pause states
- Gentle hover effects on interactive elements
- No auto-playing carousels or excessive motion

### Images
**No Large Hero Image**: This is a utility-focused video app
- Video cover images as main visual content
- Developer profile placeholder image (avatar style)
- Small brand logo/icon if needed
- All images should be optimized and responsive

### Interface Pattern
- Single-column mobile-first layout
- Video as central focus point
- Metadata positioned below video player
- Developer profile as dedicated section/sidebar
- Clear visual separation between video content and developer info

### Accessibility
- High contrast ratios maintained in dark mode
- Keyboard navigation support
- Screen reader friendly video controls
- Clear focus states for interactive elements

This design creates a familiar short-form video experience while highlighting Jaymar's developer profile in a clean, professional manner.