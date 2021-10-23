export class ToDo {
    constructor(input, date) {
        this.Id = Date.now(),
        this.Input = input,
        this.Date = date,
        this.Completed = false
    }
}