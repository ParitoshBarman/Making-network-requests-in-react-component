export default function ErrorComp(props){
    return (
        <>
        {props.error?(<p>Finding an Error: {props.error}</p>):(null)}
        </>
    )
}