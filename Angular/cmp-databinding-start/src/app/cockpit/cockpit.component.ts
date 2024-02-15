import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverNameInput', {static:true}) serverNameInput: ElementRef;
  @ViewChild('serverContentInput', {static:true}) serverContentInput: ElementRef;

  onAddServer() {
    this.serverCreated.emit({serverName: this.serverNameInput.nativeElement.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput,serverContentInput) {
    this.blueprintCreated.emit({serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }
}
