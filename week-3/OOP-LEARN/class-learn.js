class Car {
  constructor(brand) {
    this._carname = brand;
  }
  get carname() {
    return this._carname;
  }
  set carname(x) {
    this.x_carname = x;
  }
}

newCar = new Car('Pajero');
newcar.carname = 'Alphard'; //mengubah nilai carname
console.log(newcar.carname); // output: Alphard
