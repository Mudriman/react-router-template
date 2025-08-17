import React from "react";
import ProjectIntro from "~/features/presentation/ui/ProjectIntro";
import HowItWorks from "~/features/presentation/ui/HowItWorks";
import NewsSlider from "~/features/presentation/ui/NewsSlider";
import ProjectFeatures from "~/features/presentation/ui/ProjectFeatures";
import FAQ from "~/shared/global/FAQ";
import OrganizationIntro from "./ui/OrganizationIntro";
import ProjectStats from "./ui/ProjectStats";

const PresentationPage: React.FC = () => {


    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col items-center p-6">
            {/* Заголовок и описание проекта */}
            <ProjectIntro ptsdInfoPath="/ptsd_info"/>
            <OrganizationIntro/>
            <ProjectStats />
            <NewsSlider />
            <HowItWorks/>
            <ProjectFeatures/>
            <FAQ/>
        </div>
    );
};

export default PresentationPage;
