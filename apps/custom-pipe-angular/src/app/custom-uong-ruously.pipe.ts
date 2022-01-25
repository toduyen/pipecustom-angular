import { Pipe, PipeTransform } from '@angular/core';
type userType = {
  username: string,
  age: number
}
@Pipe({
  name: 'customUongRuously'
})
export class CustomUongRuouslyPipe implements PipeTransform {

  transform(value: userType[] , condition: string):userType[]{
    if(condition === "LOC"){
      return value.filter(x => x.age >= 19);
    }
    return value
  }

}
