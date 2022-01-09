export interface ObjectiveData {
    [x: string]: any;
    data: Objective[]
  }
  
  export interface Objective {
    id: string
    category: string
    title: string
    metric_name: string
    metric_start: string
    metric_target: string
    parent_objective_id: string
    archived: string
  }
  
  export interface ObjectiveSection {
      title: string
      objective: Objective
      data: Array<Objective>
      isVisible?: boolean
  }