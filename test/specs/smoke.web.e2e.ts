describe("Android web smoke", () => {
  it("loads example.com", async () => {
    await browser.url("https://example.com");
    const title = await browser.getTitle();
    expect(title.toLowerCase()).toContain("example");
  });
});
