import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import siswaRoutes from './routes/siswaRoute.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/siswa', siswaRoutes);

const PORT = 4000; // Port index beda dengan port yang ada di mysql
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
