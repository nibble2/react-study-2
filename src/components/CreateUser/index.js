import React from 'react' ;

function CreateUser({ username, email, onChange, onCreate, onReset, setRef }) {
    return (
        <div>
            <input name="username" value={username} placeholder="계정" onChange={onChange} ref={setRef} />
            <input name="email" value={email} placeholder="이메일" onChange={onChange} />
            <button onClick={onCreate}>등록</button>
            <button onClick={onReset}>초기화</button>
        </div>
    ) ;
}

export default React.memo(CreateUser) ;