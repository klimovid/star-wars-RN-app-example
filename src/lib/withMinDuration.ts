export default function withMinDuration<T = any>(
  durationMs: number,
): (promise: Promise<T>) => Promise<T> {
  const waitForMinLoadingTime = new Promise((resolve) => {
    setTimeout(resolve, durationMs);
  });

  return (promise: Promise<T>) =>
    promise.then((result: T) => {
      return waitForMinLoadingTime.then(() => result);
    });
}
