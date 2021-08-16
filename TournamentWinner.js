function tournamentWinner(competitions, results) {
  const score = {};
	for (let i = 0; i < competitions.length; i++) {
		console.log(score[competitions[i][1]], score, competitions[i][1]);
		if (results[i] === 0) {
			if (score[competitions[i][1]] === undefined) {
				score[competitions[i][1]] = 0;
			}
			score[competitions[i][1]] += 3;
		};
		if (results[i] === 1) {
		  if (score[competitions[i][0]] === undefined) {
				score[competitions[i][0]] = 0;
		}
			score[competitions[i][0]] += 3;
		}
	}
	let topScore = 0;
	let winner = '';
	console.log(score);
	for (const team in score) {
		if (score[team] > topScore) {
			topScore = score[team];
			winner = team;
		}
	}
  return winner;
};

//Time Complexity: O(n)
//Space Complexity: O(k)