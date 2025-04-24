
import React from "react";
import ProjectCard from "../page_component/Project_card";
import gyawun from "../../img/project/heart.webp"




function Project() {
    const text1="Developed a heart disease detection model using machine learning techniques, focusing on accurate and real-time prediction. The project involved comprehensive data preprocessing, feature selection, and model evaluation strategies to enhance performance. Various techniques were employed to extract relevant features and improve overall prediction accuracy. The trained model was integrated into a user-friendly interface to facilitate real-time predictions for end-users. The system achieved an impressive accuracy of 95% when tested on real-world datasets. Technologies used include Machine Learning, Keras, and TensorFlow."
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Projects</h1>

                    <ProjectCard  img={gyawun}  heading={"Heart Disease Detection"} para={text1} github={"https://github.com/jhelumcorp/gyawun"} rev={"md:flex-row-reverse"}/>
                     </div>

            </div>
        </div>
    );
};

export default Project;