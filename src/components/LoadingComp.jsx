export default function LoadingComp(props){
    return (
        <>
        {props.isLoading?(<h2>Loading...</h2>):(null)}
        </>
    )
}