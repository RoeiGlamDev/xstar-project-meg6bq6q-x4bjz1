import { Product } from './product'; // Importing the Product type from product module

/
 * Interface representing the brand information for luxury LRP cosmetics.
 * This includes the brand's name, industry, and colors.
 */
export interface BrandInfo {
    name: string; // Name of the brand
    industry: string; // Industry of the brand
    primaryColor: string; // Primary color of the brand
    secondaryColor: string; // Secondary color of the brand
}

/
 * Interface representing a cosmetic product in the luxury LRP cosmetics line.
 */
export interface CosmeticProduct {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    category: string; // Category of the product (e.g., skincare, makeup)
    imageUrl: string; // URL of the product image
    isFeatured: boolean; // Indicates if the product is featured
}

/
 * Interface representing the shopping cart for luxury LRP cosmetics.
 */
export interface ShoppingCart {
    items: Array<CosmeticProduct>; // List of products in the cart
    totalPrice: number; // Total price of items in the cart
}

/
 * Brand information specific to luxury LRP cosmetics.
 */
export const brandInfo: BrandInfo = {
    name: "luxury LRP cosmetics",
    industry: "cosmetics",
    primaryColor: "#FFA500", // Orange
    secondaryColor: "#FFFFFF" // White
};

/
 * Function to calculate the total price of items in the shopping cart.
 * @param cart - The shopping cart containing cosmetic products.
 * @returns Total price of the shopping cart.
 */
export const calculateTotalPrice = (cart: ShoppingCart): number => {
    return cart.items.reduce((total, item) => total + item.price, 0);
};