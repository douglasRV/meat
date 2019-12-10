import {
  Component,
  OnInit,
  Input,
  ContentChild,
  AfterContentInit
} from "@angular/core";
import { NgModel } from "@angular/forms";

@Component({
  selector: "mt-input-container",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"]
})
export class InputComponent implements OnInit, AfterContentInit {
  constructor() {}

  input: any;
  @Input() label: string;
  @Input() errorMessage: string;

  @ContentChild(NgModel) model: NgModel;

  ngOnInit() {}

  ngAfterContentInit(): void {
    this.input = this.model;

    if (this.input === undefined) {
      throw new Error("Esse componente precisa do ngModel");
    }
  }

  hasError(): boolean {
    return !this.input.valid && this.input.touched;
  }
}
