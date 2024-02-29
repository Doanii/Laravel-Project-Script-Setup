/**
 * This function checks if the json is valid
 *
 * Usage: console.log(isValidJson("hello"); => False
 * Created: 29/02/24 by Doanii
 *
 * @param json
 * @return boolean
 */

export default function isValidJson(json: string): boolean {
    try {
        // Try parsing to json
        JSON.parse(json);

        // Parsing passed return true
        return true;
    } catch (e) {
        // If parsing went wrong return false with exception
        return false;
    }
}
