import React, { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { Badge } from "antd";
import holdingFood from '../pictures/HomePageGallery/Festival_Food.png';
import onRock from '../pictures/HomePageGallery/Hiking_Ontop_Rock.png';
import rockNRoll from "../pictures/HomePageGallery/RockNRoll.png";
import UCSDCSE from "../pictures/Education/UCSD cse department picture.png";
import UCSDGeisel from "../pictures/Education/UCSDGeiselSunSet.png"


function HomePage()  {

    const slides = [
        {
            img: holdingFood
        },
        {
            img: onRock
        },
        {
          img: rockNRoll
        },
    ];

    const[currentIndex, setCurrentIndex] = useState(0);
    const [selectedSlide, setSelectedSlide] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setSelectedSlide(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setSelectedSlide(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
        setSelectedSlide(slideIndex);
    }


    return (
        <div className = "HomePage flex flex-wrap bg-white w-full h-screen">

            <div className = "Carousel relative justify-start max-w-[1000px] h-[800px] w-full p-20 group">
                <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }} className = "w-full h-full rounded-2xl bg-center bg-cover"/>

                <div className = "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"> <BsChevronCompactLeft onClick={prevSlide}/> </div>
                <div className = "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"> <BsChevronCompactRight onClick={nextSlide}/> </div>

                <div className = "flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => goToSlide(slideIndex)}
                            className={`text-2xl cursor-pointer ${
                                selectedSlide === slideIndex ? "text-black" : "text-Dove-Gray"
                            }`}>
                            <RxDotFilled/>
                        </div>
                    ))}
                </div>
            </div>

            <div className = "HeaderIntroduction justify-end px-20 py-32 w-90">
                <h1 className= "text-black text-head1 font-bree-serif font-bold">Billy Phan,</h1>
                <h2 className= "text-black text-head2 font-bree-serif">San Diego Native & Aspiring Software Engineer</h2>

                <div className = "border border-b-black rounded-2xl max-w-[680px]">
                    <p className = "text-head3 text-black font-bree-serif p-5">
                        I am currently a third year Computer Science undergrad & CSE department tutor @ UC San Diego.
                        <br/>
                        I am interested in web development, and am in the process of learning and understanding full
                        stack development. More specifically, I am interested in the difference between front end and back end development,
                        and am still currently deciding what I ultimately want to specialize in, if at all.
                    </p>
                </div>
            </div>

            <div className = "EducationSection justify-start px-20 py-40 w-full">
                <h1 className= "text-black text-head1 font-bold font-bree-serif"> Education</h1>

                <div className="border border-b-black rounded-2xl p-5 bg-black text-white">
                    <a href="https://ucsd.edu/" target="_blank" className = "hover:underline text-head2">University of California, San Diego</a>


                    <h3 className= "text-head3"> Bachelors of Science | (2021-2025)</h3>

                    <div className= "py-5">
                        <div>
                            <h4 className= "font-bold text-head4 inline"> Major: </h4>
                            <h4 className= "italic text-head4 inline">Computer Science</h4>
                        </div>
                        <div>
                            <h4 className= "font-bold text-head4 inline"> GPA: </h4>
                            <h4 className= "italic text-head4 inline"> 3.64</h4>
                        </div>

                    </div>

                    <a href="https://catalog.ucsd.edu/courses/CSE.html" target="_blank" className=" hover:underline text-head4">Relevant Coursework: </a>

                    <div className= "flex ">
                        <div className= "flex flex-col w-1/12">
                            <div className="border border-b-Dove-Gray p-1"> Course:</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 12</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 100</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 105</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 101</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 30</div>
                            <div className="border border-b-Dove-Gray p-1"> CSE - 110 </div>
                        </div>

                        <div className= "flex flex-col w-1/4">
                            <div className="border border-b-Dove-Gray p-1"> Description:</div>
                            <div className="border border-b-Dove-Gray p-1"> Basic Data Structures and Object-Oriented Design </div>
                            <div className="border border-b-Dove-Gray p-1"> Advanced Data Structures</div>
                            <div className="border border-b-Dove-Gray p-1"> Theory of Computability</div>
                            <div className="border border-b-Dove-Gray p-1"> Design and Analysis of Algorithms</div>
                            <div className="border border-b-Dove-Gray p-1"> Computer Organization and Systems Programming </div>
                            <div className="border border-b-Dove-Gray p-1"> Software Engineering </div>
                        </div>

                        <div className= "flex flex-col w-1/5">
                            <div className="border border-b-Dove-Gray p-1"> Relevance:</div>
                            <div className="border border-b-Dove-Gray p-1"> <Badge className="py-1 px-2 text-white bg-java-orange rounded-2xl mx-1">Java</Badge> </div>
                            <div className="border border-b-Dove-Gray p-1"> <Badge className="py-1 px-2 text-white bg-c++-blue rounded-2xl mx-1"> C++</Badge></div>

                            <div className= "flex flex-row border border-b-Dove-Gray p-1 justify-items-start">
                                <div> <Badge className="py-1 px-2 text-white bg-tan rounded-2xl mx-1"> Automata</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-powder-pink rounded-2xl mx-1"> Machines</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-silver-gray rounded-2xl mx-1"> Languages</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-plum rounded-2xl mx-1"> P&NP</Badge></div>
                            </div>

                            <div className="border border-b-Dove-Gray p-1"> <Badge className="py-1 px-2 text-white bg-lime-green rounded-2xl mx-1"> Algorithms</Badge></div>

                            <div className= "flex flex-row border border-b-Dove-Gray p-1 justify-items-start">
                                <div> <Badge className="py-1 px-4 text-white bg-c++-blue rounded-2xl mx-1"> C</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-regularGray rounded-2xl mx-1"> Github</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-Dove-Gray rounded-2xl mx-1"> Vim</Badge></div>
                                <div> <Badge className="border border-b-white py-0.5 px-2 text-white bg-black rounded-2xl mx-1"> Markdown</Badge></div>
                            </div>


                            <div className= "flex flex-row border border-b-Dove-Gray p-1 justify-items-start">
                                <div> <Badge className="py-1 px-2 text-white bg-java-orange rounded-2xl mx-1">Java</Badge> </div>
                                <div> <Badge className="py-1 px-2 text-white bg-mongoDB-green rounded-2xl mx-1"> MondoDB </Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-spring-boot-green rounded-2xl mx-1"> SpringBoot</Badge></div>
                                <div> <Badge className="py-1 px-2 text-white bg-regularGray rounded-2xl mx-1"> Github</Badge></div>
                            </div>


                        </div>
                    </div>


                </div>
            </div>

        </div>



    );

}

export default HomePage;