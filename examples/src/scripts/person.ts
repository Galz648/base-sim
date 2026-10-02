export class Person extends Resource {
  @exports display_name: string = '';
  @export_range(0, 1) fatigue: float = 0.2;
}
