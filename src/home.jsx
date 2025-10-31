import React from 'react'

function Home() {
  return (
    <>
      <section id="apa-itu-itil">
        <h2>Apa itu ITIL 4?</h2>
        <p>ITIL (Information Technology Infrastructure Library) 4 adalah evolusi terbaru dari framework praktik terbaik untuk Manajemen Layanan TI (ITSM). ITIL 4 menyediakan pendekatan yang holistik, praktis, dan fleksibel untuk manajemen layanan yang didukung TI.</p>
        <p>Fokus utamanya adalah pada <strong>ko-kreasi nilai (co-creation of value)</strong> bersama antara penyedia layanan dan konsumen.</p>
      </section>

      <section id="svs">
        <h2>Komponen Inti: Service Value System (SVS)</h2>
        <p>ITIL 4 memperkenalkan <strong>Service Value System (SVS)</strong>, yang menjelaskan bagaimana semua komponen dan aktivitas organisasi bekerja sama sebagai sistem untuk menciptakan nilai.</p>

        <div className="komponen-svs">
          <div className="item">
            <h3>Guiding Principles</h3>
            <p>Rekomendasi yang memandu organisasi. (Cth: Fokus pada nilai, Mulai dari mana Anda berada).</p>
          </div>
          <div className="item">
            <h3>Governance</h3>
            <p>Cara organisasi diarahkan dan dikendalikan.</p>
          </div>
          <div className="item">
            <h3>Service Value Chain</h3>
            <p>Model operasi inti untuk penciptaan nilai (Plan, Improve, Engage, Design, Obtain/Build, Deliver).</p>
          </div>
          <div className="item">
            <h3>Practices</h3>
            <p>Kumpulan sumber daya untuk melakukan pekerjaan (Cth: Incident Management, Service Desk).</p>
          </div>
          <div className="item">
            <h3>Continual Improvement</h3>
            <p>Aktivitas berulang untuk memastikan kinerja terus meningkat.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home