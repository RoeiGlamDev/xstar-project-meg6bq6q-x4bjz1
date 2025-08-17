import { formatCurrency } from './formatters';

/
 * Utility functions for luxury LRP cosmetics application.
 * This file contains functions and types specific to the luxury cosmetics industry, 
 * focusing on creating an elegant user experience.
 */

/
 * Represents a cosmetic product in the luxury LRP cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    isFeatured: boolean;
}

/
 * Represents a customer in the luxury LRP cosmetics database.
 */
export interface Customer {
    id: string;
    name: string;
    email: string;
    purchaseHistory: string[];
}

/
 * Formats the product price as a luxury display, including currency symbol.
 * @param price - The price of the product.
 * @returns Formatted price string.
 */
export function formatProductPrice(price: number): string {
    return formatCurrency(price);
}

/
 * Generates a luxury LRP cosmetics product card with 3D effects and elegant design.
 * @param product - The product to generate a card for.
 * @returns HTML string representation of the product card.
 */
export function generateProductCard(product: Product): string {
    return 
        <div class="product-card" style="border: 1px solid white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);">
            <img src="${product.imageUrl}" alt="${product.name}" style="width: 100%; border-bottom: 1px solid white;">
            <div class="product-info" style="padding: 20px; background-color: orange;">
                <h2 style="color: white;">${product.name}</h2>
                <p style="color: white;">${product.description}</p>
                <p style="font-weight: bold; color: white;">${formatProductPrice(product.price)}</p>
                <button style="background-color: white; color: orange; border: none; border-radius: 5px; padding: 10px; cursor: pointer;">
                    Add to Cart
                </button>
            </div>
        </div>
    ;
}

/
 * Formats the customer information for luxury LRP cosmetics.
 * @param customer - The customer to format.
 * @returns Formatted customer information string.
 */
export function formatCustomerInfo(customer: Customer): string {
    return 
        <div class="customer-info" style="padding: 10px; background-color: orange; color: white;">
            <h3>${customer.name}</h3>
            <p>Email: ${customer.email}</p>
            <p>Purchase History: ${customer.purchaseHistory.join(', ')}</p>
        </div>
    ;
}