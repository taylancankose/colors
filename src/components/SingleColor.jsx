import {useState, useEffect} from 'react'
import rgbToHex from './rgbToHex'


function SingleColor({weight, rgb, type}) {
    const [copy, setCopy] = useState(false)
    const bcg = rgb.join(',')
    const hexColor = rgbToHex(...rgb)

    const copyEvent = () => {
        navigator.clipboard.writeText(hexColor)
        setCopy(true)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopy(false)
        }, 2000)
        return () => clearTimeout(timer)
    }, [copy])

    return (
        <article onClick={copyEvent} className={`${type === 'base' || type === 'shade' ? 'color-light' : ""}`} style={{backgroundColor:`rgb(${bcg})`}}>
        <p className='percent-value'>{weight}%</p> 
        <p className='color-value'>{hexColor}</p>
        {copy && <p>Copied successfully...</p>}
        </article>
  )
}

export default SingleColor;