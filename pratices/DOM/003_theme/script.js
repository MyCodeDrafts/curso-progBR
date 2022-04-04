const btn = document.querySelector('button');
const btn2 = document.querySelector('#button');

function loaded() {
    btn.onclick = function() {
        document.body.style.backgroundColor = '#141518';
        document.body.style.color = "#d5dbe0";
       
        
    
        
    }
    btn2.onclick  = function () {
        // document.body.style.backgroundColor = '#d5dbe0';
        document.body.style.backgroundColor = 'aliceblue';
        document.body.style.color = '#141518';
        
    }
    
}

