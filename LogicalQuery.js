db.mahasiswa.find({
  $or: [
    { jurusan: "Informatika" },
    { nilai: { $lt: 70 } }
  ]
})
