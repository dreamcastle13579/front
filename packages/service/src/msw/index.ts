const initMockApi = async () => {
  const { createWorker } = await import("./browser");

  const worker = await createWorker();
  await worker.start();
};

export default initMockApi;
