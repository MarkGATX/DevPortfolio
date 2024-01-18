'use server'

export async function emailMe (formData) {
    const rawFormData = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
      };
}