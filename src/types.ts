// derive the element type from WDIO's `$` itself
export type wdioEl = ReturnType<typeof import('@wdio/globals').$>;

