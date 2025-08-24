import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useSWR from 'swr';

const fetcher = async () => {
  const response = await axios.get('http://localhost:4000/siswa');
  return response.data;
};

const DaftarSiswa = () => {
  const { data, mutate } = useSWR('siswa', fetcher);
  if (!data) return <div>Loading...</div>;

  const handleDelete = async (id) => {
    if (window.confirm('Yakin ingin menghapus data?')) {
      await axios.delete(`http://localhost:4000/siswa/${id}`);
      mutate(); // refresh data
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-blue-700">Daftar Siswa</h1>
          <Link to="/tambah" className="bg-green-500 hover:bg-green-600 transition-colors px-4 py-2 text-white rounded shadow">
            Tambah Siswa
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 border">No</th>
                <th className="py-2 px-4 border">Nama</th>
                <th className="py-2 px-4 border">Umur</th>
                <th className="py-2 px-4 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {data.map((siswa, index) => (
                <tr key={siswa.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">{siswa.nama}</td>
                  <td className="py-2 px-4 border">{siswa.umur}</td>
                  <td className="py-2 px-4 border">
                    <Link to={`/edit/${siswa.id}`} className="bg-blue-500 hover:bg-blue-600 transition-colors px-3 py-1 text-white rounded mr-2 shadow">
                      Edit
                    </Link>
                    <button className="bg-red-500 hover:bg-red-600 transition-colors px-3 py-1 text-white rounded shadow" onClick={() => handleDelete(siswa.id)}>
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DaftarSiswa;
