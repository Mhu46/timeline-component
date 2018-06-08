export class TimelineElement {
  id: string;
  name: string;
  severity: string;
  start: string;
  end: string;
  causes: any;
  selected?: boolean;

  constructor(element) {
    this.id = element.id;
    this.name = element.name;
    this.severity = element.severity;
    this.start = element.start;
    this.end = element.end;
    element.causes.forEach(subElement => {
      const se = new TimeLineSubElement(subElement);
      this.causes.push(se);
    });
  }
}

export class TimeLineSubElement {
  id: string;
  text: string;
  severity: string;
  start: string;
  end: string;
  affected: any;

  constructor(subElement) {
    this.id = subElement.id;
    this.text = subElement.text;
    this.severity = subElement.severity;
    this.start = subElement.start;
    this.end = subElement.end;
    this.affected = subElement.affected;
  }

}
