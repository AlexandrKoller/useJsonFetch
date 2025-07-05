import DataParser from "./DataParser"

export default function App() {
    const urlData = 'http://localhost:7070/data'
    const urlLoading = 'http://localhost:7070/loading'
    const urlError = 'http://localhost:7070/error'
    return ( <div>
            <DataParser url={urlData}/>
            <DataParser url={urlLoading}/>
            <DataParser url={urlError}/>
        </div>)
}