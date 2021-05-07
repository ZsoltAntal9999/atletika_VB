    const font = 0.45359237;

    function energiaKalkulalas(){
        var tevekenyseg=document.getElementById('tevekenyseg').value;
        var sulyKg=document.getElementById('kg').value;
        var perc=document.getElementById('perc').value;
        var t = tevekenysegKcal(tevekenyseg);
        var s = energiaFogyasSzorzo(sulyKg);
        var eredmenyP = document.getElementById('kcal');
        eredmenyP.textContent =  Math.round((t*s)*perc)+' kcal';
    }

    function tevekenysegKcal(tevekenyseg){
       if(tevekenyseg=="seta")
            return 1.1
        else if(tevekenyseg=="kocogas")
            return 1.5
        else if(tevekenyseg=="futas")
            return 1.8
        else
            return 1
    }

    function energiaFogyasSzorzo(sulyInKg){
     var sulyInFont = (sulyInKg/font);
     var szorzo = Math.round((sulyInFont/20));
     return szorzo;
    }
