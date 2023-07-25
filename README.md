# Payment app

## Requirements

* Backend
  * Pay money to another account
  * Add money to your account
  * Authenticate a payment

* Frontend app
  * Use axios to fetch the data
  * Implement all of the public interfaces


## Design

* Pay money to another account
  * Money
  * Account
  * Pay (action)
 
Account ->  Money  <- Account
 30N -       10N       50N +

* Account
  * id: string
  * balance: number

* Money
  * value: number

* Pay(money, reciever, sender)
  * Try to subtract the money from the sender
    * If their balance is insuffient, throw an error
  * Add the money to the reciever
  * End
