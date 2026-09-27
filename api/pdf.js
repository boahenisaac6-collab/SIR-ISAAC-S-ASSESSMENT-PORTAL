module.exports=async(req,res)=>{
  try{
    const id=String(req.query?.teacher_id||"");
    if(!id){res.status(400).json({error:"teacher_id required"});return}
    const url="https://dhnrrruishllmnhafjdd.supabase.co/functions/v1/teacher-attendance-api?teacher_id="+encodeURIComponent(id);
    const r=await fetch(url,{headers:{"Accept":"application/pdf"}});
    const b=Buffer.from(await r.arrayBuffer());
    res.status(r.status);
    res.setHeader("Content-Type",r.headers.get("content-type")||"application/pdf");
    res.setHeader("Content-Disposition",r.headers.get("content-disposition")||'attachment; filename="teacher_timetable.pdf"');
    res.setHeader("Cache-Control","no-store");
    res.end(b);
  }catch(e){res.status(500).json({error:"PDF generation failed",detail:String(e?.message||e)})}
};