import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="grid grid-cols-2 gap-16  w-[90ch] translate-y-[9rem] translate-x-64">
        <div>
          <p className="text-center">
            <p className="uppercase font-bold mb-4">our vision</p>
            Our vision is to become a leading provider of people-centric,
            evidence-based, and comprehensive home healthcare solutions in our
            community.
          </p>
        </div>
        <div>
          <p className="text-center">
            <p className="uppercase font-bold mb-4">our mission</p>
            We ensure that elders get the best care they deserve to maintain
            their health and well-being in the comfort of their homes.
          </p>
        </div>
      </div>
      <p className="uppercase text-center mt-80"> meet our team</p>
      <div className="text-center mx-48 my-52">
        <p>
          IMpower Healthcare was founded by Dr. Arjun Poudel, a scientist
          specializing in geriatric medicine. As a lecturer and research
          associate in the School of Clinical Sciences at the Queensland
          University of Technology, he has amassed extensive experience in the
          field of clinical sciences and is passionate about improving the
          quality of life for older people through his research. His research
          expertise relates to the quality of prescribing for the frail aged
          across the continuum of care.
        </p>
        <p className="my-8">
          In addition to Dr. Poudel, our founding members include Mr. Rajesh
          Timilsina and Mr. Pushkar Baral.
        </p>
        <p>
          Rajesh is our Chief Financial Officer, who looks after the operational
          side of the organization. He has over ten years of experience
          overseeing finance in the automobile industry based in Nepal. He has
          also amassed considerable experience as an administrative lead in the
          educational sector, managing operations, staff, and budgets to ensure
          an efficient function and compliance. His drive, compassionate nature,
          and commitment to positive change make him the operational backbone of
          our organization. Pushkar (BSc Engineering, Aachen, Germany, Grad
          Dipl. in Education. Australia) had been working for the Department of
          Education in Western Australia, delivering technical education. Seeing
          the need for a more soul-soothing career that vindicates his appetite
          for holistic medicine, he decided to put aside his own comfortable
          life as an Australian resident and moved to Nepal to help establish
          the company. He is our Chief Techincal Officer and Human Resources
          manager. He strongly believes that the health sector needs a change
          towards a more caring, coherent, and holistic approach. Mr. Baral is
          also a trained enthusiast in the ancient art of healing called Yoga
          Prana Vidhya and a regular practitioner of Yoga and meditation.
        </p>
        <p className="my-8">
          Together, our founding members bring diverse qualities into the
          company through valuable experience they have had over the years. We
          are excited to have them on board and look forward to making a
          positive impact on healthcare outcomes for older people.
        </p>
      </div>
      <div className="my-24 mx-48">
        <p className="font-bold tracking-wide uppercase text-2xl my-12">
          Management Team
        </p>
        <div className="flex">
          <div className="mx-12">
            <Image
              src="/arjun.png"
              alt="arjun"
              width={199}
              height={279}
            ></Image>
            <div className="text-center py-4 flex flex-col gap-3">
              <p>Dr Arjun Paudel</p>
              <p>Director and CEO</p>
              <p className="text-red-500 font-semibold">Know more &#x3e;</p>
            </div>
          </div>
          <div className="mx-12">
            <Image
              src="/rajesh.png"
              alt="rajesh"
              width={220}
              height={273}
            ></Image>
            <div className="text-center py-4 flex flex-col gap-3">
              <p>Rajesh Timilsina</p>
              <p>CFO and Operations Manager</p>

              <p className="text-red-500 font-semibold">Know more &#x3e;</p>
            </div>
          </div>
          <div className="mx-12">
            <Image
              src="/pushkar.png"
              alt="pushkar"
              width={224}
              height={268}
            ></Image>
            <div className="text-center py-4 flex flex-col gap-3">
              <p>Pushkar Baral</p>
              <p>CTO and HR Manager</p>

              <p className="text-red-500 font-semibold">Know more &#x3e;</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
