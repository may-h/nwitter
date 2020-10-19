function solution(numbers, target) {
  let answer = 0;
  dfs(0);

  /*
    numbers 배열의 인덱스를 순차적으로 돌면서 +1, -1을 반복한다. 
    트리 구조를 생각했을 때, 왼쪽은 +1, 오른쪽은 -1 연산을 한다고 생각하면 된다. 
    DFS ,  BFS의 개념은 아래 링크를 참조하자. 
  */

  function dfs(k) {
    if (k === numbers.length) {
      let sum = 0;
      for (let i = 0; i < numbers.length; i++) sum += numbers[i];

      if (sum === target) answer++;
    } else {
      numbers[k] *= 1;
      dfs(k + 1);

      numbers[k] *= -1;
      dfs(k + 1);
    }
  }

  return answer;
}
