export const SpeakerItemComponent = {
  bindings : {
    data: '<'
  },
  template: `
    <li class='speaker'>
      <span class=''>{{$ctrl.data.name}}</span>
      <p><a ng-href='#/speakers/{{$ctrl.data.id}}'>{{$ctrl.data.talk}}</a></p>
    </li>
  `
}
