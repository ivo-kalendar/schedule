const bcrypt = require('bcryptjs');
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

    this.data = { ime: this.data.ime, password: this.data.password };
};

Korisnik.prototype.extraData = function () {
    this.data.date = new Date();
    this.data.position = 'unknown';
    this.data.adminAprovel = false;
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

        resolve();
    });
};

Korisnik.prototype.dbValidate = function () {
    return new Promise(async (resolve, reject) => {
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

Korisnik.prototype.passwordHash = async function () {
    const salt = await bcrypt.genSalt(10);
    this.data.password = await bcrypt.hash(this.data.password, salt);
};

Korisnik.prototype.add = function () {
    return new Promise(async (resolve, reject) => {
        this.cleanUp();
        this.extraData();
        this.validate();
        await this.dbValidate();
        await this.passwordHash();

        if (!this.errors.length) {
            await korisnici.insertOne(this.data);

            resolve();
        } else {
            reject(this.errors);
        }
    });
};

Korisnik.prototype.authenticate = function () {
    return new Promise(async (resolve, reject) => {
        this.cleanUp();
        this.validate();

        if (!this.errors.length) {
            try {
                let authUser = await korisnici
                    .find({ ime: this.data.ime })
                    .toArray();

                let isMatch;

                if (authUser) {
                    isMatch = await bcrypt.compare(
                        this.data.password,
                        authUser[0].password
                    );
                }

                if (!isMatch) {
                    this.errors.push('bcrypt: Не се совпаѓаат лозинките.');
                } else {
                    this.data = authUser[0];
                }
            } catch (error) {
                this.errors.push('Тоа корисничко име не постои.');
            }

            resolve();
        } else {
            reject(this.errors);
        }
    });
};

Korisnik.getAll = async () => {
    return await korisnici.find().sort({ date: -1 }).toArray();
};

// Korisnik.edit = async (nameIn, nameOut) => {
//     await korisnici.updateOne({ ime: nameIn }, { $set: { ime: nameOut } });
// };

// Korisnik.delete = async (nameIn) => {
//     await korisnici.deleteOne({ ime: nameIn });
// };

module.exports = Korisnik;
