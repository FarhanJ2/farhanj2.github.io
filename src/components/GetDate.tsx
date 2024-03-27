export default function GetDate() {
    const getDate = () => {
        const date = new Date();
        return date.toDateString();
    }
    
    return (
        <div>
            <h1>{getDate()}</h1>
        </div>
    )
}