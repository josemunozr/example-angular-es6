import controller from './speaker-list.controller'

export const SpeakerListComponent = {
  bindings : {
    speakers: '<'
  },
  controller,
  template: `
    <ul class="listItem">
      <speaker-item ng-repeat='speaker in $ctrl.speakers' data='speaker'>
      </speaker-item>
    </ul>
  `
}
