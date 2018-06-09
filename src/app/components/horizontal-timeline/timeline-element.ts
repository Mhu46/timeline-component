export class TimelineElement {
  id: string;
  name: string;
  severity: string;
  start: Date;
  end: Date;
  causes: any;
  selected = false;

  constructor(element) {
    this.id = element.id;
    this.name = element.name;
    this.severity = element.severity;
    this.start = element.start;
    this.end = element.end;
    this.selected = element.selected ? element.selected : false;
    const a = Array.isArray(element.causes) ? element.causes.forEach(subElement => {
      const se = new TimeLineSubElement(subElement);
      this.causes.push(se);
    }) : '';
  }
}

export class TimeLineSubElement {
  id: string;
  text: string;
  severity: string;
  start: Date;
  end: Date;
  affected: any;
  selected = false;

  constructor(subElement) {
    this.id = subElement.id;
    this.text = subElement.text;
    this.severity = subElement.severity;
    this.start = subElement.start;
    this.end = subElement.end;
    this.affected = subElement.affected;
    this.selected = subElement.selected ? subElement.selected : false;
  }

}
