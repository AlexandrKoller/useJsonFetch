import useJsonFetch from "./useJsonFetch";

export default function DataParser ({url}) {
    const [data, loading, error] = useJsonFetch(url)
    if (loading) return (<div>Идет загрузка</div>)
    if (error) return (<div>Ошибка: {error.message}</div>)
    return(<div>Загружено</div>)
}