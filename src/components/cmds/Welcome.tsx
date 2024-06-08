const Welcome = () => {
    const getDate = () => {
        const date = new Date();
        const options = { hour12: false };
        const time = date.toLocaleTimeString(undefined, options);
        return date.toDateString() + " " + time;
    };

    const getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return (
        <div>
            <h1 className="text-output" id="login-info">
                Last login: {getDate()} on ttys0{getRandom(5, 20)}
            </h1>
            <h1 className="text-output">Welcome to my Profile!</h1>
        </div>
    );
};

export default Welcome;
