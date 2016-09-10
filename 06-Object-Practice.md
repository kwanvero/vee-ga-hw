#A user on a cooking website enters the number of dinner guests, and the cooking website adjusts all the recipes accordingly.

  #Parent object of app

  Website

    User

    Recipe adjust()
      skillLevel
      numberServed
      ingredients

    SearchInput

#A user who had reserved a GoGet arrives to find it has not been returned yet, and customer service transfers her reservation to an available car.
  User

  Pod
    address

  Car getReservation()
    name
    rego
    plate
    isAvailable

  Reservation getCar()
    startTime
    endTime
    car     *what car the reservation is for... Joined with - create a car reservation*

  *We have one car, with many reservations   -   One to Many*
  *Worry about what their purpose is*

  ServiceRep
    transfer() *User, or transfer reservation*



#A user is required to watch video training sessions as part of a recertification process and answer questions about them.
    User
        isCertified

    Certificate
        trainingVideo
            session watch()
                questions answer()


#A computer game allows the user to take the role of a unit commander or general at Gettysburg and simulates the battle based on his or her commands.

    User

    Roles
        commander commands()
        general commands()
        troops
            weapons

    Battles simulated()
        opponents


#A user searches for her reservation on a hotel website, and changes the arrival date and room type.

    User

    Reservations amend()
        arrivalDate
        roomType

    SearchInput search()
