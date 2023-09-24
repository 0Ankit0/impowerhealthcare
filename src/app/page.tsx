import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="mx-20 my-[10rem] text-center">
        <div className=" leading-10">
          <p>
            In the pursuit of personal and professional growth overseas, having
            to leave parents in Nepal is a bitter reality.
          </p>
          <p>
            We now bring you much needed peace of mind by delivering care where
            your parents need most -
          </p>
          <p>their own cherished home.</p>
        </div>
        <div className=" bg-slate-200 py-8 px-4 inline-block font-semibold mt-12">
          DISCOVER OUR MEMBERSHIP SERVICE
        </div>
      </div>
      <div className="my-[10rem] mx-32">
        <div className="flex gap-6">
          <Image src="/pic.png" alt="Image" width={305} height={324} />
          <div className="w-[657px] text-center leading-12">
            <p>
              Meet our visionary Founder and CEO, Dr. Arjun Poudel - a true
              inspiration and role model. After the tragic loss of his father,
              he resigned from his esteemed faculty position at a university in
              Queensland, Australia and returned to Nepal.
            </p>
            <p className="mt-3">
              Leaving behind his perks as an Australian resident, income and a
              career with a world-class reputation, he is here driven by a
              profound vision to contribute to healthcare delivery. He has
              embarked on a remarkable journey of service and leadership. He
              inspires us as a company to deliver unmatched standards in
              everything we do. Read more about his story
              <strong className="text-red-500"> here.</strong>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 my-[20rem]">
          <div className="w-[396px] h-[282px] text-center">
            <p className="py-8">How We Work</p>
            <p>
              When you enrol, an in-home consultation will be carried out by our
              team to discuss your lifestyle, health needs and overall well
              being. Based on this assessment, we create a fully customized care
              plan that addresses your holistic needs. This care plan
              encompasses various dimensions, including medical, non-medical,
              and psycho-social aspects. We are committed to providing
              continuous assistance for your holistic wellbeing.
            </p>
            <div className="my-28">
              <Image
                src="/impower.png"
                alt="impower"
                width={569}
                height={529}
              ></Image>
            </div>
          </div>
          <div>
            <Image
              src="/work.png"
              alt="how we work"
              width={731}
              height={1280}
              priority
            />
          </div>
        </div>
        <div className="text-center">
          <p className="text-2xl tracking-wide font-bold">
            Need more Information?Got a question?
          </p>
          <div className="flex w-full gap-7 mt-12">
            <button className="font-bold text-white bg-[#01b5cc] py-4 flex-grow rounded-[10rem]">
              Request a phonecall
            </button>
            <button className="font-bold text-white bg-[#01b5cc] py-4 flex-grow rounded-[10rem]">
              Call Us Now On 1300 875 377
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
