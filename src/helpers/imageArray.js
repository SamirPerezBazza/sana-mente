import React from 'react'
import AngrySvg from '../assets/svgs/angry'
import HappySvg from '../assets/svgs/happy'
import SadSvg from '../assets/svgs/sad'
import SuprisedSvg from '../assets/svgs/suprised'
import WorriedSvg from '../assets/svgs/worried'

export const images = [
  {
    name: 'happy',
    image: <HappySvg />,
  },
  {
    name: 'sad',
    image: <SadSvg />,
  },
  {
    name: 'suprised',
    image: <SuprisedSvg />
  },
  {
    name: 'angry',
    image: <AngrySvg />
  },
  {
    name: 'worried',
    image: <WorriedSvg />
  },
]