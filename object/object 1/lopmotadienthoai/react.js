class mobile {
    constructor() {
        this.battery = 100;
        this.isPoweredOn = false;
        this.draftingMessage = '';
        this.inbox = [];
        this.sentMessages = [];
    }

    checkPoweredStatus() {
        if (!this.isPoweredOn) {
            alert('dien thoai dang tat');
        } else {
            alert('dien thoai dang bat');
        }
    }

    powerOn() {
        this.isPoweredOn = true;
        alert('dien thoai dang bat');
    }

    powerOff() {
        this.isPoweredOn = false;
        alert('dien thoai dang tat');
    }

    chargeBattery() {
        this.battery = 100;
        alert('dien thoai day pin');
    }

    draftMessage() {
        if (!this.isPoweredOn) {
            return alert('dien thoai dang tat');
        }
        this.draftingMessage = message;
        this.battery--;
    }

    receiveMessage(message) {
        if (!this.isPoweredOn) {
            return alert('dien thoai dang tat');
        }
        this.inbox.push(message); //inbox: Là một mảng dùng để lưu các tin nhắn đã nhận.
        this.battery--;
    }

    sendMessage(message) {
        if (!this.isPoweredOn) {
            alert('dien thoai dang tat');
        }
        if (this.draftingMessage === "") {
            alert('dien thoai khong co tin nhan de gui');
        }
        receiver.receiveMessage(this.draftingMessage);
        this.sentMessages.push(this.draftingMessage);
        this.draftingMessage = " ";
        this.battery--;
    }

    viewInbox() {
        if (!this.isPoweredOn) {
            return alert('dien thoai dang tat');
        }
        alert(`hop thu den ${this.inbox} `);
    }

    viewSentMessages() {
        if (!this.isPoweredOn) {
            return alert('dien thoai dang tat');
        }
        alert(`tin da gui ${this.sentMessages} `);
    }
}

let phone1 = new Mobile();
let phone2 = new Mobile();

phone1.powerOn();
phone1.draftMessage('Xin chào!');
phone1.sendMessage(phone2);
phone1.viewSentMessages();
phone2.viewInbox();