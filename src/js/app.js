export default function sorting(list) {
    let sortResult = list.sort((a, b) => a.health < b.health ? 1 : -1);
    return sortResult
}





