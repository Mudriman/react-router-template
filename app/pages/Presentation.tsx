import React from "react";
import ProjectIntro from "~/features/presentation/ProjectIntro";
import HowItWorks from "~/features/presentation/HowItWorks";
import NewsSlider from "~/features/presentation/NewsSlider";
import PTSDStats from "~/features/presentation/PtsdStats";
import ProjectFeatures from "~/features/presentation/ProjectFeatures";
import FAQ from "~/shared/global/FAQ";

const PresentationPage: React.FC = () => {


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col items-center p-6">
            {/* Заголовок и описание проекта */}
            <ProjectIntro ptsdInfoPath="/ptsd_info"/>
            <PTSDStats />
            <NewsSlider />
            <HowItWorks/>
            <ProjectFeatures/>
            <FAQ/>
        </div>
    );
};

export default PresentationPage;
