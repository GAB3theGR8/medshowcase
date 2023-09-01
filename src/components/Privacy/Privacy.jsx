import React, { useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

function Privacy() {
    const [sign, setSign] = useState();
    const [url, setUrl] = useState();
    const [toggleState, setToggleState] = useState('1');
    
    const handleClear = () => {
        sign.clear()
        setUrl('')
        setToggleState('1')
    }

    const handleSave = () => {
        setUrl(sign.getTrimmedCanvas().toDataURL('image/png'))
        setToggleState('2')
    }

  return (
    <div style={{width: "50%"}}>
        <h1>Privacy Agreement</h1>
        <p>By signing this form, you acknowledge receipt of the <i>Notice of Privacy Practices</i> of <b>MEDSTUFF</b>. Our <i>Notice of Privacy Practices</i> provides information about how we may use and disclose your protected health information. We encourage you to read it in full.</p>
        <p>I acknowledge receipt of the <i>Notice of Privacy Practices</i> of MEDSTUFF.</p>
        <img src={url} style={{borderBottom:"1px solid black", width: 300, height: 100, display: toggleState==='1' ? "none" : "block"}} />
        <div style={{border:"2px solid black", width: 300, height: 100, display: toggleState==='2' ? "none" : "block"}}>   
            <SignatureCanvas
                style={{display: "flex", justifyContent: "center"}}
                canvasProps={{width: 300, height: 100, className: 'sigCanvas'}}
                ref={data=>setSign(data)}
            />     
            <button onClick={handleSave}>Save</button>
        </div>
            <button onClick={handleClear} style={{display: toggleState==='1' ? "none" : "block"}}>Clear</button>
      
    </div>
  )
}

export default Privacy
