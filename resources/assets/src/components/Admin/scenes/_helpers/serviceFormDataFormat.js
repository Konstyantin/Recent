export function serviceFormDataFormat(data) {
    let formData = new FormData();

    const {title, short_description, description, icon, image} = data;

    formData.append('title', title);
    formData.append('short_description', short_description);

    if (description) {
        formData.append('description', description);
    }

    if (icon) {
        formData.append('icon', icon[0]);
    }

    if (image) {
        formData.append('image', image[0]);
    }

    return formData;
}