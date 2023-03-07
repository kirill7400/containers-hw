class Team {
  constructor() {
    this.members = new Set();
  }

  add(v) {
    if (this.members.has(v)){
      throw new Error('Такой персонаж уже существует')
    }

    this.members.add(v)

    return this.members
  }

  addAll(v) {
    [...new Set(v)].forEach(i => this.members.add(i))

    return this.members
  }

  toArray() {
    return Array.from(this.members)
  }
}

export default Team