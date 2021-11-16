export function getSearchParams(params: URLSearchParams) {
    return Object.fromEntries(Array.from(params.entries()).filter((x) => x[1] != ''));
}
