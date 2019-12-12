export default async () => {
  const shared = await import(/* webpackChunkName: "shared" */ "./shared");
  console.log("bar", shared.default);
};
