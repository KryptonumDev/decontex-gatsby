export const activeLanguage = (location) => {
    let defLocale = 'en'

    if (location.pathname.includes('/ge/')) {
        return 'ge'
    }
    
    if (location.pathname.includes('/fr/')) {
        return 'fr'
    }

    if (location.pathname.includes('/de/')) {
        return 'de'
    }

    return defLocale
}