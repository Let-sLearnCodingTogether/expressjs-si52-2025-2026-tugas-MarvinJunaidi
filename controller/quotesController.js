import { response } from "express";
import quotesModel from "../model/quotesModel.js";

export const createNewAkun= async (req, res) => {
try {
    const request = req.body
    console.log(request);
    const response = await quotesModel.create({
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

export const listAkun = async (req, res) => {
    try {
        const data = await quotesModel.find({})

        res.status(200).json({
            message : "List Akun",
            data : data
        })
        
    } catch (error) {
        res.status(500).json({
        message : error,
        data : null
    })
    }
}

export const updateAkun = async (req, res) => {
    try {
        const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
        message : "Id wajib di isi",
        data : null
    })
        }
    const response = await quotesModel.findByIdAndUpdate(id, {
        quote : request.quote,
        author : request.author,
        category : request.category
    }) 
    
    if(!response){
        return res.status(500).json({
        message : "Akun gagal diupdate",
        data : null
    })
    }
    return res.status(200).json({
        message : "Akun Berhasil diupdate",
        data : null
    })
    } catch (error) {
        res.status(500).json({
        message : error,
        data : null
    })
    }
}

export const deleteAkun = async (req, res) => {
    try {
        const id = req.params.id
        
        if(!id){
        return res.status(500).json({
        message : "Id wajib di isi",
        data :null
    })
        }

    const response = await quotesModel.findByIdAndDelete(id)

    if (response){
        return res.status(200).json({
        message : "Akun berhasil dihapus",
        data : null
    })
    }

    return res.status(404).json({
        message : "Akun tidak ditemukan",
        data : null
    })
    } catch (error) {
        res.status(500).json({
        message : error,
        data : null
    })
    }
}