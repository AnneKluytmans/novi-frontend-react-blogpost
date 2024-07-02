function formatDateString(date) {
    const dateString = new Date(date);
    return dateString.toLocaleDateString('nl-NL', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}

export default formatDateString;