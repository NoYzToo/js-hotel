let hotel = [
    [
        {
            room: 1,
            price: 300,
            brand: "Luxe",
            children: false,
        },
        {
            room: 2,
            price: 4000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 3,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 4,
            price: 900,
            brand: "Luxe",
            children: true,
        },
    ],
    [
        {
            room: 5,
            price: 700,
            brand: "Luxe",
            children: true,
        },
        {
            room: 6,
            price: 79000,
            brand: "President",
            children: true,
        },
        {
            room: 7,
            price: 600,
            brand: "Luxe",
            children: false,
        },
        {
            room: 8,
            price: 950,
            brand: "Luxe",
            children: true,
        },
    ],
    [
        {
            room: 9,
            price: 1900,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 10,
            price: 5000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 11,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 12,
            price: 250,
            brand: "Luxe",
            children: false,
        },
    ],
    [
        {
            room: 13,
            price: 10000,
            brand: "President",
            children: true,
        },
        {
            room: 14,
            price: 8000,
            brand: "President",
            children: false,
        },
    ],
];

let rooms = {
    all_roms: [],
    rooms: 0,
};
let brands = {
    president: [],
    deluxe: [],
    luxe: [],
};

let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
};
//1 отфильтровать по категориям
//2 добавить ключ eting с буленовым значением в каждый номер
//3 посчитать и красиво раставить все команты переменную rooms
//4 найти самую дорогую комнату
//5 посчитать сколько стоит каждый этаж
//6 посчитать сколько стоят все комнаты вместе взятые
//7 найти все комнаты в которых живут дети
function setup(array) {

    let i = 0
    let floors = {}
    let allPrices = {}
    let prices = []
    let roomsWithChildren = {}
    
    floors.floors = array.length
    
    for (let item in room_level) {
        room_level[item] = hotel[i].reduce((a, elem) => a + elem.price, 0)
        i++
    }
    for (let floor of array) {

        for (let floorRoom of floor) {
            if (floorRoom.brand === "President" || floorRoom.brand === "Deluxe") {
                floorRoom.eting = true
            } else {
                floorRoom.eting = false
            }


            prices.push(floorRoom.price)
            rooms.all_roms.push(floorRoom)
            rooms.rooms = rooms.all_roms.length


            if (floorRoom.brand == "President") {
                brands.president.push(floorRoom)
            }
            else if (floorRoom.brand == "Deluxe") {
                brands.deluxe.push(floorRoom)
            }
            else if (floorRoom.brand == "Luxe") {
                brands.luxe.push(floorRoom)
            }
        }

    }

    roomsWithChildren.WithChildren = []
    roomsWithChildren.WithChildren.push(rooms.all_roms.filter((item) => {
        if (item.children == true)
            return true
    }))

    allPrices.allRoomPrice = prices.reduce((a, b) => a + b)

    let max = prices.pop(prices.sort((a, b) => a - b))
    for (let floor of array) {
        for (let floorRoom of floor) {
            if (floorRoom.price == max) {
                max = {}
                max.dearestRoom = floorRoom
            }
        }
    }

    console.log(floors)
    console.log(brands)
    console.log(rooms)
    console.log(max)
    console.log(room_level)
    console.log(allPrices)
    console.log(roomsWithChildren)
}

setup(hotel)