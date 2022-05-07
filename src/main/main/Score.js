

const Score = (props) => {

    return (
        <div>
            <h1>Current Score</h1>
            <p>
                Academic Score: {props.academic}<br />
                Fun Score: {props.fun}<br />
                Social Score: {props.social}<br />
            </p>
        </div>
    )
}

export default Score;