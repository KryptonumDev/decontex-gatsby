export const activeLanguage = (location) => {
    let defLocale = 'en'

    if (location.pathname.includes('/de/')) {
        return 'de'
    }

    if (location.pathname.includes('/fr/')) {
        return 'fr'
    }

    if (location.pathname.includes('/nl/')) {
        return 'nl'
    }

    return defLocale
}