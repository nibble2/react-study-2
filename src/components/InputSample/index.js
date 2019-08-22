import React, { useState, useRef } from 'react' ;

function InputsSample() {
    const [ inputs, setInputs ] = useState({
        myName: '',
        nickName: ''
    }) ;

    const nameInput = useRef() ;

    const { myName, nickName } = inputs ;

    const onChange = e => {
        const { value, name } = e.target ;
        setInputs({
            ...inputs,
            [name]: value,
        }) ;
    }

    const onReset = () => {
        setInputs({
            myName: '',
            nickName: ''
        }) ;
        nameInput.current.focus() ;
    } ;

    return (
        <div>
            <input name="myName" placeholder="이름" onChange={onChange} value={myName} ref={nameInput} />
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b> 값: {myName}({nickName})</b>
            </div>
        </div>
    ) ;
}

export default InputsSample ;