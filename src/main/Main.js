import Score from "./main/Score"

import {useState} from "react";
const Main = () => {

        const [obj, setObj] = useState({
            academic: 10,
            fun: 10,
            social: 10,
            current: 0,
            previous: [-1,-1]

        })

        const item = [
            {
                prompt: "You just got home from school. What do you do?",
                choices: [
                    {
                        option: "Homework",
                        nextPrompt: 1,
                        scoreChanges: [5, -1, -2],
                        outcome: "After finishing some math homework, you feel confident in the topic!"
                    },
                    {
                        option: "Play Video Games",
                        nextPrompt: 2,
                        scoreChanges: [-2, 5, 2],
                        outcome: "You decide to play video games"
                    }
                ]
            },
            {
                prompt: "Now that all of your homework is done, what would you like to do?",
                choices: [
                    {
                        option: "Study for upcoming Test",
                        nextPrompt: 4,
                        scoreChanges: [3, -2, -5],
                        outcome: "You are very prepared for your math test"
                    },
                    {
                        option: "Go on Social Media",
                        nextPrompt: 5,
                        scoreChanges: [-2, 3, 6],
                        outcome: "You open your phone to use Social Media"
                    }
                ]
            },
            {
                prompt: "What type of game do you want to play?",
                choices: [
                    {
                        option: "First Person Shooter",
                        nextPrompt: 3,
                        scoreChanges: [1, 5, 2],
                        outcome: "You decide to play a First Person Shooter. Your skills at aiming, and fine finger movements help you with writing."
                    },
                    {
                        option: "Frustrating Game",
                        nextPrompt: 1,
                        scoreChanges: [-1, -3, 1],
                        outcome: "You play a very frustrating game, and become so frustrated that you lost the track of time and realize that you have to do homework, however have trouble focusing on it due to the frustration of the game."
                    }
                ]
            },
            {
                prompt: "You played the game for a while, What's next?",
                choices: [
                    {
                        option: "Work on Homework",
                        nextPrompt: 1,
                        scoreChanges: [5, 1, -1],
                        outcome: "After playing your game, you decide to do some writing homework. Since your fine hand movements are in good coordination, you only take a few hours to handwrite an essay."
                    },
                    {
                        option: "Keep Playing games",
                        nextPrompt: 2,
                        scoreChanges: [-1, 7, 0],
                        outcome: "After thinking about what to do, you decide to continue playing video games."
                    }
                ]
            },
            {
                prompt: "As you have finished all of your studying, what's next on your agenda?",
                choices: [
                    {
                        option: "Play a game",
                        nextPrompt: 2,
                        scoreChanges: [2, 3, 3],
                        outcome: "You decide to play video games"
                    },
                    {
                        option: "Go on Social Media",
                        nextPrompt: 5,
                        scoreChanges: [0, 3, 5],
                        outcome: "You open your phone and go on your favorite Social Media application."
                    }
                ]
            },
            {
                prompt: "Someone sends you a Direct Message",
                choices: [
                    {
                        option: "Say Hello!",
                        nextPrompt: 6,
                        scoreChanges: [0, 3, 3],
                        outcome: "You send them a nice message back saying Hello!"
                    },
                    {
                        option: "Ignore them",
                        nextPrompt: 11,
                        scoreChanges: [0, 3, 5],
                        outcome: "You decide that they aren't worth your time."
                    }
                ]
            },
            {
                prompt: "The person who just messaged you immediately asks to be friends. How do you respond?",
                choices: [
                    {
                        option: "Yes",
                        nextPrompt: 7,
                        scoreChanges: [0, 4, 5],
                        outcome: "You are now friends!"
                    },
                    {
                        option: "No",
                        nextPrompt: 11,
                        scoreChanges: [0, 2, 1],
                        outcome: "You decide that they aren't worth your time."
                    }
                ]
            },
            {
                prompt: "You find out that your friend is in a pickle, and asks you for $2.50 to buy a membership to a game. What do you do?",
                choices: [
                    {
                        option: "Fork it over",
                        nextPrompt: 8,
                        scoreChanges: [-5, 2, 4],
                        outcome: "You give them $2.50"
                    },
                    {
                        option: "Refuse",
                        nextPrompt: 11,
                        scoreChanges: [0, 0, -3],
                        outcome: "You decide that you don't know them well enough to give them the money"
                    }
                ]
            },
            {
                prompt: "Your new friend sends you a computer program that will give you unlimited money in a game",
                choices: [
                    {
                        option: "Do it.",
                        nextPrompt: 9,
                        scoreChanges: [0, -1, 5],
                        outcome: "You download the illicit program"
                    },
                    {
                        option: "Refuse",
                        nextPrompt: 11,
                        scoreChanges: [0, 0, -3],
                        outcome: "You are smart enough to realize that you are being scammed."
                    }
                ]
            },
            {
                prompt: "Your friend introduces you to his friend group",
                choices: [
                    {
                        option: "Be friendly",
                        nextPrompt: 10,
                        scoreChanges: [0, -1, 5],
                        outcome: "You very kindly meet his friends"
                    },
                    {
                        option: "Call Sick",
                        nextPrompt: 11,
                        scoreChanges: [0, 0, -4],
                        outcome: "You pretend that you are sick, so you can do other greater things."
                    }
                ]
            },
            {
                prompt: "Your newfound best friend and company decide to play a multiplayer game (with a hacked client)",
                choices: [
                    {
                        option: "Go all in!",
                        nextPrompt: 7,
                        scoreChanges: [0, -1, 5],
                        outcome: "You all play the game for a few hours, beating everyone with your hacked client to eventually end up getting banned from the game."
                    },
                    {
                        option: "Leave",
                        nextPrompt: 11,
                        scoreChanges: [0, 0, -5],
                        outcome: "You like playing games the fun way, so you do it legitimately."
                    }
                ]
            },
            {
                prompt: "This person gets very upset with you",
                choices: [
                    {
                        option: "Get upset",
                        nextPrompt: 12,
                        scoreChanges: [0, -10, 2],
                        outcome: "You get very upset, and eventually become increasingly frustrated and completely unproductive."
                    },
                    {
                        option: "Take a break from the internet",
                        nextPrompt: 12,
                        scoreChanges: [2, 3, -1],
                        outcome: "You realize the situation, and take a break from the internet."
                    }
                ]
            },
            {
                prompt: "Finished! Look at your score to see how you did!",
                choices: [
                    {
                        option: "Finish",
                        nextPrompt: -1,
                        scoreChanges: [0, 0, 0],
                        outcome: ""
                    },
                    {
                        option: "Complete",
                        nextPrompt: -1,
                        scoreChanges: [0, 0, 0],
                        outcome: ""
                    }
                ]
            }

        ]

        const previousF = (n) => {
            console.log(n[0] + " " + n[1])
            if (n[0] === -1) return (<div><h3>New Game!</h3></div>)
    
            var message = item[n[0]].choices[n[1]].outcome;
    
            return (<div>
                <h1>Previous Outcome</h1>
                <p>{message}</p>
            </div>)
        }

    return (
        <div style={{padding: '5%', textAlign: 'center'}}>
            <Score academic={obj.academic} fun={obj.fun} social={obj.social}/>
            {previousF(obj.previous)}
            <div style={{padding: '5%', textAlign: 'center'}}>
                <h1>Prompt</h1>
                <p>{item[obj.current].prompt}</p>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6"><button className="btn btn-primary" type="button" style={{width: '100%'}} onClick={() => {
                            console.log(item[obj.current].choices[0].nextPrompt)
                            if (item[obj.current].choices[0].nextPrompt === -1) {
                                setObj({
                                    academic: 10,
                                    fun: 10,
                                    social: 10,
                                    current: 0,
                                    previous: [-1,-1]
                        
                                })
                                return;
                            }
                            var previous = [obj.current, 0]
                            var academic = obj.academic + item[obj.current].choices[0].scoreChanges[0]
                            var fun = obj.fun + item[obj.current].choices[0].scoreChanges[1]
                            var social = obj.social + item[obj.current].choices[0].scoreChanges[2]
                            var current = item[obj.current].choices[0].nextPrompt

                            setObj({
                                academic: academic,
                                fun: fun,
                                social: social,
                                current: current,
                                previous: previous
                            })
                        }}>
                        {item[obj.current].choices[0].option}
                        </button></div>
                        <div className="col-md-6"><button className="btn btn-primary" type="button" style={{width: '100%'}} onClick={() => {
                            if (item[obj.current].choices[0].nextPrompt === -1) {
                                setObj({
                                    academic: 10,
                                    fun: 10,
                                    social: 10,
                                    current: 0,
                                    previous: [-1,-1]
                        
                                })
                                return;
                            }
                            var previous = [obj.current, 1]
                            var academic = obj.academic + item[obj.current].choices[1].scoreChanges[0]
                            var fun = obj.fun + item[obj.current].choices[1].scoreChanges[1]
                            var social = obj.social + item[obj.current].choices[1].scoreChanges[2]
                            var current = item[obj.current].choices[1].nextPrompt

                            setObj({
                                academic: academic,
                                fun: fun,
                                social: social,
                                current: current,
                                previous: previous
                            })
                        }}>
                        {item[obj.current].choices[1].option}
                        </button></div>
                    </div>
                </div>
            </div>
        </div>
    )


}

export default Main;