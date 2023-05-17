export function getCurrentYear():number {
    return parseInt(new Date().toISOString().split(' ')[0].split('-')[0])
}