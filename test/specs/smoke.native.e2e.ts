describe("Android native smoke", () => {
  it("opens Settings and confirms package", async () => {
    // make sure we’re in native context
    try {
      const ctxs = await (driver as any).getContexts?.();
      if (ctxs && ctxs.includes("NATIVE_APP")) {
        await (driver as any).switchContext("NATIVE_APP");
      }
    } catch {}

    // **force** open Settings, regardless of caps
    await (driver as any).startActivity(
      "com.android.settings",
      "com.android.settings.Settings",
    );

    // small settle
    await driver.pause(500);

    const pkg = await (driver as any).getCurrentPackage();
    expect(pkg).toBe("com.android.settings"); // or: expect(pkg.toLowerCase()).toContain('settings')
  });
});
