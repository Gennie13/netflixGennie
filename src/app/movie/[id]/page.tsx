"use client"
import React, { use, useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Fooder";

interface MovieType {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string
  }
export default function page({params}: {params:Promise<{id:string}>}) {
    const {id}  = use(params);
    const [movie, setMovie] = useState<MovieType | null>(null);
    const [showTrailer, setShowTrailer] = useState(false);
    useEffect(() => {
        if(id){
            const fetchMovie = async () => {
                try{
                    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2ea05c2f444f6fe57492711ba6641efa`);
                    const data = await res.json();
                    setMovie(data);
                } catch (error) {
                    console.error("Error fetching movie:", error);
                }
            }
            fetchMovie();
        }
    },[id])
    if(!movie)
        return (<div>Түр хүлээнэ үү...</div>)

    return (
        <div className="bg-black text-white min-h-screen">
            <Header />
            <div className="relative w-full h-[500px] bg-cover bg-center mt-16" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent p-8 flex flex-col  justify-end">
                    <h1 className="text-5xl font-bold mb-4">{movie.title}</h1>
                    <p className="text-lg max-w-xl">{movie.overview}</p>
                    <div className="mt-4">
                        <Link href={`/movie/${movie.id}`}>
                            <button onClick={()=> setShowTrailer(true)} className="bg-red-600 text-white px-4 py-2 rounded-lg text-lg font-semibold hover:bg-red-700">Үзэх</button>
                        </Link>         
                    </div>
                </div>
            </div>
            {showTrailer && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="relative w-3/4 h-3/4">
                        <iframe width={"100%"} height={"100%"} src={`https://www.youtube.com/embed/gTQ43OYYWHk?si=9pj0w58WTllWFeB9`} title={movie.title} allowFullScreen className="rounded-lg" frameBorder="0" ></iframe>
                        <button onClick={()=>setShowTrailer(false)} className="absolute top-2 right-2 bg-red-600 text-white px-4 py-2 rounded-full">X</button>
                    </div>

                </div>
            )}
            <div className="p-8">
                <p className="w-2/3 text-justify opasity-65">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repellat libero atque maiores modi autem eius doloribus voluptate cumque velit consequatur dolore minus, minima quam perferendis, ea, numquam perspiciatis voluptatum.
                    Sequi illum, exercitationem veniam eveniet esse beatae odit, eius, eaque ullam consequatur doloribus magni minus? Autem, obcaecati numquam! Possimus distinctio quia corporis enim consectetur amet, tempore molestias eligendi molestiae excepturi?
                </p>
            </div>
            <Footer/>

        </div>
    )
}
