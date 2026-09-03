import axios from 'axios';
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const QuestionList: React.FC = () => {

  interface QuestionType {
    by: string
    id: number
    text: string
    time: number
    type: string
    title: string
    score: number
    url: string
  }

  const [loading, setIsLoading] = useState(true)
  const [question, setQuestion] = useState<QuestionType[]>([])

      const fetchData = async () => {
      setIsLoading(true)
      try{
      const ids = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
      const items = await Promise.all(
        ids.data.slice(0, 20).map((id:number) => 
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
      )
    )
    const data = items.map(res => res.data)
    setQuestion(data)
    }catch(error){
    console.log('ошибка', error);
     }finally{
    setIsLoading(false)
  }
    }
  
  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => {
      console.log('Обновление');
      clearInterval(interval)
    }
  }, [])
  
  if(loading){
    return <div className='container'><h1>Loading...</h1></div>
  }

  return (
    <div className='container'>
      <div className='parrent'>
        <div className='back'>
          <Link to={'/'}>
            <button className='btn-refresh'>На главную</button>
          </Link>
        </div>
        <div className='refresh'>
          <button className='btn-refresh' onClick={fetchData}>Обновить</button>
        </div>
      </div>
      <div className='content'>
        {question.map((item) => (
          <Link to={`/question/${item.id}`}>
                    <div className='news'>
          <div className='question'>
            <h3>{item.title}</h3>
          </div>
          <div className='desc'>
            <p>{(item.by).toUpperCase()}</p>
            <span>score: {item.score}🌟</span>
            <p>{new Date(item.time * 1000).toLocaleDateString()}</p>
          </div>
        </div>
          </Link>

          ))}

      </div>
    </div>
  )
}

export default QuestionList