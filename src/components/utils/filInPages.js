export const fillInPages = (data, activeRowsCount, pages) => {
    const pageCount = Math.ceil(data.length / activeRowsCount);
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
}