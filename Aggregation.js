db.mahasiswa.aggregate([
  {
    $group: {
      _id: "$jurusan",
      rataNilai: { $avg: "$nilai" }
    }
  }
])
