let ob = {name: "Flim"}
let student = Object.create(ob)
student.studentid = 4
 
console.log(ob)

const obj = {
    name:'first',
    address:{
        No:'165/121',
        city:'bkk'
    }
}


function compareStudent (obj1, obj2) {
    if (obj1.id === obj2.id && obj1.name.toUpperCase() === obj2.name.toUpperCase()) {
        return true;
    }
    return false;
}
 
const obj1 = {id: 66, name: "Flim"}
const obj2 = {id: 66, name: "Flim"}
 
console.log(compareStudent(obj1, obj2));


class Device {
  constructor(brand, power) {
    this.brand = brand;
    this.power = power;
  }
  turnOn() {
    console.log(`The ${this.brand} is now on.`);
  }
}
class Laptop extends Device {
  constructor(brand, power, batteryLife) {
    super(brand, power);
    this.batteryLife = batteryLife;
  }
  showBattery() {
    console.log(`This Laptop has ${this.batteryLife} hours of battery.`);
  }
}
class Phone extends Device {
  constructor(brand, power, cameraMegapixels) {
    super(brand, power);
    this.cameraMegapixels = cameraMegapixels;
  }
  takePhoto() {
    console.log(`Taking a photo with ${this.cameraMegapixels} MP camera.`);
  }
}


let d1 = new Device("Generic", 100);
let l1 = new Laptop("Lenovo", 65, 10);
let p1 = new Phone("Vivo", 40, 20);


d1.turnOn();
l1.turnOn();
l1.showBattery();
p1.turnOn();
p1.takePhoto()


 class Machine {
  constructor(os, disk) {
    this.os = os;
    this.disk = disk;
  }
}

class Computer extends Machine {
  constructor(brand, os, disk) {
    super(os, disk);
    this.brand = brand;
    this.vms = [];
  }
}

class VM extends Machine {
  constructor(host, os, disk) {
    if (disk > host.disk) throw new Error("Not enough disk!");
    super(os, disk);
    this.host = host;
    host.disk -= disk;      // หัก disk ออกจาก host
    host.vms.push(this);    // บันทึก VM ไว้ใน host
  }
}

let pc = new Computer("Dell", "Windows", 500);
let vm1 = new VM(pc, "Linux", 100);
let vm2 = new VM(pc, "Ubuntu", 200);
let vm3 = new VM(pc, "Debian", 300); // จะ throw error (ไม่พอดิสก์)

console.log(pc.brand);       // Dell
console.log(pc.disk);        // เหลือ 200 หลังสร้าง 2 VM
console.log(pc.vms.length);  // 2


