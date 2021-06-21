function Laptop(name ,model ,num ,ageOfDev ,Ozu ,Pzu ,weight){
    let self = this;
    self.isDrive = false;
    self.isWebCam = true;
    self.name = name;
    self.model = model;
    self.num = num;
    self.ageOfDev = ageOfDev;
    self.Ozu = Ozu;
    self.Pzu = Pzu;
    self.weight = weight;
}
Laptop.prototype.getNameAndModel = function(){
    return "Название Ноутбука: " + this.name + "\nМодель: " + this.model;
}
Laptop.prototype.getOzuAndPzu = function(){
    return "OZU: " + this.Ozu + "\nPZU: " + this.Pzu;
}
let lap = new Laptop("Acer" ,"x2" ,213,2019,"5гб" ,"8гб", "1200 гр");
console.log(lap.getNameAndModel());
console.log(lap.getOzuAndPzu());
function Ultrabook(name ,model ,num ,ageOfDev ,Ozu ,Pzu ,weight){
    Laptop.call(this);
    let self = this;
    self.name = name;
    self.model = model;
    self.num = num;
    self.ageOfDev = ageOfDev;
    self.Ozu = Ozu;
    self.Pzu = Pzu;
    self.weight = weight;
}
Ultrabook.prototype = Object.create(Laptop.prototype);
Ultrabook.prototype.constructor = Ultrabook.prototype;
let ult = new Ultrabook("Asus" ,"ZenBook" ,123,2020,"2гб","12гб", "1300 гр");
Ultrabook.prototype.getInfoUltrabook = function(){
    if(parseInt(this.weight) > 1500){
        return "Название Ультрабука: " + this.name + "\nГод изготовления: " + this.ageOfDev + "\nВес: " + "Масса не может быть выше 1.5 кг!";
    }
    return "Название Ультрабука: " + this.name + "\nГод изготовления: " + this.ageOfDev + "\nВес: " + this.weight;
}
console.log(ult.getInfoUltrabook());
console.log(ult.getOzuAndPzu()); //результат наследования метода getOzuAndPzu() из родителя Laptop;
console.log(ult.isDrive); //результат наследования дисковода из родителя Laptop;
console.log(ult.isWebCam); //результат наследования вебкамеры из родителя Laptop;