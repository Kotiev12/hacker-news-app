import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const FullQuestion: React.FC = () => {
  const [question, setQuestion] = useState<{
    by: string
    id: number
    text: string
    time: number
    type: string
    title: string
    score: number
    url: string
  }>()
  
  const {id} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchQuestion(){
      try{
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        setQuestion(response.data)

        } catch(error){
        alert('ошибка при загрузке вопроса')
        navigate('/')
      }
    } 

    if(id){
      fetchQuestion();
    }
  }, [id, navigate])

  if(!question){
    return (
      <>
      <Header />
      <div className='container'><h1>Loading...</h1></div>
      </>
    )
  }

  return (
    <>
    <Header />

    <div className='container'>
      <div className='content'>
        <div className='description'>
           <div className='question'>
                <h3>{question.title}</h3>
              </div>
              <div className='link'>
                <p>Link:</p>
               <a href={question.url}>{question.url}</a>
              </div>
              <div className='desc'>
                <p className='author'>{(question.by).toUpperCase()}</p>
                <span>score: {question.score}🌟</span>
                <p>{new Date(question.time * 1000).toLocaleDateString()}</p>
              </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default FullQuestion