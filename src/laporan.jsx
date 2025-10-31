import React, { useState, useEffect } from 'react';

function Laporan() {
  const [dataRekapan, setDataRekapan] = useState([]);

  // useEffect ini akan berjalan 1x saat halaman dibuka
  useEffect(() => {
    // Ambil data dari localStorage
    const dataString = localStorage.getItem('rekapanData') || '[]';
    // Ubah data string menjadi array
    const dataParsed = JSON.parse(dataString);
    
    // Urutkan data, yang terbaru di atas
    dataParsed.sort((a, b) => b.id - a.id); 

    // Simpan ke state
    setDataRekapan(dataParsed);
  }, []); // tanda [] berarti "jalankan 1x saja"

  return (
    <section id="laporan-rekapan">
      <h2>Manajemen Rekapan Layanan TI</h2>
      <p>Berikut adalah semua data yang tersimpan di browser Anda.</p>

      {/* Jika tidak ada data, tampilkan pesan */}
      {dataRekapan.length === 0 ? (
        <p>Belum ada data rekapan yang tersimpan.</p>
      ) : (
        // Jika ada data, tampilkan sebagai tabel
        // Kita tambahkan styling tabel sederhana di CSS nanti
        <table className="tabel-rekapan">
          <thead>
            <tr>
              <th>Jenis</th>
              <th>Pelapor</th>
              <th>Unit</th>
              <th>Prioritas</th>
              <th>Deskripsi</th>
              <th>Petugas</th>
            </tr>
          </thead>
          <tbody>
            {dataRekapan.map((item) => (
              <tr key={item.id}>
                <td>{item.jenisLayanan}</td>
                <td>{item.pelapor}</td>
                <td>{item.unitKerja}</td>
                <td>{item.prioritas}</td>
                <td>{item.deskripsi}</td>
                <td>{item.petugas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

export default Laporan;