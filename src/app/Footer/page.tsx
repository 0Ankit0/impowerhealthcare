export default function Footer() {
  return (
    <footer className="mx-12 mt-16">
      <div className="px-32 bg-slate-200 ">
        <p className="leading-[4rem] text-lg">
          We will answer your call from anywhere in the world. That’s our
          promise.
        </p>
        <div className="flex gap-32">
          <ul>
            <li className="font-semibold ">IMpower Healthcare</li>
            <li>Ms Binita Bujhel</li>
            <li className="py-8">+977 61571450</li>
          </ul>
          <ul>
            <li className="uppercase">availability:</li>
            <li className="uppercase">7 days a week,24 hours</li>
          </ul>
          <ul>
            <li>HOUSE 86,</li>
            <li>SIDDHARTHA STREET,</li>
            <li>WARD 8,</li>
            <li>SIMALCHOUR, POKHARA</li>
          </ul>
        </div>
      </div>
      <div className="px-32">
        <p className="leading-[6rem] text-2xl">
          Alternatively, you could reach out to to any of our liason officers{" "}
        </p>
        <div className="flex justify-between mb-8">
          <ul>
            <li className="uppercase font-bold leading-[4rem]">australia</li>
            <li>Bishnu Niraula</li>
            <li>Registered nurse</li>
            <li className="leading-[3rem]">Harrisdale WA 6112</li>
            <li className=" text-red-600">Request a call</li>
          </ul>
          <ul>
            <li className="uppercase font-bold leading-[4rem]">
              united states
            </li>
            <li>Rakshya Baral</li>
            <li>Registered nurse</li>
            <li className="leading-[3rem]">Ashbourne VA 20147</li>
            <li className=" text-red-600">Request a call</li>
          </ul>
          <ul>
            <li className="uppercase font-bold leading-[4rem]">hong kong</li>
          </ul>
          <ul>
            <li className="uppercase font-bold leading-[4rem]">
              united kingdom
            </li>
          </ul>
          <ul>
            <li className="uppercase font-bold leading-[4rem]">canada</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
