export interface Task {
  id: number;
  titulo: string;
  completo: boolean;
  editar?: boolean;
  original?: any;
}
