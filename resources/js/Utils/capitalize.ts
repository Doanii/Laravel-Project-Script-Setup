/**
 * This function capitalizes the first char of the string/text
 *
 * Usage: console.log(capitalize("hello"); => "Hello"
 * Created: 29/02/24 by Doanii
 *
 * @param str
 * @return string
 */

export default function capitalize(str: string): string {
    try {
        // Check if the string is empty then return "No string provided"
        if (!str || typeof str !== "string") throw "No string provided";

        // Capitalize the first letter and concatenate with the rest of the string
        return str.charAt(0).toUpperCase() + str.slice(1);
    } catch (e) {
        console.error(e);
        return "Something went wrong";
    }
}
