import { response } from "express";
import QuotesModel from "../model/quotesModel";

export const createNewAkun= async (req, res) => {
try {
    const request = req.body
    console.log(request);
    const response = await QuotesModel.create({
        quote : request.quote,
        author : request.author,
        category : request.category
    })

    res.status(201).json({
        message : "Akun berhasil di buat",
        data : response
    })
} catch (error) {   
    res.status(500).json({
        message : error,
        data : null
    })
}
}

export const listMahasiswa = async (req, res) => {
    try {
        const data = await mahasiswaModel.find({})

        res.status(200).json({
            message : "List mahasiswa",
            data : data
        })
        
    } catch (error) {
        res.status(500).json({
        message : error,
        data : null
    })
    }
}

export const updateMahasiswa = async (req, res) => {
    try {
        const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
        message : "Id wajib di isi",
        data : null
    })
        }
    const response = await mahasiswaModel.findByIdAndUpdate(id, {
        nama : request.nama,
        npm : request.npm,
        jurusan : request.jurusan
    }) 
    
    if(!response){
        return res.status(500).json({
        message : "Mahasiswa gagal diupdate",
        data : null
    })
    }
    return res.status(200).json({
        message : "Mahasiswa Berhasil diupdate",
        data : null
    })
    } catch (error) {
        res.status(500).json({
        message : error,
        data : null
    })
    }
}

export const deleteMahasiswa = async (req, res) => {
    try {
        const id = req.params.id
        
        if(!id){
        return res.status(500).json({
        message : "Id wajib di isi",
        data :null
    })
        }

    const response = await mahasiswaModel.findByIdAndDelete(id)

    if (response){
        return res.status(200).json({
        message : "Message berhasil dihapus",
        data : null
    })
    }

    return res.status(404).json({
        message : "Message tidak ditemukan",
        data : null
    })
    } catch (error) {
        res.status(500).json({
        message : error,
        data : null
    })
    }
}