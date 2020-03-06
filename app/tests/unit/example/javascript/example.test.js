import Example from "~/tests/unit/example/javascript/Example";

test('JavaScript test example', () => {
    const inst = new Example();
    expect(inst.true()).toBeTruthy();
});