export class BreadcrumbModel {
  constructor(public text: string, public action?: string[]) {
    this.action = action ? action : [];
  }
}
