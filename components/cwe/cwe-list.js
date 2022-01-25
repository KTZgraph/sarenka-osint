function CWEList(props){
    const {cweList} = props;
    return (
        <div>
            <h1>CWE List</h1>
            {cweList.map(cwe => <h2 key={cwe.id}>{cwe.id}</h2>)}
        </div>
    )
}

export default CWEList;