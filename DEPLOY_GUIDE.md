# Panduan Deploy ke Vercel — Therapy Aura Rezeki v1.3.1

## Cara deploy yang BENAR (supaya versi terbaru tampil):

### 1. Download workspace (ZIP terbaru)
- Download ulang workspace setelah commit v1.3.1
- Extract ZIP di komputer Anda

### 2. Verifikasi versi sebelum upload
Buka `package.json` di folder hasil extract, pastikan:
```json
"version": "1.3.1"
```
Buka `src/lib/site-data.ts`, pastikan:
```js
ownerName: "Umma Yunita",
whatsapp: "087881912019",
address: "Pondok Pucung Indah II, Jl. Tarumanegara A22/1, ..."
```
Kalau masih `1.3.0` atau nomor `087725581800` → ZIP masih versi lama, download ulang.

### 3. Upload ke Vercel
- Buka https://vercel.com → New Project
- Upload folder hasil extract (drag & drop ATAU connect Git)
- **PENTING:** Di settings Vercel, pastikan:
  - Framework Preset: **Next.js**
  - Build Command: `next build` (default)
  - Install Command: `bun install` atau `npm install`
- Klik **Deploy**

### 4. Kalau deploy ulang (redeploy) project yang sudah ada:
- Buka project di Vercel → tab "Deployments"
- Klik tombol `...` di deployment terbaru
- Pilih **"Redeploy"**
- ❌ **UNCHECK** "Use existing Build Cache" — supaya Vercel build dari awal, bukan pakai cache lama
- Klik Redeploy

### 5. Setelah deploy selesai, verifikasi:
- Buka URL Vercel (xxx.vercel.app)
- Scroll ke footer → pastikan ada badge **v1.3.1**
- Cek section kontak → pastikan nomor **087881912019**
- Cek section lokasi → pastikan alamat **Jl. Tarumanegara A22/1**
- Cek Google Maps embed → pastikan alamat baru

## Environment Variables (WAJIB untuk form pendaftaran)
Di Vercel project → Settings → Environment Variables, tambahkan:
```
DATABASE_URL = file:./db/custom.db
```
Note: SQLite tidak persisten di Vercel serverless. Untuk production, ganti ke PostgreSQL/MySQL (Neon, PlanetScale, dll) dan update `prisma/schema.prisma` provider-nya.

## Kalau masih tampil versi lama di Vercel:
1. Hard refresh browser (Ctrl+Shift+R) di URL Vercel
2. Tunggu 1-2 menit (CDN propagation)
3. Coba buka di incognito/private window
4. Cek di Vercel dashboard → "Build Logs" → pastikan build berhasil tanpa error

## Versi saat ini: v1.3.1
- Semua kontak/alamat sudah benar (Umma Yunita, 087881912019, A22/1)
- Footer minimal premium (no "berkah tauhid")
- SEO full built-in aktif
- Dashboard SEO hidden (/seo, noindex)
