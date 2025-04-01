"use server"
import React from "react"
import axios from "axios"

export async function getAllMovies() {
    try{
        const res = await axios.get(`${process.env.API_URL_WTH_KEY}`)
        const result = res.data;
        return result;
    } catch (error) {
        console.error("Error fetching movies:", error);
        return {data:[]};
    }
}