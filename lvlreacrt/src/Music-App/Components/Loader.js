const Loader = ({isLoading,children}) => {
    if(isLoading) return (<div>Is loading...</div>)

    return children;
}

export default Loader;