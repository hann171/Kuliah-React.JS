import React, {useState} from 'react'
import TampilComp from './TampilComp';

const HooksComp = () => {
    const [jumlah, tambahJumlah] = useState(0)

    const [dataLogin, setDataLogin] = useState({username:'han', token:'123', isLogin: false})

    //cek status login
    let tampil;
    if(dataLogin.isLogin){
        tampil = <TampilComp
                    username = {dataLogin.username}
                    fungsi = {tambahJumlah.bind(this)}
                    jumlah = {jumlah}/>
    }
    else{
        tampil = <TampilComp username="Maaf anda belum login" disabled= {true} />
    }

    return (
        <div>
            {tampil}
        </div>
    )
}
export default HooksComp;