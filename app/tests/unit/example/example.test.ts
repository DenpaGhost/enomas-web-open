test('example test', (): void => {
    console.log(process.env.NODE_ENV); // test, development
    expect(true).toBeTruthy();
});