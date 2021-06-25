import React, { useState, useEffect } from 'react'
import Loader from './Components/Loader'
import './Music.css'
import ReactAudioPlayer from 'react-audio-player';

const Music = ({ searchValue }) => {
    const [dataMusic, setDataMusic] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getMusicData();
    }, [searchValue])

    const getMusicData = () => {
        setLoading(true);
        fetch(`https://itunes.apple.com/search?term=${searchValue}`)
            .then(response => response.json())
            .then(dataa => {
                setDataMusic([dataa]);
                console.log(dataa)
            })
            .catch(err => {
                setDataMusic(undefined);
            })
            .finally(() => {
                setLoading(false);
            })

    }
    return (
        <div className="Content">
            <div className="weather-oneday">

                {dataMusic && dataMusic.map(dataa =>
                    <Loader isLoading={loading}>
                        <div key={dataa.id}>

                            <p>{dataa.results[0].artistName}</p>
                            <ReactAudioPlayer
                                src={dataa.results[0].previewUrl}
                                
                                controls
                            />
                            <p>{dataa.results[1].artistName}</p>
                            <ReactAudioPlayer
                                src={dataa.results[1].previewUrl}
                                
                                controls
                            />
                            <p>{dataa.results[2].artistName}</p>
                            <ReactAudioPlayer
                                src={dataa.results[2].previewUrl}
                                
                                controls
                            />
                             <p>{dataa.results[3].artistName}</p>
                            <ReactAudioPlayer
                                src={dataa.results[3].previewUrl}
                                
                                controls
                            />
                            <p>{dataa.results[4].artistName}</p>
                            <ReactAudioPlayer
                                src={dataa.results[4].previewUrl}
                                
                                controls
                            />
                          
                        </div></Loader>
                )

                }

            </div>



        </div>
    )



}
export default Music;