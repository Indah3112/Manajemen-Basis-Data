db.mahasiswa.bulkWrite([
  { insertOne: { document: { nama: "Idha", nim: "D0222222", jurusan: "Sistem Informasi", nilai: 86 } } },
  { insertOne: { document: { nama: "Citra", nim: "D0222212", jurusan: "Informatika", nilai: 95 } } },
  { deleteOne: { filter: { nim: "D0222321" } } }
])
