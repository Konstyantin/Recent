export function serviceFormDataFormat(data, put = false) {
    let formData = new FormData();

    const {title, short_description, description, icon, image} = data;

    if (put) {
        formData.append('_method', 'put');
    }

    if (title) {
        formData.append('title', title);
    }

    if (short_description) {
        formData.append('short_description', short_description);
    }

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