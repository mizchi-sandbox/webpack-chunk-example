export default async () => {
  const shared = await import(/* webpackChunkName: "shared" */ "./shared");
  console.log("foo", shared.default);
};
