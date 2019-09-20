fetch(`${ window.location.origin }${ window.location.pathname }large-file.js`, {
    method: 'GET',
    credentials: 'include'
})
.then(request => request.blob())
.then(response => {
    const script = document.createElement('script');
    var fileUrl = URL.createObjectURL(response);
    script.src = fileUrl;
    script.addEventListener('load', ()=>{ console.log(Twig); });
    document.body.appendChild(script);
})