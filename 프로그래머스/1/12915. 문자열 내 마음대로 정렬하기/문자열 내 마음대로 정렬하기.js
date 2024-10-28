function solution(strings, n) {
  var answer = [];

  // 앞에 글자 붙이기
  var newStrs = strings.map(function (str) {
    return str[n] + str;
  });

  // 정렬
  newStrs.sort();

  // 앞글자 제거 후 리턴
  for (let i = 0; i < newStrs.length; i++) {
    temp = newStrs[i].slice(1);
    answer.push(temp);
  }
  return answer;
}