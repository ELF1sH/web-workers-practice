/* eslint-disable no-restricted-globals */
self.addEventListener('message', (e) => {
  let arr = new Int32Array(e.data);

  console.group('[the worker thread]');
  console.log('Data received from the main thread: %i', arr[0]);
  console.groupEnd();

  postMessage('Updated');
})

export {};
