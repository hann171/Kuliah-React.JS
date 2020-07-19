import React, {useEffect,useState} from 'react'
import {Container} from 'reactstrap'

export default function HooksUseEffect() {
    
    const[namaLengkap, setNamaLengkap] = useState({nama:'Han', marga:'Wijaya'})

    useEffect(()=>{
        console.log("Memanggil Use Effect")
        setNamaLengkap({nama:'Hengky',marga:'han'})
    },[])
    
    return (
        <Container>
            <h3>Profile User</h3>
            <h4>Nama  : {namaLengkap.nama}</h4>
            <h4>Marga : {namaLengkap.marga}</h4>
        </Container>
    )
}
