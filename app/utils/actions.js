'use server'

export async function emailMe (formData) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
}

export async function darkModeToggle ()  {
    const element = document.querySelector('html[data-theme]')
    const theme = element.dataset.theme
    if (theme === 'dark') {
      element.dataset.theme='light'
    } else {
      element.dataset.theme ='dark'
    }
  }