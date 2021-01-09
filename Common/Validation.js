var Validation = function(){
    this.kiemTraRong = function(value,selector,classNameError){
        if(value.trim() ===''){
            document.querySelector(selector).classList.add(classNameError);
            return false;
        }
        document.querySelector(selector).classList.remove(classNameError);
        return true;
    }
    this.kiemTraGiaTri = function(value,minValue,maxValue,selector,classNameError){
        if(value < minValue || value > maxValue){
            document.querySelector(selector).classList.add(classNameError);
            return false;
        }
        document.querySelector(selector).classList.remove(classNameError);
        return true;
    }
    this.kiemTraEmail = function(value,selector,classNameError){
        var regexEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        if(!value.match(regexEmail)){
            document.querySelector(selector).classList.add(classNameError);
            return false;
        }
        document.querySelector(selector).classList.remove(classNameError);
        return true;
    }
    this.kiemTraDoDai = function(value,minLength,maxLength,selector,classNameError){
        if(value.trim().length < minLength || value.trim().length > maxLength){
            document.querySelector(selector).classList.add(classNameError);
            return false;
        }
        document.querySelector(selector).classList.remove(classNameError);
        return true;
    }
    this.kiemTraKiTu = function(value,selector,classNameError){
        var regexKiTu =  /^[A-Za-z]+$/;
        if(!value.match(regexKiTu)){
            document.querySelector(selector).classList.add(classNameError);
            return false;
        }
        document.querySelector(selector).classList.remove(classNameError);
        return true;
    }
    this.kiemTraSo = function(value,selector,classNameError){
        var regexSo =  /^[0-9]+$/;  
        if(!value.match(regexSo)){
            document.querySelector(selector).classList.add(classNameError);
            return false;
        }
        document.querySelector(selector).classList.remove(classNameError);
        return true;
    }
}