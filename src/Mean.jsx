import { useState, useEffect } from 'react'
import { WebR } from '@r-wasm/webr';

function Mean(props) {
  const { webR, numbers} = props

  const [ result, updateResult ] = useState(['Loading webR...']);
  
  useEffect(() => {
    async function runRCode() {
      await webR.init();
      console.log()
      const rnorm = await webR.evalR(`rnorm(${numbers})`);
      try {
        const result = await rnorm.toArray();
        updateResult(result);
      } finally {
        webR.destroy(rnorm);
      }
    }
    runRCode();
  }, []);

  return (
    <div>
      <p>Mean: {result}</p>
    </div>
  )
}

export default Mean
