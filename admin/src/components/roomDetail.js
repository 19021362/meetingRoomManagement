class RoomDetail {

    constructor(rooms) {
        this.rooms = rooms;
    }

    getRoomsDetail() {
        this.rooms = [
            {
                title: "Phòng 1",
                id: "1",
                floor: "1",
                department: "A",
                area: "50m2",
                chair: "60",
                equipments: "máy chiếu, bảng, tv, điều hòa, mic, loa, cây lọc nước"
            },
            {
                title: "Phòng 2",
                id: "2",
                floor: "2",
                department: "A",
                area: "60m2",
                chair: "80",
                equipments: "máy chiếu, bảng, tv, điều hòa, mic, loa"
            },
            {
                title: "Phòng 3",
                id: "3",
                floor: "3",
                department: "A",
                area: "50m2",
                chair: "40",
                equipments: "máy chiếu, bảng, tv, điều hòa, mic, loa, cây lọc nước, lọ hoa"
            },
            {
                title: "Phòng 4",
                id: "4",
                floor: "2",
                department: "B",
                area: "30m2",
                chair: "50",
                equipments: "máy chiếu, bảng, điều hòa, mic, loa"
            },
            {
                title: "Phòng 5",
                id: "5",
                floor: "3",
                department: "B",
                area: "50m2",
                chair: "100",
                equipments: "máy chiếu, bảng, điều hòa, mic, loa"
            }

        ];
        return this.rooms;
    }


}

export default RoomDetail;