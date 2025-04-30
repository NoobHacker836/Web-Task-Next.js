import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-6">
      <div className="bg-gray-800 shadow-2xl rounded-2xl p-8 max-w-3xl w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400">Haider Asif</h1>
          <p className="text-lg text-gray-300">Cyber Security Enthusiast</p>
          <p className="text-sm text-gray-400">
            hypervenom836@gmail.com | (123) 456-7890 | Islamabad, Pakistan
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Summary</h2>
          <p className="text-gray-300">
            Security-driven and detail-oriented individual passionate about protecting digital infrastructure. Skilled in penetration testing, secure coding, and analyzing vulnerabilities in real-world systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Projects</h2>
          <div className="mb-4">
            <h3 className="text-xl font-bold text-white">Network Intrusion Detection</h3>
            <p className="text-sm text-gray-400">Python, Scapy, Wireshark</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Created a system to detect malicious packets in real-time.</li>
              <li>Integrated custom filters to identify TCP SYN flooding.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Secure File Transfer Protocol</h3>
            <p className="text-sm text-gray-400">C, OpenSSL</p>
            <ul className="list-disc list-inside text-gray-300 mt-2 space-y-1">
              <li>Implemented encrypted file transfer using symmetric and asymmetric cryptography.</li>
              <li>Handled secure key exchange and authentication.</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-bold text-white">B.S. in Cyber Security</h3>
            <p className="text-sm text-gray-400">FAST NUCES, 2019 - 2025</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">Skills</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">Penetration Testing</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">Wireshark</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">C/C++</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">Linux</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">OpenSSL</span>
            <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm">Networking</span>
          </div>
        </section>
      </div>
    </div>
  );
}
