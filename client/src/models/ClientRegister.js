let ClientRegister = function (data) {
    this.data = data;
    this.errors = [];
};

ClientRegister.prototype.validate = function () {
    return new Promise(async (resolve, reject) => {
        if (this.data.ime === '') {
            this.errors.push('Мора да внесете Корисничко име...');
        }
        if (this.data.ime.length > 0 && this.data.ime.length < 4) {
            this.errors.push(
                'Корисничкото име мора да содржи барем 4 букви...'
            );
        }
        if (this.data.ime.length > 15) {
            this.errors.push(
                'Корисничкото име не смее да надмине повеќе од 15 букви...'
            );
        }
        if (this.data.password === '') {
            this.errors.push('Мора да внесете лозинка...');
        }
        if (this.data.password.length > 0 && this.data.password.length < 4) {
            this.errors.push('Лозинката мора да содржи барем 4 букви...');
        }
        if (this.data.password.length > 15) {
            this.errors.push(
                'Лозинката не смее да надмине повеќе од 15 букви...'
            );
        }

        resolve();
    });
};

ClientRegister.prototype.confirmPassword = function () {
    if (this.data.password2 === '') {
        this.errors.push('Мора да ја потврдите лозинката...');
    }
    if (
        this.data.password2.length > 0 &&
        this.data.password !== this.data.password2
    ) {
        this.errors.push('Лозинката не се совпаѓа...');
    }
};

ClientRegister.prototype.cleanUp = function () {
    if (typeof this.data.ime != 'string') {
        this.data.ime = '';
    }
    if (typeof this.data.password != 'string') {
        this.data.password = '';
    }

    this.data = {
        ime: this.data.ime,
        password: this.data.password,
    };
};

ClientRegister.prototype.registrationSendToServer = function () {
    return new Promise(async (resolve, reject) => {
        await this.validate();
        await this.confirmPassword();
        this.cleanUp();

        if (!this.errors.length) {
            resolve();
        } else {
            reject(this.errors);
        }
    });
};

ClientRegister.prototype.authenticationSendToServer = function () {
    return new Promise(async (resolve, reject) => {
        await this.validate();
        this.cleanUp();

        if (!this.errors.length) {
            resolve();
        } else {
            reject(this.errors);
        }
    });
};

module.exports = ClientRegister;
