import useJsonFetch from "./useJsonFetch"

export default function App() {
    const urlData = 'http://localhost:7070/data'
    const urlLoading = 'http://localhost:7070/loading'
    const urlError = 'http://localhost:7070/error'
    const [data, loading, error] = useJsonFetch(urlData)
    const [data1, loading1, error1] = useJsonFetch(urlLoading)
    const [data2, loading2, error2] = useJsonFetch(urlError)
    console.log(data, loading, error, 'данные')
    console.log(data1, loading1, error1, 'Загрузка')
    console.log(data2, loading2, error2, 'Ошибка')
}