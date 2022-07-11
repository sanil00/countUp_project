import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Award from '../component/Award'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`

export interface Props{
   props: {id:string|undefined} 
}

const Home = () => {
    const { id } = useParams();
    
    const [props,setProps] = useState<Props['props']>({id})
        useEffect(()=>{
            setProps({id})
        },[id])
    
    return (
        <Container className="App">
            <Award {...props} />
        </Container>
    )
}

export default Home