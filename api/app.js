const zlib=require("zlib");
const parts=[0,1,2].map(i=>require("./htmlchunk"+i));
const html=zlib.brotliDecompressSync(Buffer.from(parts.join(""),"base64"));
module.exports=(req,res)=>{
  res.setHeader("Content-Type","text/html; charset=utf-8");
  res.setHeader("Cache-Control","public, max-age=60, stale-while-revalidate=300");
  res.setHeader("X-Content-Type-Options","nosniff");
  res.end(html);
};