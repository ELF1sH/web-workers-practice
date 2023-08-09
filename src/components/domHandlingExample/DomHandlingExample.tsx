import React from 'react';
import {Button} from "react-bootstrap";
import {generateRandomInt} from "../../utils/random/generateRandomInt";

const DomHandlingExample: React.FC = () => {
  const onClick = () => {
    const canvasWrapper = document.getElementById('canvas-wrapper');

    const id = generateRandomInt(1, 10000000);
    canvasWrapper!.insertAdjacentHTML('beforeend', `<canvas id=${id} class="border" />`);

    const worker = new Worker(new URL("./workers/canvasAnimationWebWorker.ts", import.meta.url));

    const canvasTransfer = (document!.getElementById(id.toString()) as HTMLCanvasElement).transferControlToOffscreen();

    if (canvasTransfer) {
      worker.postMessage({ canvas: canvasTransfer }, [canvasTransfer]);
    }
  }

  return (
    <div className="d-flex flex-column align-items-baseline gap-2">
      <div id="canvas-wrapper"></div>
      <Button onClick={onClick}>Run animation</Button>
    </div>
  );
};

export default DomHandlingExample;
