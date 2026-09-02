(function(){
  function loadJsPdf(){
    return new Promise((resolve,reject)=>{
      if(window.jspdf && window.jspdf.jsPDF){resolve(window.jspdf.jsPDF);return;}
      const existing=document.querySelector('script[data-jspdf-loader="true"]');
      if(existing){existing.addEventListener('load',()=>resolve(window.jspdf.jsPDF),{once:true});existing.addEventListener('error',reject,{once:true});return;}
      const s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/jspdf@2.5.2/dist/jspdf.umd.min.js';
      s.async=true;
      s.dataset.jspdfLoader='true';
      s.onload=()=>resolve(window.jspdf.jsPDF);
      s.onerror=()=>reject(new Error('Could not load PDF library.'));
      document.head.appendChild(s);
    });
  }

  function addWrappedText(doc,text,x,y,maxWidth,lineHeight){
    const lines=doc.splitTextToSize(String(text||'—'),maxWidth);
    lines.forEach(line=>{
      if(y>270){doc.addPage();y=24;}
      doc.text(line,x,y);
      y+=lineHeight;
    });
    return y;
  }

  async function savePdf(title,sections,filename){
    try{
      const jsPDF=await loadJsPdf();
      const doc=new jsPDF({unit:'mm',format:'letter'});
      const left=18;
      const width=178;
      let y=22;

      doc.setFont('helvetica','bold');
      doc.setFontSize(10);
      doc.setTextColor(38,77,114);
      doc.text('FROM PLAN TO PRACTICE | TIER 3 COACHING TOOLKIT',left,y);
      y+=10;

      doc.setFont('helvetica','bold');
      doc.setFontSize(20);
      doc.setTextColor(38,77,114);
      y=addWrappedText(doc,title,left,y,width,8);
      y+=4;

      sections.forEach(section=>{
        if(y>250){doc.addPage();y=24;}
        doc.setFont('helvetica','bold');
        doc.setFontSize(10);
        doc.setTextColor(217,164,65);
        y=addWrappedText(doc,section.label.toUpperCase(),left,y,width,5.5);
        doc.setFont('helvetica','normal');
        doc.setFontSize(11);
        doc.setTextColor(51,66,76);
        y=addWrappedText(doc,section.value,left,y,width,6);
        y+=4;
      });

      doc.setDrawColor(220,220,220);
      doc.line(left,268,196,268);
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.setTextColor(107,113,118);
      doc.text('Generated from Choose Your Coaching Path | PBIS Leadership Forum',left,274);
      doc.save(filename);
    }catch(err){
      console.error(err);
      alert('The PDF could not be generated on this device. Please try again while connected to the internet.');
    }
  }

  function getPlanSections(){
    const barrier=document.getElementById('plan-barrier');
    const key=barrier ? barrier.value : 'unknown';
    const mechanismMap={training:'Training / initial instruction',prompting:'Prompting',feedback:'Performance feedback',fluency:'Fluency building + performance feedback',adaptation:'Adaptation / contextual-fit problem solving',unknown:'Collect more implementation data before prescribing support'};
    const barrierText=barrier ? barrier.options[barrier.selectedIndex].text : '—';
    return [
      {label:'Implementation barrier',value:barrierText},
      {label:'Mechanism to consider',value:mechanismMap[key]||'—'},
      {label:'Starting support',value:document.getElementById('plan-intensity')?.value||'—'},
      {label:'Intensify if',value:document.getElementById('plan-intensify')?.value.trim()||'—'},
      {label:'Fade when',value:document.getElementById('plan-fade')?.value.trim()||'—'},
      {label:'First action',value:document.getElementById('plan-next')?.value.trim()||'—'}
    ];
  }

  function getActivitySections(){
    const type=document.getElementById('builder-type')?.value;
    const typeLabel=type==='scenario'?'Scenario Rehearsal':type==='path'?'Choose Your Path':'Level Up Support';
    return [
      {label:'Format',value:typeLabel},
      {label:'Coaching challenge',value:document.getElementById('builder-challenge')?.value.trim()||'—'},
      {label:'Setting / routine',value:document.getElementById('builder-context')?.value.trim()||'—'},
      {label:'Situation / update',value:document.getElementById('builder-situation')?.value.trim()||'—'},
      {label:'Option A',value:document.getElementById('builder-a')?.value.trim()||'—'},
      {label:'Option B',value:document.getElementById('builder-b')?.value.trim()||'—'},
      {label:'Option C',value:document.getElementById('builder-c')?.value.trim()||'—'},
      {label:'Debrief question',value:document.getElementById('builder-debrief')?.value.trim()||'—'}
    ];
  }

  function install(){
    const planButtons=document.querySelector('#screen-plan-output .stack-buttons');
    if(planButtons && !document.getElementById('download-plan-pdf-btn')){
      const btn=document.createElement('button');
      btn.className='primary-btn';
      btn.id='download-plan-pdf-btn';
      btn.type='button';
      btn.textContent='Download My Plan PDF';
      btn.addEventListener('click',()=>savePdf('My Coaching Next Step',getPlanSections(),'my-coaching-next-step.pdf'));
      planButtons.insertBefore(btn,planButtons.firstChild);
      const note=document.querySelector('#screen-plan-output .small-help');
      if(note) note.textContent='Download your plan as a PDF or keep this page open for reference.';
    }

    const activityButtons=document.querySelector('#screen-builder-output .stack-buttons');
    if(activityButtons && !document.getElementById('download-activity-pdf-btn')){
      const btn=document.createElement('button');
      btn.className='primary-btn';
      btn.id='download-activity-pdf-btn';
      btn.type='button';
      btn.textContent='Download Activity PDF';
      btn.addEventListener('click',()=>savePdf('My Coaching Practice Activity',getActivitySections(),'my-coaching-practice-activity.pdf'));
      activityButtons.insertBefore(btn,activityButtons.firstChild);
    }
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();