export default function DataDisplay(props){
    return (
        <div className="datadisplay">
            {
            props.data.map((ele, indx)=>{
                return (
                    <div key={ele.id}>
                        <p>{ele.id}</p>
                        <p>{ele.title}</p>
                    </div>
                );
            })
            }
        </div>
    );
}