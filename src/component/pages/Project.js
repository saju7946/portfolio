
import React from "react";
import ProjectCard from "../page_component/Project_card";
import gyawun from "../../img/project/heart.webp"
import fraud from "../../img/project/fraud.jpg"




function Project() {
    const text1="Developed a heart disease detection model using machine learning techniques, focusing on accurate and real-time prediction. The project involved comprehensive data preprocessing, feature selection, and model evaluation strategies to enhance performance. Various techniques were employed to extract relevant features and improve overall prediction accuracy. The trained model was integrated into a user-friendly interface to facilitate real-time predictions for end-users. The system achieved an impressive accuracy of 95% when tested on real-world datasets. Technologies used include Machine Learning, Keras, and TensorFlow."
    const text2 = "I developed an intelligent Fraud Detection System designed to identify and prevent fraudulent activities in real time. The system uses a combination of machine learning algorithms, statistical analysis, and rule-based logic to analyze transaction patterns, detect anomalies, and flag suspicious behavior. Key features include dynamic risk scoring, real-time alert generation, adaptive learning from new data, and comprehensive reporting tools. The system is scalable, integrates seamlessly with existing workflows, and is built with a strong focus on accuracy, efficiency, and minimizing false positives."
    return (
        <div className="absolute z-20 bg-black w-screen h-screen">
            <div className="w-[95%] m-auto mt-[50px] pt-[100px] h-screen ">
                <div className="text-center mb-[70px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">Projects</h1>

                    <ProjectCard  img={gyawun}  heading={"Heart Disease Detection"} para={text1} github={"https://github.com/saju7946/Heart-Disease-Prediction"} rev={"md:flex-row"}/>
                    <ProjectCard  img={fraud}  heading={"Fraud Detection System"} para={text2} github={"https://github.com/saju7946/Heart-Disease-Prediction"} rev={"md:flex-row-reverse"}/>
                     </div>

            </div>
        </div>
    );
};

export default Project;