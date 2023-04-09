import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n'

import en from './en.json'
import es from './es.json'

export { _ } from 'svelte-i18n'

addMessages('en', en)
addMessages('es', es)

init({
  fallbackLocale: 'en',
  initialLocale: getLocaleFromNavigator(),
})
