import React from "react";
import CertificateCard from "./CertificateCard";

const certificates = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    imageUrl: "/freecode.webp",
    credentialUrl: "https://www.freecodecamp.org/certification/fcc-b45280d5-9032-43f4-a01e-7be3722a51ef/responsive-web-design",
  },
  {
    title: "HTML and CSS in depth",
    issuer: "Meta",
    imageUrl: "meta.webp",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/G76MV13VXMUH",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    imageUrl: "google.webp",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/EC35CWQ07BOB",
  },
  {
    title: "Web developer ",
    issuer: "Wogle Tech",
    imageUrl: "wogle.webp",
    credentialUrl: "https://cert.diceid.com/cid/Ya1SRhLyHd",
  },
  {
    title: "Python Programming ",
    issuer: "Entri",
    imageUrl: "py.webp",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D562DAQHmrs8bRX4Cvw/profile-treasury-image-shrink_800_800/B56ZowEn4LJQAY-/0/1761743112111?e=1762412400&v=beta&t=7KnDL96JIjdrrdbr3Pu4TcbTwn-5N5ZH6BvvP9MWVbk",
  },
  {
    title: "ChatGPT ",
    issuer: "Entri",
    imageUrl: "chat.webp",
    credentialUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGwjGVfgoZyIg/profile-treasury-image-shrink_800_800/B4EZowoh.MKkAY-/0/1761752523865?e=1762412400&v=beta&t=GgqQW7Yz-d0DEmmVebTPcFq8gfHoPF5a8opgdh5zux0",
  },
];

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="min-h-screen py-20 px-6 bg-gradient-to-b border-sky-700/20 via-[#082938] border-sky-700/20 text-gray-100  "
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-sky-300 mb-14 drop-shadow-[0_6px_20px_rgba(56,189,248,0.15)]">
        Certificates
      </h2>
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <CertificateCard key={cert.title} cert={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
