import React from "react";

import m5 from "../../img/m5.jpg";
import resume from "../../assest/Resume/resume.pdf";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faCode, faDatabase, faGears, faServer, faUpDownLeftRight,faChartLine } from "@fortawesome/free-solid-svg-icons";
import ServiceCom from "../page_component/Service_page.js";
import { Link } from "react-router-dom";


function About() {
    return (
        <div className="absolute bg-black z-20 w-screen">
            <div className="w-[90%] md:w-[80%] m-auto my-[10px] pt-[100px] px-2 ">
                <div className="text-center mb-[40px]">
                    <h1 className="text-[46px] mb-[37px] font-bold">About Me</h1>
                </div>
                <div className="flex g-4 flex-col md:flex-col lg:flex-row justify-between mb-[90px]">
                    <div className=" w-[100%] lg:w-[100rem] md:w-[100%] mr-4  pt-3">
                        <img className=" rounded-full w-full  removeb" src={m5} alt="" />
                    </div>
                    <div className="">
                        <h2 className=" text-[25px] mb-4 font-bold text-[#009e66]">Who am I?</h2>
                        <p className="text-[27px] font-bold ">I'm Sajad Hussain Bhat,  a ML/AI Engineer & Software Engineer </p>
                        <p className="text-[15px] text-[#9f9f9f] py-2"> Results-driven Machine Learning Engineer based in India with a passion for designing and deploying intelligent systems that drive real‑world impact. Adept at building end‑to‑end ML pipelines—from data collection and preprocessing to model training, evaluation, and production deployment. Proficient in Python and libraries such as TensorFlow, PyTorch, and scikit‑learn, with hands‑on experience in NLP, computer vision, and recommender systems. Strong foundation in data engineering (Pandas, SQL) and cloud platforms (AWS SageMaker, GCP AI Platform), complemented by containerization (Docker) and orchestration (Kubernetes) best practices. Collaborative team player who thrives in agile environments, delivering scalable, maintainable solutions that turn complex data into actionable insights.</p>
                        <div className="mt-4">
                            <div className="flex flex-col md:flex-row lg:flex-row about_content py-4">
                                <div className="w-full">
                                    <p className="py-2 w-max">Name: <span>Sajad Hussain Bhat</span></p>
                                    <p className="py-2 w-max">Age: <span>24</span></p>
                                </div>
                                <div className="w-[100%]">
                                    <p className="py-2 w-max">Email: <span><Link to="mailto:sajuhussain42722@gmail.com"  className="text-[#009e66]">sajuhussain42722@gmail.com</Link></span></p>
                                    <p className="py-2 w-max">From: <span>J&K,India</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row mt-4">
                            <div>
                                <a href={resume} download><button className="btn p-3 px-7 ">Downlode CV</button></a>
                            </div>

                            <div className="social_btn pt-7 md:p-3">
                                <a href="https://github.com/saju7946" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                                <a href="https://www.linkedin.com/in/sajad-hussain-032801338" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} className="px-2 text-xl hover_social  hover:text-[#009e66]" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-[100px]">My Services</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 ">
                        <ServiceCom 
                        name="ML Trends"
                        para="Staying ahead of cutting‑edge advancements like AutoML for automated model selection and hyperparameter tuning, Explainable AI (XAI) to make models interpretable, and a shift toward on‑device inference for low‑latency, privacy‑preserving applications.."
                        icon={faChartLine}
                        />
                         <ServiceCom 
                        name="Scalable Pipelines"
                        para="Designing fully automated, end‑to‑end ML pipelines using tools like Apache Airflow or Kubeflow, ensuring data ingestion, preprocessing, training, and monitoring stages adapt seamlessly to growing datasets and concurrent workloads."
                        icon={faUpDownLeftRight}
                        />
                         <ServiceCom 
                        name="Model Optimization"
                        para="Expertise in model compression techniques (quantization, pruning), knowledge distillation, and advanced hyperparameter search (Bayesian optimization, population‑based training) to deliver performant models under resource constraints."
                        icon={faGears}
                        />
                         <ServiceCom 
                        name="Deployment & Serving"
                        para="Building and containerizing ML services with Docker, orchestrating with Kubernetes, and deploying on cloud‑native platforms (AWS SageMaker, GCP AI Platform, Azure ML) or serverless infrastructures for scalable, reliable inference endpoints."
                        icon={faCode}
                        />
                         <ServiceCom 
                        name="Data Engineering & Management"
                        para="Proficient in designing robust data architectures—using SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Cassandra)—and leveraging ETL frameworks (Spark, Beam) to transform raw data into high‑quality feature stores for training and real‑time serving."
                        icon={faDatabase}
                        />
                         <ServiceCom 
                        name="Backend Integration"
                        para="Developing RESTful and gRPC APIs in Python (FastAPI, Flask) or Node.js to integrate ML models into production applications, handling authentication, authorization, batch and streaming data flows, and monitoring performance and drift."
                        icon={faServer}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;