const BRAND_NAME = "luxury LRP cosmetics";
const PRIMARY_COLOR = "#FFA500"; // Orange
const SECONDARY_COLOR = "#FFFFFF"; // White

/
 * Configuration constants for the luxury LRP cosmetics application
 * This file contains brand-specific constants and configurations
 * tailored for the luxury cosmetics industry.
 */

export const BRAND_CONSTANTS = {
    name: BRAND_NAME,
    colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
    },
    website: {
        tagline: "Elevate Your Beauty with Luxury LRP Cosmetics",
        description: "Indulge in our high-end, luxurious cosmetics designed for the discerning customer. Our products embody elegance and sophistication, ensuring every application is a lavish experience.",
        keywords: ["luxury cosmetics", "high-end beauty", "premium makeup", "cosmetic elegance", "luxury skincare"],
        socialMedia: {
            instagram: "@luxuryLRPcosmetics",
            facebook: "luxuryLRPcosmetics",
            twitter: "@luxuryLRPcosmetics",
        },
    },
};

/
 * Interface representing a cosmetic product
 */
export interface CosmeticProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    inStock: boolean;
}

/
 * Example cosmetic product data for luxury LRP cosmetics
 */
export const sampleProducts: CosmeticProduct[] = [
    {
        id: "1",
        name: "Golden Radiance Foundation",
        description: "A luxurious foundation that provides a radiant finish and long-lasting coverage.",
        price: 55.00,
        category: "Foundation",
        imageUrl: "/images/golden-radiance-foundation.jpg",
        inStock: true,
    },
    {
        id: "2",
        name: "Silk Touch Lipstick",
        description: "Our silk touch lipstick glides on effortlessly for a smooth, luxurious finish.",
        price: 35.00,
        category: "Lipstick",
        imageUrl: "/images/silk-touch-lipstick.jpg",
        inStock: true,
    },
    {
        id: "3",
        name: "Velvet Glow Highlighter",
        description: "Achieve a luminous glow with our velvet finish highlighter, perfect for any occasion.",
        price: 40.00,
        category: "Highlighter",
        imageUrl: "/images/velvet-glow-highlighter.jpg",
        inStock: true,
    },
];