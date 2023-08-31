import { useState } from "react"
import logo from "./images/logo.svg"
import paper from "./images/Paper.png"
import scissors from "./images/Scissors.png"
import rock from "./images/Rock.png"

const App = () => {
	const [active, setActive] = useState(false)
	const [contest, setContest] = useState(true)
	const [userImg, setUserImg] = useState("")
	const [compImg, setCompImg] = useState("")
	const [decision, setDecision] = useState("")
	const [score, setScore] = useState(0)

	const pickUserHand = (type: any) => {
		setActive(true)
		setContest(false)
		setUserImg(type)
		pickComputerHand(type)
		
	}

	const pickComputerHand = (hand: any) => {
		let hands = [rock, paper, scissors]
		let cpHand: any = hands[Math.floor(Math.random() * hands.length)]

		setCompImg(cpHand)
		referee(hand, cpHand)
	}

	const referee = (userHand: any, cpHand: any) => {
		if (userHand == paper && cpHand == scissors) {
			setDecision("YOU LOSE!")
		}
		if (userHand == paper && cpHand == rock) {
			setDecision("YOU WIN!")
			setScore(score + 1)
		}
		if (userHand == paper && cpHand == paper) {
			setDecision("It's a tie!");
		}
		if (userHand == rock && cpHand == scissors) {
			setDecision("YOU WIN!");
			setScore(score + 1);
		}
		if (userHand == rock && cpHand == paper) {
			setDecision("YOU LOSE!");
		}
		if (userHand == rock && cpHand == rock) {
			setDecision("It's a tie!");
		}
		if (userHand == scissors && cpHand == scissors) {
			setDecision("It's a tie!");
		}
		if (userHand == scissors && cpHand == rock) {
			setDecision("YOU LOSE!");
		}
		if (userHand == scissors && cpHand == paper) {
			setDecision("YOU WIN!");
			setScore(score + 1);
		}
	}

	const restartGame = () => {
		setContest(true)
		setActive(false)
	}
	

	return (
		<>
			<div className="wrapper">
				<div className="scoreboard">
					<div className="title">
						<img src={logo} alt="" />
					</div>
					<div className="score">
						<p>SCORE</p>
						<h1>{score}</h1>
					</div>
				</div>
				<div className={`${active ? "active" : "flex"} hands`}>
					<div className="hand paper">
						<img onClick={() => {pickUserHand(paper)}} src={paper} alt="" />
					</div>
					<div className="hand scissors">
						<img onClick={() => {pickUserHand(scissors)}} src={scissors} alt="" />
					</div>
					<div className="hand rock">
						<img onClick={() => {pickUserHand(rock)}} src={rock} alt="" />
					</div>
				</div>
				<div className={`${contest ? "" : "active"} contest`}>
					<div className="userhand">
						<h1>YOU</h1>
						<div className="handleImageContainer">
							<img src={userImg} alt="" />
						</div>
					</div>
					<div className="referee">
						<div className="decision"><h1>{decision}</h1></div>
						<div onClick={restartGame} className="newGame cursor-pointer">PLAY AGAIN</div>
					</div>
					<div className="computerhand">
						<h1>COMPUTER</h1>
						<div className="handImageContainer">
							<img src={compImg} alt="" />
						</div>
					</div>
				</div>
			</div>	
		</>
	)
}

export default App