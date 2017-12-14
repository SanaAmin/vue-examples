var myOptionList = [
  {key: 1, value: 'Hang Gliding'},
  {key: 2, value: 'Rock Climbing'},
  {key: 3, value: 'Para Gliding'},
  {key: 4, value: 'Yoga'},
  {key: 5, value: 'Moto'}
]

export default {
  getOptions: function () {
    console.log(myOptionList)
    return myOptionList
  },
  setOption: function (option) {
    myOptionList.push({key: myOptionList.length + 1, value: option})
  }
}
