export function normalize(vec) {
    return math.divide(vec, math.norm(vec));
}

export function distance(p1, p2) {
    return math.norm(math.subtract(p1, p2));
}

export function randomBetween(min, max) {
    return min + math.floor(math.random(max-min-1)); 
}

export function rotate(point, angle) {
    let result = [0, 0];
    result[0] = point[0] * math.cos(angle) - point[1] * math.sin(angle);
    result[1] = point[0] * math.sin(angle) + point[1] * math.cos(angle);
    return result;
}

export function scaling(point, xF, yF) {
    let result = [0, 0];
    result[0] = point[0] * xF;
    result[1] = point[1] * yF;
    return result;
}

export function translate(point, xF, yF) {
    let result = [0, 0];
    result[0] = point[0] + xF;
    result[1] = point[1] + yF;
    return result;
}