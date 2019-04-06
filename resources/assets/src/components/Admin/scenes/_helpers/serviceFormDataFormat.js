export function serviceFormDataFormat(data, method = false) {
    let formData = new FormData();

    console.log(data, method);

    const {title, short_description, description, icon, image, selected} = data;

    if (method) {
        formData.append('_method', method);
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

    if (selected) {
        formData.append('selected[]', selected);
    }

    return formData;
}