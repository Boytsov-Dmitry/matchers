import sorting from "../app";

let listOfPlayers = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
];

test("trying to sort list of players", () => {
    let ideal = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
    ];

    let result = sorting(listOfPlayers);

    expect(result).toEqual(ideal)
});