import React from 'react' ;

function CreateUser({ username, email, onChange, onCreate, onReset, setRef }) {
    return (
        <div>
            <input 
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
                ref={setRef}
            />
            <input 
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>등록</button>
            <button onClick={onReset}>초기화</button>
        </div>
    ) ;
}

export default CreateUser ;