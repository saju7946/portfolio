
import React from "react";
import ProjectCard from "../page_component/Project_card";
import img1 from "../../img/Coursera.jpg"




function Certificates() {
    const text1 = <><p>In this course, I gained a solid understanding of fundamental algorithmic techniques, with a strong focus on the divide and conquer paradigm. I learned how to break complex problems into simpler subproblems, solve them recursively, and combine the solutions efficiently. I explored classic algorithms such as merge sort, quicksort, and binary search, analyzing their time complexities using techniques like the master method and recurrence relations.</p><p>I also developed an appreciation for randomized algorithms, including randomized quicksort and QuickSelect, learning how randomization can lead to simpler and often faster solutions in practice. Additionally, I applied these algorithms to real-world problems like closest pair of points and integer multiplication, enhancing my skills in both algorithm design and mathematical analysis.</p><p>By completing the course, I improved my ability to design efficient algorithms, reason about their performance, and apply them to both theoretical and practical problems—an essential foundation for advanced computer science studies and technical interviews."</p></>
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Certificates</h1>

                    <ProjectCard 
                     img={img1} 
                     para={text1}
                     heading={"Divide and Conqu er, Sorting and Searching, and Randomized Algorithms"} 
                     rev={"md:flex-row"}/>
                </div>

            </div>
        </div>
    );
};

export default Certificates;