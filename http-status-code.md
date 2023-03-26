# HTTP Status Code
**Success full Response (2xx)**
- 200 OK (GET, PATCH)
- 201 Created (POST, PUT)

**Client Error Response (4xx)**
- 400 Bad Request
client salah mengirimkan request
- 401 Unauthorized
untuk client harus melakukan authentication 
- 403 Forbidden
tidak di izinkan masuk karena tidak sesuai pada role atau aturan client
- 404 Not Found
halaman/request tidak di temukan
- 405 Method Not Allowed
salah memasukkan method yang tidak tersedia pada server

**Server Error Response (5xx)**
- 500 Internal Server Error
