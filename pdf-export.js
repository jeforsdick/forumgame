(function(){
  const FORUM_THEME_CSS = `
    :root{
      --forum-blue:#3E66B3;
      --forum-navy:#274A78;
      --forum-mint:#9BC7B6;
      --forum-light-blue:#EEF3FB;
      --forum-page:#F7F7F5;
      --forum-dark:#2F2F31;
      --forum-text:#2E3F52;
      --forum-border:#D8E1EC;
      --forum-green:#EAF4EC;
      --forum-gold:#FFF5D9;
      --forum-rose:#FAEAEA;
    }
    html,body{background:var(--forum-dark)!important;}
    body{color:var(--forum-text)!important;padding:14px 0 28px;}
    .blob{display:none!important;}
    .app{width:min(900px,calc(100% - 24px))!important;margin:0 auto!important;}
    .screen{
      background:#fff!important;
      border:5px solid var(--forum-mint)!important;
      border-radius:7px!important;
      box-shadow:0 18px 40px rgba(0,0,0,.22)!important;
      padding:22px!important;
      backdrop-filter:none!important;
    }
    h1,h2{font-family:Georgia,'Times New Roman',serif!important;color:var(--forum-blue)!important;font-weight:700!important;letter-spacing:-.02em!important;line-height:1.08!important;}
    h1{font-size:2.4rem!important;max-width:760px!important;}
    h2{font-size:2rem!important;}
    h3{font-family:Georgia,'Times New Roman',serif!important;color:var(--forum-navy)!important;font-weight:700!important;}
    p,li,label,select,input,textarea,button{font-family:Arial,Helvetica,sans-serif!important;}
    p,li{color:var(--forum-text)!important;}
    .display-line{color:var(--forum-blue)!important;display:block!important;}
    .subtitle{color:var(--forum-navy)!important;font-size:1.06rem!important;max-width:720px!important;margin-bottom:12px!important;}
    .eyebrow{
      background:transparent!important;
      color:var(--forum-navy)!important;
      border:1px solid #C8D6E8!important;
      border-radius:999px!important;
      padding:6px 11px!important;
      font-size:.76rem!important;
      letter-spacing:.08em!important;
      text-transform:uppercase!important;
      margin-bottom:16px!important;
    }
    .session-meta{
      border-top:1px solid var(--forum-border);
      border-bottom:1px solid var(--forum-border);
      padding:12px 0;
      margin:16px 0 18px;
      color:var(--forum-navy);
      font-size:.9rem;
      line-height:1.5;
    }
    .session-meta strong{color:var(--forum-blue);}
    .cardy,.output-box{
      background:#fff!important;
      border:1px solid var(--forum-border)!important;
      border-radius:8px!important;
      box-shadow:none!important;
    }
    .note,.lens-prompt,.live-stop{
      background:var(--forum-light-blue)!important;
      color:var(--forum-navy)!important;
      border-radius:6px!important;
      border-left:4px solid var(--forum-mint)!important;
    }
    .role-btn,.choice-btn{
      background:#fff!important;
      color:var(--forum-text)!important;
      border:1px solid var(--forum-border)!important;
      border-radius:8px!important;
      box-shadow:none!important;
      transition:border-color .15s ease,background .15s ease,box-shadow .15s ease!important;
    }
    .role-btn[data-role='best-fit']{background:var(--forum-green)!important;}
    .role-btn[data-role='workable']{background:var(--forum-gold)!important;}
    .role-btn[data-role='mismatch']{background:var(--forum-rose)!important;}
    .role-btn.selected{border:3px solid var(--forum-blue)!important;box-shadow:none!important;}
    .role-title{color:var(--forum-navy)!important;font-size:1.05rem!important;}
    @media(hover:hover) and (pointer:fine){
      .choice-btn:hover,.role-btn:hover{border-color:var(--forum-blue)!important;box-shadow:0 3px 12px rgba(62,102,179,.10)!important;}
    }
    .choice-letter{
      background:var(--forum-light-blue)!important;
      color:var(--forum-blue)!important;
      border:1px solid #C8D6E8!important;
    }
    .primary-btn,.secondary-btn,.ghost-btn{
      border-radius:7px!important;
      min-height:54px!important;
      font-weight:700!important;
    }
    .primary-btn{background:var(--forum-blue)!important;color:#fff!important;border:2px solid var(--forum-blue)!important;}
    .primary-btn:hover{background:var(--forum-navy)!important;border-color:var(--forum-navy)!important;}
    .secondary-btn{background:#fff!important;color:var(--forum-blue)!important;border:2px solid var(--forum-blue)!important;}
    .ghost-btn{background:var(--forum-light-blue)!important;color:var(--forum-navy)!important;border:1px solid #C8D6E8!important;}
    .mini-board{
      background:var(--forum-light-blue)!important;
      color:var(--forum-navy)!important;
      border:1px solid #C8D6E8!important;
      border-radius:7px!important;
    }
    .mini-board .small,.mini-board strong,.mini-board p{color:var(--forum-navy)!important;}
    .progress span{background:#F0F3F7!important;color:#66788E!important;border:1px solid #E0E6ED!important;}
    .progress span.active{background:var(--forum-blue)!important;color:#fff!important;border-color:var(--forum-blue)!important;}
    .pill{border-radius:999px!important;}
    .fit-strongest .pill{background:#7FA786!important;color:#fff!important;}
    .fit-workable .pill{background:#D5AF5E!important;color:#3D3420!important;}
    .fit-mismatch .pill{background:#C98585!important;color:#fff!important;}
    .mechanism{background:var(--forum-light-blue)!important;color:var(--forum-navy)!important;border-left:4px solid var(--forum-mint)!important;border-radius:6px!important;}
    .builder-input,.builder-textarea,.builder-select{
      background:#fff!important;
      color:var(--forum-text)!important;
      border:1px solid var(--forum-border)!important;
      border-radius:7px!important;
      box-shadow:none!important;
    }
    .builder-label{color:var(--forum-navy)!important;}
    .small-help{color:#66788E!important;}
    .forum-footer{
      border-top:1px solid var(--forum-border);
      margin-top:22px;
      padding-top:11px;
      color:#6A7B91;
      font:600 .72rem Arial,Helvetica,sans-serif;
      letter-spacing:.02em;
      text-align:right;
    }
    #screen-landing .content{max-width:760px;margin:0 auto;}
    #screen-landing h1{font-size:2.65rem!important;}
    #screen-landing .button-row{margin-top:20px!important;}
    @media(min-width:760px){
      body{padding:26px 0 44px;}
      .screen{padding:34px 42px!important;}
      h1{font-size:4rem!important;}
      h2{font-size:2.75rem!important;}
      #screen-landing h1{font-size:4.25rem!important;}
      .app{width:min(900px,calc(100% - 40px))!important;}
      .button-row{flex-direction:row!important;}
      .button-row .primary-btn,.button-row .secondary-btn{width:auto!important;}
    }
    @media(max-width:759px){
      .button-row,.stack-buttons{gap:10px!important;}
      .button-row .primary-btn,.button-row .secondary-btn,.stack-buttons .primary-btn,.stack-buttons .secondary-btn{width:100%!important;}
      .screen{padding:20px!important;}
      h1{font-size:2.35rem!important;}
      h2{font-size:1.9rem!important;}
      .forum-footer{text-align:left;}
    }
  `;

  function installForumTheme(){
    if(document.getElementById('forum-theme-overrides')) return;
    const style=document.createElement('style');
    style.id='forum-theme-overrides';
    style.textContent=FORUM_THEME_CSS;
    document.head.appendChild(style);

    const landing=document.querySelector('#screen-landing .content');
    if(landing && !landing.querySelector('.session-meta')){
      const subtitle=landing.querySelector('.subtitle');
      const meta=document.createElement('div');
      meta.className='session-meta';
      meta.innerHTML='<strong>Session 4 · Coaching at Tier 3</strong><br>From Plan to Practice: Coaching Function-Based Tier 3 Supports<br>Presenters: Katie Conley · Jess Olson · Kathleen Strickland-Cohen<br><strong>Topic:</strong> Coaching &nbsp;·&nbsp; <strong>Keywords:</strong> Tier 3, Fidelity, Gamification';
      if(subtitle) subtitle.insertAdjacentElement('afterend',meta);
      else landing.prepend(meta);
    }

    document.querySelectorAll('.screen .content').forEach(content=>{
      if(content.querySelector('.forum-footer')) return;
      const footer=document.createElement('div');
      footer.className='forum-footer';
      footer.textContent='National PBIS Leadership Forum 2026 · From Plan to Practice';
      content.appendChild(footer);
    });
  }

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
      doc.setTextColor(62,102,179);
      doc.text('FROM PLAN TO PRACTICE | TIER 3 COACHING TOOLKIT',left,y);
      y+=10;

      doc.setFont('helvetica','bold');
      doc.setFontSize(20);
      doc.setTextColor(39,74,120);
      y=addWrappedText(doc,title,left,y,width,8);
      y+=4;

      sections.forEach(section=>{
        if(y>250){doc.addPage();y=24;}
        doc.setFont('helvetica','bold');
        doc.setFontSize(10);
        doc.setTextColor(62,102,179);
        y=addWrappedText(doc,section.label.toUpperCase(),left,y,width,5.5);
        doc.setFont('helvetica','normal');
        doc.setFontSize(11);
        doc.setTextColor(46,63,82);
        y=addWrappedText(doc,section.value,left,y,width,6);
        y+=4;
      });

      doc.setDrawColor(155,199,182);
      doc.line(left,268,196,268);
      doc.setFont('helvetica','normal');
      doc.setFontSize(8);
      doc.setTextColor(106,123,145);
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

  function installPdfButtons(){
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

  function install(){
    installForumTheme();
    installPdfButtons();
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install,{once:true});
  else install();
})();