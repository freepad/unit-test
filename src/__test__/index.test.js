import healthStatus from "../index.js"

test("здоровый персонаж", () => {
    const character = {name: 'Маг', health: 90};
    expect(healthStatus(character)).toBe("healthy")
})
test("раненный персонаж", () => {
    const character = {name: 'Маг', health: 45};
    expect(healthStatus(character)).toBe("wounded")
})
test("критическое состояние персонаж", () => {
    const character = {name: 'Маг', health: 10};
    expect(healthStatus(character)).toBe("critical")
})