import { Videos, ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromApi'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Box } from '@mui/material'

const ChannelDetail = () => {
  const [ChannelDetail, setChannelDetail] = useState(null)

  const { id } = useParams();


  useEffect(() => {
    fetchFromAPI('channels?part="snippet&id=${id}').then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI('search?channelId=${id}&part="snippet&order=date').then((data) => Videos(data?.items));

  }, [id])

  return (
  <Box>
    <Box>
      <div style={{background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%,rgba(0,212,255,1)100%)',
    zIndex:10,
    height:'300px'}}
    />
        <ChannelCard ChannelDetail={ChannelDetail}/>

    </Box>
  </Box>
  )
}

export default ChannelDetail