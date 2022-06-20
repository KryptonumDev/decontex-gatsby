import { urls } from "../constants/url"

export const getCurrentPage = (location, locale) => {
    for (const [key, value] of Object.entries(urls)) {
        if (value[locale] === location.pathname) {
            return urls[key]
        }
    }
}