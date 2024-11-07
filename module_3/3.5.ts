// Access modifiers

{

    // public
    // private
    // protected
    // readonly
    // static
    // abstract
    // readonly



    // public
    // private
    // protected

    class BackAccount{
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount: number){
            this._balance += amount;
        }

        getBalance(){
            return this._balance
        }

    }


    class StudentAccount extends BackAccount{
        constructor(id: number, name: string, balance: number){
            super(id, name, balance);
        }
    }


const poorAccount =  new BackAccount(1, "John", 1000);

poorAccount.addDeposit(1000);

const balance = poorAccount.getBalance();























}