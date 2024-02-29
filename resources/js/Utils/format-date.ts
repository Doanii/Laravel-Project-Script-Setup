import dayjs from "dayjs";

/**
 * This function capitalizes the first char of the string/text
 *
 * Usage: console.log(formatDate("01-02-2000", "dd-MMMM-YYYY"); => "1 February 2000"
 * Created: 29/02/24 by Doanii
 *
 * @param date
 * @param format
 * @return string
 */

export default function formatDate(date: Date|string, format = "dd-MMMM-YYYY"): string {
    try {
        // Check if date is not set return "No date provided"
        if (!date) return "No date provided";

        // Creating a date object with Date API from Javascript
        const dateObject = new Date(date);

        // Returning the formatted date in the requested format
        return dayjs(dateObject).format(format);
    } catch (e) {
        console.error(e);
        return "Something went wrong";
    }
}
