import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import AwardProps from '../../types/AwardProps'
import Award from './Award'
import Slider from './Slider'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;
  height:100%;
`


const Home = () => {
    const { id } = useParams();
    
    const [props,setProps] = useState<AwardProps['props']>({id})
        useEffect(()=>{
            setProps({id})
        },[id])
    
    return (
        <Container className="App">
            <Slider/>
            <Award {...props} />
        </Container> 
    )
}

export default Home