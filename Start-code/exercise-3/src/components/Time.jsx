function Time() {
    let time = new Date().toLocaleTimeString();
    return (
        <h2>
            {time}
        </h2>
    );
}

export default Time;