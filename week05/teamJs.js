let counter = 0;

		function game(event) {
		  const target = event.target;
		  counter++;
		if(target.innerHTML == ""){
		  switch (counter % 2) {
			case 0:
			  target.innerHTML = "O";
			  target.style.color = "#f7a307";
			  break;
			case 1:
			  target.innerHTML = "X";
			  target.style.color = "#130269";
			  break;
		  }
		}
		  for (i = 0; i < 3; i++) {
						if ((document.getElementById(i).innerHTML == "X") && 
                        (document.getElementById(i + 3).innerHTML == 'X') && 
                        (document.getElementById(i + 6).innerHTML == 'X')) {
						const winner = alert("X Wins");
						document.getElementById("winner").innerText = winner;
					}
				}

		for (i = 0; i < 3; i++) {
						if ((document.getElementById(i).innerHTML == "O") && 
                        (document.getElementById(i + 3).innerHTML == 'O') && 
                        (document.getElementById(i + 6).innerHTML == 'O')) {
                            const winner = alert("O Wins");
                            document.getElementById("winner").innerText = winner;
					}
				}

		for (i = 0; i < 9; i += 3) {
						if ((document.getElementById(i).innerHTML == "X") && 
                        (document.getElementById(i + 1).innerHTML == 'X') && 
                        (document.getElementById(i + 2).innerHTML == 'X')) {
                            const winner = alert("X Wins");
                            document.getElementById("winner").innerText = winner;
					}
				}

		for (i = 0; i < 9; i += 3) {
						if ((document.getElementById(i).innerHTML == "O") && 
                        (document.getElementById(i + 1).innerHTML == 'O') && 
                        (document.getElementById(i + 2).innerHTML == 'O')) {
                            const winner = ("O Wins");
                            document.getElementById("winner").innerText = winner;
					}
				}

		if ((document.getElementById(0).innerHTML == "X") && 
        (document.getElementById(4).innerHTML == 'X') && 
        (document.getElementById(8).innerHTML == 'X')) {
			const winner = alert("X Wins");
				document.getElementById("winner").innerText = winner;
		}

		if ((document.getElementById(2).innerHTML == "X") &&
         (document.getElementById(4).innerHTML == 'X') && 
         (document.getElementById(6).innerHTML == 'X')) {
			const winner = alert("X Wins");
			document.getElementById("winner").innerText = winner;
		}

		if ((document.getElementById(0).innerHTML == "O") && 
        (document.getElementById(4).innerHTML == 'O') && 
        (document.getElementById(8).innerHTML == 'O')) {
			const winner = alert("O Wins");
			document.getElementById("winner").innerText = winner;
		}

		if ((document.getElementById(2).innerHTML == "O") && 
        (document.getElementById(4).innerHTML == 'O') && 
        (document.getElementById(6).innerHTML == 'O')) {
			const winner = alert("O Wins");
			document.getElementById("winner").innerText = winner;
		}

		}

		function reset() {
		  counter = 0;
		  for (let i = 0; i < 9; i++) {
			const cleared = "";
			const initText = "No Winner Yet";
			const square = document.getElementById(i);
			const winner = document.getElementById('winner');
			square.innerText = cleared;
			winner.innerText = initText;
		  }
		}