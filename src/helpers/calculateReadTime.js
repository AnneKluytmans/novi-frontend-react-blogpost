function calculateReadTime(text) {
    const amountOfWords = text.split(' ').length;
    const readTime = Math.round(amountOfWords / 100 * 0.3);
    return readTime;
}

export default calculateReadTime;