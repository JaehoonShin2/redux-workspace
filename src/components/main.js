import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Main(){

    // 요청받은 정보를 담아줄 변수 선언
  const [ testStr, setTestStr ] = useState('');

  // 변수 초기화
  function callback(str) {
    setTestStr(str);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(
      () => {
        axios({
            url: '/home',
            method: 'GET'
        }).then((res) => {
            callback(res.data);
        })
      }, []
  );

  function tf(str){
    if(str.testStr === "NNNNY"){
        return (<h1>안녕하세요 반갑습니다.</h1>);
    } else {
        return (<h1>또 뵙네요. 잘 부탁드려요</h1>);
    }
  }

  return (
    <div className="App">
        <header className="App-header">
            {tf({testStr})};
        </header>
    </div>
);

}


export default Main;