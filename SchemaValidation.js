db.createCollection("mahasiswa_validasi", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["nama", "nim", "jurusan", "nilai"],
      properties: {
        nama: { bsonType: "string" },
        nim: { bsonType: "string" },
        jurusan: { bsonType: "string" },
        nilai: { bsonType: "int", minimum: 0, maximum: 100 }
      }
    }
  }
})
