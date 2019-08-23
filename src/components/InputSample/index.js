import React, { useState } from 'react' ;

function InputSample() {
    const [ input, setInput ] = useState('') ;

    const onChange = e => {
        setInput(e.target.value) ;
    } ;
    return (
        <div>
            <input name="input" placeholder="아무거나 입력" onChange={onChange}/>
            <div>
                <b> 값: {input} </b>
            </div>
        </div>
    ) ;
}

export default InputSample ;