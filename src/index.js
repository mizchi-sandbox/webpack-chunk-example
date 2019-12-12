// Do not import
// import foo from "foo";
// import bar from "bar";

window.addEventListener("load", async () => {
  // router like handler
  switch (location.pathname) {
    case "/foo": {
      const foo = await import("./foo");
      foo.default();
    }
    case "/bar": {
      const bar = await import("./bar");
      bar.default();
    }
  }
});
