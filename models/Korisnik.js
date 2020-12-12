const validator = require('validator');
const korisnici = require('../server').db().collection('korisnici');

let Korisnik = function (data) {
    this.data = data;
    this.errors = [];
};

Korisnik.prototype.cleanUp = function () {
    if (typeof this.data.ime != 'string') {
        this.data.ime = '';
    }
    if (typeof this.data.password != 'string') {
        this.data.password = '';
    }

    this.data = {
        ime: this.data.ime.trim().toLowerCase(),
        password: this.data.password,
        date: new Date(),
        pozicija: 'работник',
        adminAprovel: false,
    };
};

Korisnik.prototype.validate = function () {
    return new Promise(async (resolve, reject) => {
        if (this.data.ime == '') {
            this.errors.push('Мора да внесете Корисничко име.');
        }
        if (this.data.ime.length > 0 && this.data.ime.length < 4) {
            this.errors.push('Корисничкото име мора да содржи барем 4 букви.');
        }
        if (this.data.ime.length > 15) {
            this.errors.push(
                'Корисничкото име не смее да надмине повеќе од 15 букви.'
            );
        }
        if (this.data.ime != '' && !validator.isAlphanumeric(this.data.ime)) {
            this.errors.push(
                'Корисничкото име мора да содржи само букви и бројки.'
            );
        }
        if (this.data.password == '') {
            this.errors.push('Мора да внесете лозинка.');
        }
        if (this.data.password.length > 0 && this.data.password.length < 4) {
            this.errors.push('Лозинката мора да содржи барем 4 букви.');
        }
        if (this.data.password.length > 15) {
            this.errors.push(
                'Лозинката не смее да надмине повеќе од 15 букви.'
            );
        }

        if (
            this.data.ime.length > 2 &&
            this.data.ime.length < 15 &&
            validator.isAlphanumeric(this.data.ime)
        ) {
            let imeExists = await korisnici.findOne({ ime: this.data.ime });
            if (imeExists) {
                this.errors.push('Тоа корисничко име е веќе искористено.');
            }
        }

        resolve();
    });
};

Korisnik.getAll = async () => {
    return await korisnici.find().sort({ date: -1 }).toArray();
};

Korisnik.prototype.add = function () {
    return new Promise(async (resolve, reject) => {
        this.cleanUp();
        await this.validate();

        if (!this.errors.length) {
            await korisnici.insertOne(this.data);
        } else {
            reject(this.errors);
        }
    });
};

Korisnik.edit = async (nameIn, nameOut) => {
    await korisnici.updateOne({ ime: nameIn }, { $set: { ime: nameOut } });
};

Korisnik.delete = async (nameIn) => {
    await korisnici.deleteOne({ ime: nameIn });
};

module.exports = Korisnik;
