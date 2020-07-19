import React, { useEffect, useState } from 'react'
import { Container, Button, Alert, Table } from 'reactstrap'
import axios from 'axios'

const api = 'http://localhost:3001'

export default function HooksUseEffect() {

    const [mahasiswa, setMahasiswa] = useState([])

    useEffect(() => {
        console.log("Memanggil Use Effect")
        axios.get(api + '/tampil').then(res => {
            setMahasiswa(res.data.values)
        })
    }, [])


    return (
        <Container>
            <h2>Data Mahasiswa</h2>
            <navlink><Button color="success" href="/mahasiswa/tambah">Tambah Data</Button></navlink>
            <hr />
            <Table className="table-bordered">
                <thead>
                    <tr>
                        <th>NIM</th>
                        <th>Nama</th>
                        <th>Jurusan</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {mahasiswa.map(mahasiswa =>
                        <tr key={mahasiswa.id_mahasiswa}>
                            <td>{mahasiswa.nim}</td>
                            <td>{mahasiswa.nama}</td>
                            <td>{mahasiswa.jurusan}</td>
                            <td>
                                <Button onClick={() => this.delMahasiswa(mahasiswa.id_mahasiswa)} color="danger">Hapus</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    )
}