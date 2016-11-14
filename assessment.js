(function () {
    'use strict'
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    function removeAllChildren(element){
        while(element.firstChild){
            element.removeChild(element.firstChild);
        }
    }
    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0) {
            return;
        }

        removeAllChildren(resultDivided);
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);

        removeAllChildren(tweetDivided);
        const paragraph = document.createElement('p');
        const result = assessment(userName);
        paragraph.innerText = result;
        resultDivided.appendChild(paragraph);

    }
    const answers = [
        '{userName}のいいところは声です。',
        '{userName}のいいところはまなざしです。',
        '{userName}のいいところは情熱です。',
        '{userName}のいいところは厳しさです。',
        '{userName}のいいところは知識です。',
        '{userName}のいいところはです。',
        '{userName}のいいところは感受性です。',
        '{userName}のいいところは向上心です。',
        '{userName}のいいところはやさしさです。',
        '{userName}のいいところは義侠心です。',
        '{userName}のいいところは用心深さです。',
        '{userName}のいいところは繊細さです。',
        '{userName}のいいところは豪快さです。',
        '{userName}のいいところは見た目です。',
        '{userName}のいいところはお金持ちであることです。',
        '{userName}のいいところはありません。'
    ];

    /**
* 名前の文字列を渡すと診断結果を返す関数
* @param {string} userName ユーザーの名前
* @return {string} 診断結果
*/
    function assessment(userName) {
        let sumOfcharCode = 0;
        for (let i = 0; i < userName.length; i++) {
            sumOfcharCode = sumOfcharCode + userName.charCodeAt(i);
        }
        const index = sumOfcharCode % answers.length;
        let result = answers[index];
        result = result.replace(/\{userName\}/g, userName);
        return result;
    }
    console.assert(
        assessment('太郎') === assessment('太郎'),
        '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
})();
