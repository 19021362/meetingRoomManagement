class RoomDetail {

    constructor(rooms) {
        this.rooms = rooms;
    }

    getRoomsDetail() {
        this.rooms = [
            {
                title: "Room 1",
                id: "1",
                floor: "1",
                department: "A",
                area: "50m2",
                chair: "60",
                equipments: "project, board, tv, air-conditioner, mic, speaker, water purifier"
            },
            {
                title: "Room 2",
                id: "2",
                floor: "2",
                department: "A",
                area: "60m2",
                chair: "80",
                equipments: "project, board, tv, air-conditioner, mic, speaker"
            },
            {
                title: "Room 3",
                id: "3",
                floor: "3",
                department: "A",
                area: "50m2",
                chair: "40",
                equipments: "project, board, tv, air-conditioner, mic, speaker, water purifier, flower vase"
            },
            {
                title: "Room 4",
                id: "4",
                floor: "2",
                department: "B",
                area: "30m2",
                chair: "50",
                equipments: "project, board, air-conditioner, mic, speaker"
            },
            {
                title: "Room 5",
                id: "5",
                floor: "3",
                department: "B",
                area: "50m2",
                chair: "100",
                equipments: "project, board, air-conditioner, mic, speaker"
            }

        ];
        return this.rooms;
    }


}

export default RoomDetail;